export declare const wemix: {
    blockExplorers: {
        readonly default: {
            readonly name: "wemixExplorer";
            readonly url: "https://explorer.wemix.com";
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
    id: 1111;
    name: "WEMIX";
    nativeCurrency: {
        readonly name: "WEMIX";
        readonly symbol: "WEMIX";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.wemix.com"];
        };
        readonly public: {
            readonly http: readonly ["https://api.wemix.com"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
    readonly network: "wemix-mainnet";
};
//# sourceMappingURL=wemix.d.ts.map