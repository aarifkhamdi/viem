export declare const evmos: {
    blockExplorers: {
        readonly default: {
            readonly name: "Evmos Block Explorer";
            readonly url: "https://escan.live";
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
    id: 9001;
    name: "Evmos";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Evmos";
        readonly symbol: "EVMOS";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://eth.bd.evmos.org:8545"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=evmos.d.ts.map