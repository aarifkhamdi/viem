export declare const btr: {
    blockExplorers: {
        readonly default: {
            readonly name: "btrscan";
            readonly url: "https://www.btrscan.com";
            readonly apiUrl: "https://www.btrscan.com/apis";
        };
    };
    contracts?: {
        [x: string]: import("../../index.js").ChainContract | {
            [sourceId: number]: import("../../index.js").ChainContract | undefined;
        } | undefined;
        ensRegistry?: import("../../index.js").ChainContract | undefined;
        ensUniversalResolver?: import("../../index.js").ChainContract | undefined;
        multicall3?: import("../../index.js").ChainContract | undefined;
    } | undefined;
    id: 200901;
    name: "Bitlayer";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.bitlayer.org", "https://rpc.bitlayer-rpc.com", "https://rpc.ankr.com/bitlayer"];
            readonly webSocket: readonly ["wss://ws.bitlayer.org", "wss://ws.bitlayer-rpc.com"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=btr.d.ts.map