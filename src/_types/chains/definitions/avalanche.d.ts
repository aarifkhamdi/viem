export declare const avalanche: {
    blockExplorers: {
        readonly default: {
            readonly name: "SnowScan";
            readonly url: "https://snowscan.xyz";
            readonly apiUrl: "https://api.snowscan.xyz/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 11907934;
        };
    };
    id: 43114;
    name: "Avalanche";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "Avalanche";
        readonly symbol: "AVAX";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://api.avax.network/ext/bc/C/rpc"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=avalanche.d.ts.map