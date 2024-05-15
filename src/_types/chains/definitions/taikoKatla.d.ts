export declare const taikoKatla: {
    blockExplorers: {
        readonly default: {
            readonly name: "blockscout";
            readonly url: "https://explorer.katla.taiko.xyz";
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
    id: 167008;
    name: "Taiko Katla (Alpha-6 Testnet)";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.katla.taiko.xyz"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.katla.taiko.xyz"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
    readonly network: "tko-katla";
};
//# sourceMappingURL=taikoKatla.d.ts.map