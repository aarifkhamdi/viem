export declare const hedera: {
    blockExplorers: {
        readonly default: {
            readonly name: "Hashscan";
            readonly url: "https://hashscan.io/mainnet";
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
    id: 295;
    name: "Hedera Mainnet";
    nativeCurrency: {
        readonly symbol: "HBAR";
        readonly name: "HBAR";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://mainnet.hashio.io/api"];
        };
    };
    sourceId?: number | undefined;
    testnet: false;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
    readonly network: "hedera-mainnet";
};
//# sourceMappingURL=hedera.d.ts.map