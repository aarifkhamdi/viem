"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseSepolia = void 0;
const chainConfig_js_1 = require("../../op-stack/chainConfig.js");
const defineChain_js_1 = require("../../utils/chain/defineChain.js");
const sourceId = 11_155_111;
exports.baseSepolia = (0, defineChain_js_1.defineChain)({
    ...chainConfig_js_1.chainConfig,
    id: 84532,
    network: 'base-sepolia',
    name: 'Base Sepolia',
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://sepolia.base.org'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Basescan',
            url: 'https://sepolia.basescan.org',
            apiUrl: 'https://api-sepolia.basescan.org/api',
        },
    },
    contracts: {
        ...chainConfig_js_1.chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: '0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254',
            },
        },
        portal: {
            [sourceId]: {
                address: '0x49f53e41452c74589e85ca1677426ba426459e85',
                blockCreated: 4446677,
            },
        },
        l1StandardBridge: {
            [sourceId]: {
                address: '0xfd0Bf71F60660E2f608ed56e1659C450eB113120',
                blockCreated: 4446677,
            },
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 1059647,
        },
    },
    testnet: true,
    sourceId,
});
//# sourceMappingURL=baseSepolia.js.map