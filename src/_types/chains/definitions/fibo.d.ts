export declare const fibo: {
    blockExplorers: {
        readonly default: {
            readonly name: "FiboScan";
            readonly url: "https://scan.fibochain.org";
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
    id: 12306;
    name: "Fibo Chain";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "fibo";
        readonly symbol: "FIBO";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://network.hzroc.art"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=fibo.d.ts.map