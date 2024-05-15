import type { Address } from 'abitype';
import type { ErrorType } from '../../../errors/utils.js';
import type { Hash } from '../../../types/misc.js';
import { type EncodePackedErrorType } from '../../../utils/abi/encodePacked.js';
import { type PadHexErrorType } from '../../../utils/data/pad.js';
import { type NumberToHexErrorType } from '../../../utils/encoding/toHex.js';
import type { Keccak256ErrorType } from '../../../utils/hash/keccak256.js';
export type ToAuthMessageParameters = {
    chainId: number;
    commit: Hash;
    invokerAddress: Address;
    nonce: number;
};
export type ToAuthMessageReturnType = Hash;
export type ToAuthMessageErrorType = Keccak256ErrorType | EncodePackedErrorType | NumberToHexErrorType | PadHexErrorType | ErrorType;
/**
 * Returns the message to be signed for EIP-3074 authorization.
 */
export declare function toAuthMessage({ chainId, commit, invokerAddress, nonce, }: ToAuthMessageParameters): ToAuthMessageReturnType;
//# sourceMappingURL=toAuthMessage.d.ts.map