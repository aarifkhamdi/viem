import type { ErrorType } from '../../errors/utils.js';
import type { Chain, ExtractChainFormatterParameters } from '../../types/chain.js';
import type { RpcTransactionRequest } from '../../types/rpc.js';
import type { TransactionRequest } from '../../types/transaction.js';
import type { ExactPartial } from '../../types/utils.js';
import { type DefineFormatterErrorType } from './formatter.js';
export type FormattedTransactionRequest<TChain extends Chain | undefined = Chain | undefined> = ExtractChainFormatterParameters<TChain, 'transactionRequest', TransactionRequest>;
export declare const rpcTransactionType: {
    readonly legacy: "0x0";
    readonly eip2930: "0x1";
    readonly eip1559: "0x2";
    readonly eip4844: "0x3";
};
export type FormatTransactionRequestErrorType = ErrorType;
export declare function formatTransactionRequest(request: ExactPartial<TransactionRequest>): RpcTransactionRequest;
export type DefineTransactionRequestErrorType = DefineFormatterErrorType | ErrorType;
export declare const defineTransactionRequest: <TOverrideParameters, TOverrideReturnType, TExclude extends ("gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "type" | "to" | "data" | "from" | "gas" | "nonce" | "value" | "blobs" | "accessList" | "blobVersionedHashes" | "kzg" | "sidecars" | keyof TOverrideParameters)[] = []>({ exclude, format: overrides, }: {
    exclude?: TExclude | undefined;
    format: (_: TOverrideParameters) => TOverrideReturnType;
}) => {
    exclude: TExclude | undefined;
    format: (args: import("../../types/utils.js").Assign<ExactPartial<TransactionRequest>, TOverrideParameters>) => ((({
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        value?: `0x${string}` | undefined;
        gasPrice?: `0x${string}` | undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList?: undefined;
        blobs?: undefined;
        type?: "0x0" | undefined;
        blobVersionedHashes?: undefined;
        kzg?: undefined;
        sidecars?: undefined;
    } extends infer T_2 ? { [K_1 in keyof T_2 as K_1 extends keyof TOverrideReturnType ? TOverrideReturnType[K_1] extends void ? never : K_1 : K_1]: K_1 extends keyof TOverrideReturnType ? TOverrideReturnType[K_1] : {
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        value?: `0x${string}` | undefined;
        gasPrice?: `0x${string}` | undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList?: undefined;
        blobs?: undefined;
        type?: "0x0" | undefined;
        blobVersionedHashes?: undefined;
        kzg?: undefined;
        sidecars?: undefined;
    }[K_1]; } : never) & TOverrideReturnType extends infer T ? { [K in keyof T]: (({
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        value?: `0x${string}` | undefined;
        gasPrice?: `0x${string}` | undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList?: undefined;
        blobs?: undefined;
        type?: "0x0" | undefined;
        blobVersionedHashes?: undefined;
        kzg?: undefined;
        sidecars?: undefined;
    } extends infer T_1 ? { [K_1 in keyof T_1 as K_1 extends keyof TOverrideReturnType ? TOverrideReturnType[K_1] extends void ? never : K_1 : K_1]: K_1 extends keyof TOverrideReturnType ? TOverrideReturnType[K_1] : {
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        value?: `0x${string}` | undefined;
        gasPrice?: `0x${string}` | undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList?: undefined;
        blobs?: undefined;
        type?: "0x0" | undefined;
        blobVersionedHashes?: undefined;
        kzg?: undefined;
        sidecars?: undefined;
    }[K_1]; } : never) & TOverrideReturnType)[K]; } : never) | (({
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        value?: `0x${string}` | undefined;
        gasPrice?: `0x${string}` | undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList?: import("../../types/transaction.js").AccessList | undefined;
        blobs?: undefined;
        type?: "0x1" | undefined;
        blobVersionedHashes?: undefined;
        kzg?: undefined;
        sidecars?: undefined;
    } extends infer T_5 ? { [K_3 in keyof T_5 as K_3 extends keyof TOverrideReturnType ? TOverrideReturnType[K_3] extends void ? never : K_3 : K_3]: K_3 extends keyof TOverrideReturnType ? TOverrideReturnType[K_3] : {
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        value?: `0x${string}` | undefined;
        gasPrice?: `0x${string}` | undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList?: import("../../types/transaction.js").AccessList | undefined;
        blobs?: undefined;
        type?: "0x1" | undefined;
        blobVersionedHashes?: undefined;
        kzg?: undefined;
        sidecars?: undefined;
    }[K_3]; } : never) & TOverrideReturnType extends infer T_3 ? { [K_2 in keyof T_3]: (({
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        value?: `0x${string}` | undefined;
        gasPrice?: `0x${string}` | undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList?: import("../../types/transaction.js").AccessList | undefined;
        blobs?: undefined;
        type?: "0x1" | undefined;
        blobVersionedHashes?: undefined;
        kzg?: undefined;
        sidecars?: undefined;
    } extends infer T_4 ? { [K_3 in keyof T_4 as K_3 extends keyof TOverrideReturnType ? TOverrideReturnType[K_3] extends void ? never : K_3 : K_3]: K_3 extends keyof TOverrideReturnType ? TOverrideReturnType[K_3] : {
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        value?: `0x${string}` | undefined;
        gasPrice?: `0x${string}` | undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList?: import("../../types/transaction.js").AccessList | undefined;
        blobs?: undefined;
        type?: "0x1" | undefined;
        blobVersionedHashes?: undefined;
        kzg?: undefined;
        sidecars?: undefined;
    }[K_3]; } : never) & TOverrideReturnType)[K_2]; } : never) | (({
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        value?: `0x${string}` | undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: `0x${string}` | undefined;
        maxPriorityFeePerGas?: `0x${string}` | undefined;
        accessList?: import("../../types/transaction.js").AccessList | undefined;
        blobs?: undefined;
        type?: "0x2" | undefined;
        blobVersionedHashes?: undefined;
        kzg?: undefined;
        sidecars?: undefined;
    } extends infer T_8 ? { [K_5 in keyof T_8 as K_5 extends keyof TOverrideReturnType ? TOverrideReturnType[K_5] extends void ? never : K_5 : K_5]: K_5 extends keyof TOverrideReturnType ? TOverrideReturnType[K_5] : {
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        value?: `0x${string}` | undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: `0x${string}` | undefined;
        maxPriorityFeePerGas?: `0x${string}` | undefined;
        accessList?: import("../../types/transaction.js").AccessList | undefined;
        blobs?: undefined;
        type?: "0x2" | undefined;
        blobVersionedHashes?: undefined;
        kzg?: undefined;
        sidecars?: undefined;
    }[K_5]; } : never) & TOverrideReturnType extends infer T_6 ? { [K_4 in keyof T_6]: (({
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        value?: `0x${string}` | undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: `0x${string}` | undefined;
        maxPriorityFeePerGas?: `0x${string}` | undefined;
        accessList?: import("../../types/transaction.js").AccessList | undefined;
        blobs?: undefined;
        type?: "0x2" | undefined;
        blobVersionedHashes?: undefined;
        kzg?: undefined;
        sidecars?: undefined;
    } extends infer T_7 ? { [K_5 in keyof T_7 as K_5 extends keyof TOverrideReturnType ? TOverrideReturnType[K_5] extends void ? never : K_5 : K_5]: K_5 extends keyof TOverrideReturnType ? TOverrideReturnType[K_5] : {
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        to?: `0x${string}` | null | undefined;
        value?: `0x${string}` | undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: `0x${string}` | undefined;
        maxPriorityFeePerGas?: `0x${string}` | undefined;
        accessList?: import("../../types/transaction.js").AccessList | undefined;
        blobs?: undefined;
        type?: "0x2" | undefined;
        blobVersionedHashes?: undefined;
        kzg?: undefined;
        sidecars?: undefined;
    }[K_5]; } : never) & TOverrideReturnType)[K_4]; } : never) | (({
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        value?: `0x${string}` | undefined;
        to: `0x${string}` | null;
        gasPrice?: undefined;
        maxFeePerGas?: `0x${string}` | undefined;
        maxPriorityFeePerGas?: `0x${string}` | undefined;
        maxFeePerBlobGas: `0x${string}`;
        accessList?: import("../../types/transaction.js").AccessList | undefined;
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        kzg?: import("../kzg/defineKzg.js").DefineKzgParameters | undefined;
        sidecars?: readonly import("../../index.js").BlobSidecar<`0x${string}`>[] | undefined;
        type?: "0x3" | undefined;
    } extends infer T_11 ? { [K_7 in keyof T_11 as K_7 extends keyof TOverrideReturnType ? TOverrideReturnType[K_7] extends void ? never : K_7 : K_7]: K_7 extends keyof TOverrideReturnType ? TOverrideReturnType[K_7] : {
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        value?: `0x${string}` | undefined;
        to: `0x${string}` | null;
        gasPrice?: undefined;
        maxFeePerGas?: `0x${string}` | undefined;
        maxPriorityFeePerGas?: `0x${string}` | undefined;
        maxFeePerBlobGas: `0x${string}`;
        accessList?: import("../../types/transaction.js").AccessList | undefined;
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        kzg?: import("../kzg/defineKzg.js").DefineKzgParameters | undefined;
        sidecars?: readonly import("../../index.js").BlobSidecar<`0x${string}`>[] | undefined;
        type?: "0x3" | undefined;
    }[K_7]; } : never) & TOverrideReturnType extends infer T_9 ? { [K_6 in keyof T_9]: (({
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        value?: `0x${string}` | undefined;
        to: `0x${string}` | null;
        gasPrice?: undefined;
        maxFeePerGas?: `0x${string}` | undefined;
        maxPriorityFeePerGas?: `0x${string}` | undefined;
        maxFeePerBlobGas: `0x${string}`;
        accessList?: import("../../types/transaction.js").AccessList | undefined;
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        kzg?: import("../kzg/defineKzg.js").DefineKzgParameters | undefined;
        sidecars?: readonly import("../../index.js").BlobSidecar<`0x${string}`>[] | undefined;
        type?: "0x3" | undefined;
    } extends infer T_10 ? { [K_7 in keyof T_10 as K_7 extends keyof TOverrideReturnType ? TOverrideReturnType[K_7] extends void ? never : K_7 : K_7]: K_7 extends keyof TOverrideReturnType ? TOverrideReturnType[K_7] : {
        data?: `0x${string}` | undefined;
        from: `0x${string}`;
        gas?: `0x${string}` | undefined;
        nonce?: `0x${string}` | undefined;
        value?: `0x${string}` | undefined;
        to: `0x${string}` | null;
        gasPrice?: undefined;
        maxFeePerGas?: `0x${string}` | undefined;
        maxPriorityFeePerGas?: `0x${string}` | undefined;
        maxFeePerBlobGas: `0x${string}`;
        accessList?: import("../../types/transaction.js").AccessList | undefined;
        blobs: readonly `0x${string}`[] | readonly Uint8Array[];
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        kzg?: import("../kzg/defineKzg.js").DefineKzgParameters | undefined;
        sidecars?: readonly import("../../index.js").BlobSidecar<`0x${string}`>[] | undefined;
        type?: "0x3" | undefined;
    }[K_7]; } : never) & TOverrideReturnType)[K_6]; } : never)) & { [_key in TExclude[number]]: never; };
    type: "transactionRequest";
};
//# sourceMappingURL=transactionRequest.d.ts.map