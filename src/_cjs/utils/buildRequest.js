"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldRetry = exports.buildRequest = void 0;
const base_js_1 = require("../errors/base.js");
const request_js_1 = require("../errors/request.js");
const rpc_js_1 = require("../errors/rpc.js");
const withRetry_js_1 = require("./promise/withRetry.js");
function buildRequest(request, options = {}) {
    return async (args, overrideOptions = {}) => {
        const { retryDelay = 150, retryCount = 3 } = {
            ...options,
            ...overrideOptions,
        };
        return (0, withRetry_js_1.withRetry)(async () => {
            try {
                return await request(args);
            }
            catch (err_) {
                const err = err_;
                switch (err.code) {
                    case rpc_js_1.ParseRpcError.code:
                        throw new rpc_js_1.ParseRpcError(err);
                    case rpc_js_1.InvalidRequestRpcError.code:
                        throw new rpc_js_1.InvalidRequestRpcError(err);
                    case rpc_js_1.MethodNotFoundRpcError.code:
                        throw new rpc_js_1.MethodNotFoundRpcError(err);
                    case rpc_js_1.InvalidParamsRpcError.code:
                        throw new rpc_js_1.InvalidParamsRpcError(err);
                    case rpc_js_1.InternalRpcError.code:
                        throw new rpc_js_1.InternalRpcError(err);
                    case rpc_js_1.InvalidInputRpcError.code:
                        throw new rpc_js_1.InvalidInputRpcError(err);
                    case rpc_js_1.ResourceNotFoundRpcError.code:
                        throw new rpc_js_1.ResourceNotFoundRpcError(err);
                    case rpc_js_1.ResourceUnavailableRpcError.code:
                        throw new rpc_js_1.ResourceUnavailableRpcError(err);
                    case rpc_js_1.TransactionRejectedRpcError.code:
                        throw new rpc_js_1.TransactionRejectedRpcError(err);
                    case rpc_js_1.MethodNotSupportedRpcError.code:
                        throw new rpc_js_1.MethodNotSupportedRpcError(err);
                    case rpc_js_1.LimitExceededRpcError.code:
                        throw new rpc_js_1.LimitExceededRpcError(err);
                    case rpc_js_1.JsonRpcVersionUnsupportedError.code:
                        throw new rpc_js_1.JsonRpcVersionUnsupportedError(err);
                    case rpc_js_1.UserRejectedRequestError.code:
                        throw new rpc_js_1.UserRejectedRequestError(err);
                    case rpc_js_1.UnauthorizedProviderError.code:
                        throw new rpc_js_1.UnauthorizedProviderError(err);
                    case rpc_js_1.UnsupportedProviderMethodError.code:
                        throw new rpc_js_1.UnsupportedProviderMethodError(err);
                    case rpc_js_1.ProviderDisconnectedError.code:
                        throw new rpc_js_1.ProviderDisconnectedError(err);
                    case rpc_js_1.ChainDisconnectedError.code:
                        throw new rpc_js_1.ChainDisconnectedError(err);
                    case rpc_js_1.SwitchChainError.code:
                        throw new rpc_js_1.SwitchChainError(err);
                    case 5000:
                        throw new rpc_js_1.UserRejectedRequestError(err);
                    default:
                        if (err_ instanceof base_js_1.BaseError)
                            throw err_;
                        throw new rpc_js_1.UnknownRpcError(err);
                }
            }
        }, {
            delay: ({ count, error }) => {
                if (error && error instanceof request_js_1.HttpRequestError) {
                    const retryAfter = error?.headers?.get('Retry-After');
                    if (retryAfter?.match(/\d/))
                        return Number.parseInt(retryAfter) * 1000;
                }
                return ~~(1 << count) * retryDelay;
            },
            retryCount,
            shouldRetry: ({ error }) => shouldRetry(error),
        });
    };
}
exports.buildRequest = buildRequest;
function shouldRetry(error) {
    if ('code' in error && typeof error.code === 'number') {
        if (error.code === -1)
            return true;
        if (error.code === rpc_js_1.LimitExceededRpcError.code)
            return true;
        if (error.code === rpc_js_1.InternalRpcError.code)
            return true;
        return false;
    }
    if (error instanceof request_js_1.HttpRequestError && error.status) {
        if (error.status === 403)
            return true;
        if (error.status === 408)
            return true;
        if (error.status === 413)
            return true;
        if (error.status === 429)
            return true;
        if (error.status === 500)
            return true;
        if (error.status === 502)
            return true;
        if (error.status === 503)
            return true;
        if (error.status === 504)
            return true;
        return false;
    }
    return true;
}
exports.shouldRetry = shouldRetry;
//# sourceMappingURL=buildRequest.js.map