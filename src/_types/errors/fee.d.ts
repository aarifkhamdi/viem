import { BaseError } from './base.js';
export type BaseFeeScalarErrorType = BaseFeeScalarError & {
    name: 'BaseFeeScalarError';
};
export declare class BaseFeeScalarError extends BaseError {
    name: string;
    constructor();
}
export type Eip1559FeesNotSupportedErrorType = Eip1559FeesNotSupportedError & {
    name: 'Eip1559FeesNotSupportedError';
};
export declare class Eip1559FeesNotSupportedError extends BaseError {
    name: string;
    constructor();
}
export type MaxFeePerGasTooLowErrorType = MaxFeePerGasTooLowError & {
    name: 'MaxFeePerGasTooLowError';
};
export declare class MaxFeePerGasTooLowError extends BaseError {
    name: string;
    constructor({ maxPriorityFeePerGas }: {
        maxPriorityFeePerGas: bigint;
    });
}
//# sourceMappingURL=fee.d.ts.map