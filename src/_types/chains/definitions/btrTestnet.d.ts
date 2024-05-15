export declare const btrTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "btrscan";
            readonly url: "https://testnet-scan.bitlayer.org";
            readonly apiUrl: "https://testnet-scan.bitlayer.org/apis";
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
    id: 200810;
    name: "Bitlayer Testnet";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://testnet-rpc.bitlayer.org"];
            readonly webSocket: readonly ["wss://testnet-ws.bitlayer.org", "wss://testnet-ws.bitlayer-rpc.com"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=btrTestnet.d.ts.map