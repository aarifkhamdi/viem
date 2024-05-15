export declare const bitTorrentTestnet: {
    blockExplorers: {
        readonly default: {
            readonly name: "Bttcscan";
            readonly url: "https://testnet.bttcscan.com";
            readonly apiUrl: "https://testnet.bttcscan.com/api";
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
    id: 1028;
    name: "BitTorrent Chain Testnet";
    nativeCurrency: {
        readonly name: "BitTorrent";
        readonly symbol: "BTT";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://testrpc.bittorrentchain.io"];
        };
        readonly public: {
            readonly http: readonly ["https://testrpc.bittorrentchain.io"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
    readonly network: "bittorrent-chain-testnet";
};
//# sourceMappingURL=bitTorrentTestnet.d.ts.map