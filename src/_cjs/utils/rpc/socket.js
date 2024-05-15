"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSocketRpcClient = exports.socketClientCache = void 0;
const request_js_1 = require("../../errors/request.js");
const createBatchScheduler_js_1 = require("../promise/createBatchScheduler.js");
const withTimeout_js_1 = require("../promise/withTimeout.js");
const id_js_1 = require("./id.js");
exports.socketClientCache = new Map();
async function getSocketRpcClient(params) {
    const { getSocket, key = 'socket', reconnect = true, url } = params;
    const { attempts = 5, delay = 2_000 } = typeof reconnect === 'object' ? reconnect : {};
    let socketClient = exports.socketClientCache.get(`${key}:${url}`);
    if (socketClient)
        return socketClient;
    let reconnectCount = 0;
    const { schedule } = (0, createBatchScheduler_js_1.createBatchScheduler)({
        id: `${key}:${url}`,
        fn: async () => {
            const requests = new Map();
            const subscriptions = new Map();
            let error;
            let socket;
            async function setup() {
                return getSocket({
                    onError(error_) {
                        error = error_;
                        for (const request of requests.values())
                            request.onError?.(error);
                        for (const subscription of subscriptions.values())
                            subscription.onError?.(error);
                        requests.clear();
                        subscriptions.clear();
                        if (reconnect && reconnectCount < attempts)
                            setTimeout(async () => {
                                reconnectCount++;
                                socket = await setup().catch(console.error);
                            }, delay);
                    },
                    onOpen() {
                        error = undefined;
                        reconnectCount = 0;
                    },
                    onResponse(data) {
                        const isSubscription = data.method === 'eth_subscription';
                        const id = isSubscription ? data.params.subscription : data.id;
                        const cache = isSubscription ? subscriptions : requests;
                        const callback = cache.get(id);
                        if (callback)
                            callback.onResponse(data);
                        if (!isSubscription)
                            cache.delete(id);
                    },
                });
            }
            socket = await setup();
            error = undefined;
            socketClient = {
                close() {
                    socket.close();
                    exports.socketClientCache.delete(`${key}:${url}`);
                },
                socket,
                request({ body, onError, onResponse }) {
                    if (error && onError)
                        onError(error);
                    const id = body.id ?? id_js_1.idCache.take();
                    const callback = (response) => {
                        if (typeof response.id === 'number' && id !== response.id)
                            return;
                        if (body.method === 'eth_subscribe' &&
                            typeof response.result === 'string')
                            subscriptions.set(response.result, {
                                onResponse: callback,
                                onError,
                            });
                        if (body.method === 'eth_unsubscribe')
                            subscriptions.delete(body.params?.[0]);
                        onResponse(response);
                    };
                    requests.set(id, { onResponse: callback, onError });
                    try {
                        socket.request({
                            body: {
                                jsonrpc: '2.0',
                                id,
                                ...body,
                            },
                        });
                    }
                    catch (error) {
                        onError?.(error);
                    }
                },
                requestAsync({ body, timeout = 10_000 }) {
                    return (0, withTimeout_js_1.withTimeout)(() => new Promise((onResponse, onError) => this.request({
                        body,
                        onError,
                        onResponse,
                    })), {
                        errorInstance: new request_js_1.TimeoutError({ body, url }),
                        timeout,
                    });
                },
                requests,
                subscriptions,
                url,
            };
            exports.socketClientCache.set(`${key}:${url}`, socketClient);
            return [socketClient];
        },
    });
    const [_, [socketClient_]] = await schedule();
    return socketClient_;
}
exports.getSocketRpcClient = getSocketRpcClient;
//# sourceMappingURL=socket.js.map