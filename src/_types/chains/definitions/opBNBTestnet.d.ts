export declare const opBNBTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "opbnbscan";
            readonly url: "https://testnet.opbnbscan.com";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xcA11bde05977b3631167028862bE2a173976CA11";
            readonly blockCreated: 3705108;
        };
    };
    id: 5611;
    name: "opBNB Testnet";
    nativeCurrency: {
        readonly decimals: 18;
        readonly name: "tBNB";
        readonly symbol: "tBNB";
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://opbnb-testnet-rpc.bnbchain.org"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
};
//# sourceMappingURL=opBNBTestnet.d.ts.map