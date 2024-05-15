export declare const telosTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "Teloscan (testnet)";
            readonly url: "https://testnet.teloscan.io/";
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
    id: 41;
    name: "Telos";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Telos";
        readonly symbol: "TLOS";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://testnet.telos.net/evm"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=telosTestnet.d.ts.map