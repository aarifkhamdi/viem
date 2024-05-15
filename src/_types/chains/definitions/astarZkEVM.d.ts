export declare const astarZkEVM: {
    blockExplorers: {
        readonly default: {
            readonly name: "Astar zkEVM Explorer";
            readonly url: "https://astar-zkevm.explorer.startale.com";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 93528;
        };
    };
    id: 3776;
    name: "Astar zkEVM";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.startale.com/astar-zkevm"];
        };
    };
    sourceId?: number | undefined;
    testnet: false;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
    readonly network: "AstarZkEVM";
};
//# sourceMappingURL=astarZkEVM.d.ts.map