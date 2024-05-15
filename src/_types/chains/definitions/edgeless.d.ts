export declare const edgeless: {
    blockExplorers: {
        readonly default: {
            readonly name: "Edgeless Explorer";
            readonly url: "https://explorer.edgeless.network";
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
    id: 2026;
    name: "Edgeless Network";
    nativeCurrency: {
        readonly name: "Edgeless Wrapped ETH";
        readonly symbol: "EwETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.edgeless.network/http"];
            readonly webSocket: readonly ["wss://rpc.edgeless.network/ws"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=edgeless.d.ts.map