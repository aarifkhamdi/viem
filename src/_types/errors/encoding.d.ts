import type { ByteArray, Hex } from '../types/misc.js';
import { BaseError } from './base.js';
export type IntegerOutOfRangeErrorType = IntegerOutOfRangeError & {
    name: 'IntegerOutOfRangeError';
};
export declare class IntegerOutOfRangeError extends BaseError {
    name: string;
    constructor({ max, min, signed, size, value, }: {
        max?: string | undefined;
        min: string;
        signed?: boolean | undefined;
        size?: number | undefined;
        value: string;
    });
}
export type InvalidBytesBooleanErrorType = InvalidBytesBooleanError & {
    name: 'InvalidBytesBooleanError';
};
export declare class InvalidBytesBooleanError extends BaseError {
    name: string;
    constructor(bytes: ByteArray);
}
export type InvalidHexBooleanErrorType = InvalidHexBooleanError & {
    name: 'InvalidHexBooleanError';
};
export declare class InvalidHexBooleanError extends BaseError {
    name: string;
    constructor(hex: Hex);
}
export type InvalidHexValueErrorType = InvalidHexValueError & {
    name: 'InvalidHexValueError';
};
export declare class InvalidHexValueError extends BaseError {
    name: string;
    constructor(value: Hex);
}
export type SizeOverflowErrorType = SizeOverflowError & {
    name: 'SizeOverflowError';
};
export declare class SizeOverflowError extends BaseError {
    name: "SizeOverflowError";
    constructor({ givenSize, maxSize }: {
        givenSize: number;
        maxSize: number;
    });
}
//# sourceMappingURL=encoding.d.ts.map