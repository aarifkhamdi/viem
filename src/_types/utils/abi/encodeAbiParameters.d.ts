import type { AbiParameter, AbiParametersToPrimitiveTypes } from 'abitype';
import { type AbiEncodingArrayLengthMismatchErrorType, type AbiEncodingBytesSizeMismatchErrorType, type AbiEncodingLengthMismatchErrorType, type InvalidAbiEncodingTypeErrorType, type InvalidArrayErrorType } from '../../errors/abi.js';
import { type InvalidAddressErrorType } from '../../errors/address.js';
import type { ErrorType } from '../../errors/utils.js';
import type { Hex } from '../../types/misc.js';
import { type IsAddressErrorType } from '../address/isAddress.js';
import { type ConcatErrorType } from '../data/concat.js';
import { type PadHexErrorType } from '../data/pad.js';
import { type SizeErrorType } from '../data/size.js';
import { type SliceErrorType } from '../data/slice.js';
import { type BoolToHexErrorType, type NumberToHexErrorType, type StringToHexErrorType } from '../encoding/toHex.js';
export type EncodeAbiParametersReturnType = Hex;
export type EncodeAbiParametersErrorType = AbiEncodingLengthMismatchErrorType | PrepareParamsErrorType | EncodeParamsErrorType | ErrorType;
/**
 * @description Encodes a list of primitive values into an ABI-encoded hex value.
 *
 * - Docs: https://viem.sh/docs/abi/encodeAbiParameters#encodeabiparameters
 *
 *   Generates ABI encoded data using the [ABI specification](https://docs.soliditylang.org/en/latest/abi-spec), given a set of ABI parameters (inputs/outputs) and their corresponding values.
 *
 * @param params - a set of ABI Parameters (params), that can be in the shape of the inputs or outputs attribute of an ABI Item.
 * @param values - a set of values (values) that correspond to the given params.
 * @example
 * ```typescript
 * import { encodeAbiParameters } from 'viem'
 *
 * const encodedData = encodeAbiParameters(
 *   [
 *     { name: 'x', type: 'string' },
 *     { name: 'y', type: 'uint' },
 *     { name: 'z', type: 'bool' }
 *   ],
 *   ['wagmi', 420n, true]
 * )
 * ```
 *
 * You can also pass in Human Readable parameters with the parseAbiParameters utility.
 *
 * @example
 * ```typescript
 * import { encodeAbiParameters, parseAbiParameters } from 'viem'
 *
 * const encodedData = encodeAbiParameters(
 *   parseAbiParameters('string x, uint y, bool z'),
 *   ['wagmi', 420n, true]
 * )
 * ```
 */
export declare function encodeAbiParameters<const TParams extends readonly AbiParameter[] | readonly unknown[]>(params: TParams, values: TParams extends readonly AbiParameter[] ? AbiParametersToPrimitiveTypes<TParams> : never): EncodeAbiParametersReturnType;
export type PrepareParamsErrorType = ErrorType;
export type PrepareParamErrorType = GetArrayComponentsErrorType | InvalidAbiEncodingTypeErrorType | ErrorType;
export type EncodeParamsErrorType = NumberToHexErrorType | SizeErrorType | ErrorType;
export type EncodeAddressErrorType = InvalidAddressErrorType | IsAddressErrorType | ErrorType;
export type EncodeArrayErrorType = AbiEncodingArrayLengthMismatchErrorType | ConcatErrorType | EncodeParamsErrorType | InvalidArrayErrorType | NumberToHexErrorType | PrepareParamErrorType | ErrorType;
export type EncodeBytesErrorType = AbiEncodingBytesSizeMismatchErrorType | ConcatErrorType | PadHexErrorType | NumberToHexErrorType | SizeErrorType | ErrorType;
export type EncodeBoolErrorType = PadHexErrorType | BoolToHexErrorType | ErrorType;
export type EncodeNumberErrorType = NumberToHexErrorType | ErrorType;
export type EncodeStringErrorType = ConcatErrorType | NumberToHexErrorType | PadHexErrorType | SizeErrorType | SliceErrorType | StringToHexErrorType | ErrorType;
export type EncodeTupleErrorType = ConcatErrorType | EncodeParamsErrorType | PrepareParamErrorType | ErrorType;
export type GetArrayComponentsErrorType = ErrorType;
export declare function getArrayComponents(type: string): [length: number | null, innerType: string] | undefined;
//# sourceMappingURL=encodeAbiParameters.d.ts.map