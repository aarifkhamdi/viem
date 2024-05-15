import type { Address } from 'abitype';
import type { ByteArray, Hex, SignableMessage, Signature } from '../../types/misc.js';
import { type GetAddressErrorType } from '../address/getAddress.js';
import { type IsAddressEqualErrorType } from '../address/isAddressEqual.js';
import type { ErrorType } from '../../errors/utils.js';
import { type RecoverMessageAddressErrorType } from './recoverMessageAddress.js';
export type VerifyMessageParameters = {
    /** The address that signed the original message. */
    address: Address;
    /** The message to be verified. */
    message: SignableMessage;
    /** The signature that was generated by signing the message with the address's private key. */
    signature: Hex | ByteArray | Signature;
};
export type VerifyMessageReturnType = boolean;
export type VerifyMessageErrorType = IsAddressEqualErrorType | GetAddressErrorType | RecoverMessageAddressErrorType | ErrorType;
/**
 * Verify that a message was signed by the provided address.
 *
 * Note:  Only supports Externally Owned Accounts. Does not support Contract Accounts.
 *        It is highly recommended to use `publicClient.verifyMessage` instead to ensure
 *        wallet interoperability.
 *
 * - Docs {@link https://viem.sh/docs/utilities/verifyMessage}
 *
 * @param parameters - {@link VerifyMessageParameters}
 * @returns Whether or not the signature is valid. {@link VerifyMessageReturnType}
 */
export declare function verifyMessage({ address, message, signature, }: VerifyMessageParameters): Promise<VerifyMessageReturnType>;
//# sourceMappingURL=verifyMessage.d.ts.map