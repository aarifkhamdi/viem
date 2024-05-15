export declare const bitTorrent: {
    blockExplorers: {
        readonly default: {
            readonly name: "Bttcscan";
            readonly url: "https://bttcscan.com";
            readonly apiUrl: "https://api.bttcscan.com/api";
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
    id: 199;
    name: "BitTorrent";
    nativeCurrency: {
        readonly name: "BitTorrent";
        readonly symbol: "BTT";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.bittorrentchain.io"];
        };
        readonly public: {
            readonly http: readonly ["https://rpc.bittorrentchain.io"];
        };
    };
    sourceId?: number | undefined;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("../../index.js").ChainSerializers<undefined> | undefined;
    fees?: import("../../index.js").ChainFees<undefined> | undefined;
    readonly network: "bittorrent-chain-mainnet";
};
//# sourceMappingURL=bitTorrent.d.ts.map