export declare const dogechain: {
    blockExplorers: {
        readonly default: {
            readonly name: "DogeChainExplorer";
            readonly url: "https://explorer.dogechain.dog";
            readonly apiUrl: "https://explorer.dogechain.dog/api";
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
    id: 2000;
    name: "Dogechain";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Dogechain";
        readonly symbol: "DC";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.dogechain.dog"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=dogechain.d.ts.map