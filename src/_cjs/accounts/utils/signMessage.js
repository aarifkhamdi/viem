"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signMessage = void 0;
const hashMessage_js_1 = require("../../utils/signature/hashMessage.js");
const serializeSignature_js_1 = require("../../utils/signature/serializeSignature.js");
const sign_js_1 = require("./sign.js");
async function signMessage({ message, privateKey, }) {
    const signature = await (0, sign_js_1.sign)({ hash: (0, hashMessage_js_1.hashMessage)(message), privateKey });
    return (0, serializeSignature_js_1.serializeSignature)(signature);
}
exports.signMessage = signMessage;
//# sourceMappingURL=signMessage.js.map