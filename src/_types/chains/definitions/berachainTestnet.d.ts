export declare const berachainTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "Berachain";
            readonly url: "https://artio.beratrail.io";
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
    id: 80085;
    name: "Berachain Artio";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "BERA Token";
        readonly symbol: "BERA";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://artio.rpc.berachain.com"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=berachainTestnet.d.ts.map