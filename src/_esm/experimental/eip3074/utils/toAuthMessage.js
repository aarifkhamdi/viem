import { encodePacked, } from '../../../utils/abi/encodePacked.js';
import { padHex } from '../../../utils/data/pad.js';
import { numberToHex, } from '../../../utils/encoding/toHex.js';
/**
 * Returns the message to be signed for EIP-3074 authorization.
 */
export function toAuthMessage({ chainId, commit, invokerAddress, nonce, }) {
    return encodePacked(['uint8', 'bytes32', 'uint256', 'bytes32', 'bytes32'], [
        0x04, // MAGIC
        numberToHex(chainId, { size: 32 }),
        BigInt(nonce),
        padHex(invokerAddress, { size: 32 }),
        commit,
    ]);
}
//# sourceMappingURL=toAuthMessage.js.map