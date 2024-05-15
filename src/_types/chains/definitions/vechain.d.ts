export declare const vechain: {
    blockExplorers: {
        readonly default: {
            readonly name: "Vechain Explorer";
            readonly url: "https://explore.vechain.org";
        };
        readonly vechainStats: {
            readonly name: "Vechain Stats";
            readonly url: "https://vechainstats.com";
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
    id: 100009;
    name: "Vechain";
    nativeCurrency: {
        readonly name: "VeChain";
        readonly symbol: "VET";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.vechain.org"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=vechain.d.ts.map