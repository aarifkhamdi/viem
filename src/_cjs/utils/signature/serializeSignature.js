"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSignature = void 0;
const secp256k1_1 = require("@noble/curves/secp256k1");
const fromHex_js_1 = require("../encoding/fromHex.js");
function serializeSignature({ r, s, v, yParity }) {
    const yParity_ = (() => {
        if (yParity === 0 || yParity === 1)
            return yParity;
        if (v && (v === 27n || v === 28n || v >= 35n))
            return v % 2n === 0n ? 1 : 0;
        throw new Error('Invalid `v` or `yParity` value');
    })();
    return `0x${new secp256k1_1.secp256k1.Signature((0, fromHex_js_1.hexToBigInt)(r), (0, fromHex_js_1.hexToBigInt)(s)).toCompactHex()}${yParity_ === 0 ? '1b' : '1c'}`;
}
exports.serializeSignature = serializeSignature;
//# sourceMappingURL=serializeSignature.js.map