"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avalanche = void 0;
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
exports.avalanche = (0, defineChain_js_1.defineChain)({
    id: 43_114,
    name: 'Avalanche',
    nativeCurrency: {
        decimals: 18,
        name: 'Avalanche',
        symbol: 'AVAX',
    },
    rpcUrls: {
        default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
    },
    blockExplorers: {
        default: {
            name: 'SnowScan',
            url: 'https://snowscan.xyz',
            apiUrl: 'https://api.snowscan.xyz/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 11907934,
        },
    },
});
//# sourceMappingURL=avalanche.js.map