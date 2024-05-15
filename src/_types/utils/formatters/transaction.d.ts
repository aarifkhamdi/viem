import type { ErrorType } from '../../errors/utils.js';
import type { BlockTag } from '../../types/block.js';
import type { Chain } from '../../types/chain.js';
import type { ExtractChainFormatterExclude, ExtractChainFormatterReturnType } from '../../types/chain.js';
import type { RpcTransaction } from '../../types/rpc.js';
import type { Transaction } from '../../types/transaction.js';
import type { ExactPartial, UnionLooseOmit } from '../../types/utils.js';
import { type DefineFormatterErrorType } from './formatter.js';
type TransactionPendingDependencies = 'blockHash' | 'blockNumber' | 'transactionIndex';
export type FormattedTransaction<TChain extends Chain | undefined = undefined, TBlockTag extends BlockTag = BlockTag, _FormatterReturnType = ExtractChainFormatterReturnType<TChain, 'transaction', Transaction>, _ExcludedPendingDependencies extends string = TransactionPendingDependencies & ExtractChainFormatterExclude<TChain, 'transaction'>> = UnionLooseOmit<_FormatterReturnType, TransactionPendingDependencies> & {
    [_K in _ExcludedPendingDependencies]: never;
} & Pick<Transaction<bigint, number, TBlockTag extends 'pending' ? true : false>, TransactionPendingDependencies>;
export declare const transactionType: {
    readonly '0x0': "legacy";
    readonly '0x1': "eip2930";
    readonly '0x2': "eip1559";
    readonly '0x3': "eip4844";
};
export type FormatTransactionErrorType = ErrorType;
export declare function formatTransaction(transaction: ExactPartial<RpcTransaction>): Transaction;
export type DefineTransactionErrorType = DefineFormatterErrorType | ErrorType;
export declare const defineTransaction: <TOverrideParameters, TOverrideReturnType, TExclude extends ("r" | "s" | "v" | "yParity" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "type" | "to" | "from" | "gas" | "nonce" | "value" | "blockHash" | "blockNumber" | "hash" | "input" | "transactionIndex" | "accessList" | "blobVersionedHashes" | "chainId" | keyof TOverrideParameters)[] = []>({ exclude, format: overrides, }: {
    exclude?: TExclude | undefined;
    format: (_: TOverrideParameters) => TOverrideReturnType;
}) => {
    exclude: TExclude | undefined;
    format: (args: import("../../types/utils.js").Assign<ExactPartial<RpcTransaction>, TOverrideParameters>) => ((({
        r: `0x${string}`;
        s: `0x${string}`;
        v: bigint;
        to: `0x${string}` | null;
        from: `0x${string}`;
        gas: bigint;
        nonce: number;
        value: bigint;
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        hash: `0x${string}`;
        input: `0x${string}`;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        gasPrice: bigint;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList?: undefined;
        blobVersionedHashes?: undefined;
        chainId?: number | undefined;
        yParity?: undefined;
        type: "legacy";
    } extends infer T_2 ? { [K_1 in keyof T_2 as K_1 extends keyof TOverrideReturnType ? TOverrideReturnType[K_1] extends void ? never : K_1 : K_1]: K_1 extends keyof TOverrideReturnType ? TOverrideReturnType[K_1] : {
        r: `0x${string}`;
        s: `0x${string}`;
        v: bigint;
        to: `0x${string}` | null;
        from: `0x${string}`;
        gas: bigint;
        nonce: number;
        value: bigint;
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        hash: `0x${string}`;
        input: `0x${string}`;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        gasPrice: bigint;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList?: undefined;
        blobVersionedHashes?: undefined;
        chainId?: number | undefined;
        yParity?: undefined;
        type: "legacy";
    }[K_1]; } : never) & TOverrideReturnType extends infer T ? { [K in keyof T]: (({
        r: `0x${string}`;
        s: `0x${string}`;
        v: bigint;
        to: `0x${string}` | null;
        from: `0x${string}`;
        gas: bigint;
        nonce: number;
        value: bigint;
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        hash: `0x${string}`;
        input: `0x${string}`;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        gasPrice: bigint;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList?: undefined;
        blobVersionedHashes?: undefined;
        chainId?: number | undefined;
        yParity?: undefined;
        type: "legacy";
    } extends infer T_1 ? { [K_1 in keyof T_1 as K_1 extends keyof TOverrideReturnType ? TOverrideReturnType[K_1] extends void ? never : K_1 : K_1]: K_1 extends keyof TOverrideReturnType ? TOverrideReturnType[K_1] : {
        r: `0x${string}`;
        s: `0x${string}`;
        v: bigint;
        to: `0x${string}` | null;
        from: `0x${string}`;
        gas: bigint;
        nonce: number;
        value: bigint;
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        hash: `0x${string}`;
        input: `0x${string}`;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        gasPrice: bigint;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList?: undefined;
        blobVersionedHashes?: undefined;
        chainId?: number | undefined;
        yParity?: undefined;
        type: "legacy";
    }[K_1]; } : never) & TOverrideReturnType)[K]; } : never) | (({
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        from: `0x${string}`;
        gas: bigint;
        hash: `0x${string}`;
        input: `0x${string}`;
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        to: `0x${string}` | null;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        v: bigint;
        value: bigint;
        yParity: number;
        gasPrice: bigint;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList: import("../../types/transaction.js").AccessList;
        blobVersionedHashes?: undefined;
        chainId: number;
        type: "eip2930";
    } extends infer T_5 ? { [K_3 in keyof T_5 as K_3 extends keyof TOverrideReturnType ? TOverrideReturnType[K_3] extends void ? never : K_3 : K_3]: K_3 extends keyof TOverrideReturnType ? TOverrideReturnType[K_3] : {
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        from: `0x${string}`;
        gas: bigint;
        hash: `0x${string}`;
        input: `0x${string}`;
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        to: `0x${string}` | null;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        v: bigint;
        value: bigint;
        yParity: number;
        gasPrice: bigint;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList: import("../../types/transaction.js").AccessList;
        blobVersionedHashes?: undefined;
        chainId: number;
        type: "eip2930";
    }[K_3]; } : never) & TOverrideReturnType extends infer T_3 ? { [K_2 in keyof T_3]: (({
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        from: `0x${string}`;
        gas: bigint;
        hash: `0x${string}`;
        input: `0x${string}`;
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        to: `0x${string}` | null;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        v: bigint;
        value: bigint;
        yParity: number;
        gasPrice: bigint;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList: import("../../types/transaction.js").AccessList;
        blobVersionedHashes?: undefined;
        chainId: number;
        type: "eip2930";
    } extends infer T_4 ? { [K_3 in keyof T_4 as K_3 extends keyof TOverrideReturnType ? TOverrideReturnType[K_3] extends void ? never : K_3 : K_3]: K_3 extends keyof TOverrideReturnType ? TOverrideReturnType[K_3] : {
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        from: `0x${string}`;
        gas: bigint;
        hash: `0x${string}`;
        input: `0x${string}`;
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        to: `0x${string}` | null;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        v: bigint;
        value: bigint;
        yParity: number;
        gasPrice: bigint;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        accessList: import("../../types/transaction.js").AccessList;
        blobVersionedHashes?: undefined;
        chainId: number;
        type: "eip2930";
    }[K_3]; } : never) & TOverrideReturnType)[K_2]; } : never) | (({
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        from: `0x${string}`;
        gas: bigint;
        hash: `0x${string}`;
        input: `0x${string}`;
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        to: `0x${string}` | null;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        v: bigint;
        value: bigint;
        yParity: number;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        accessList: import("../../types/transaction.js").AccessList;
        blobVersionedHashes?: undefined;
        chainId: number;
        type: "eip1559";
    } extends infer T_8 ? { [K_5 in keyof T_8 as K_5 extends keyof TOverrideReturnType ? TOverrideReturnType[K_5] extends void ? never : K_5 : K_5]: K_5 extends keyof TOverrideReturnType ? TOverrideReturnType[K_5] : {
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        from: `0x${string}`;
        gas: bigint;
        hash: `0x${string}`;
        input: `0x${string}`;
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        to: `0x${string}` | null;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        v: bigint;
        value: bigint;
        yParity: number;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        accessList: import("../../types/transaction.js").AccessList;
        blobVersionedHashes?: undefined;
        chainId: number;
        type: "eip1559";
    }[K_5]; } : never) & TOverrideReturnType extends infer T_6 ? { [K_4 in keyof T_6]: (({
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        from: `0x${string}`;
        gas: bigint;
        hash: `0x${string}`;
        input: `0x${string}`;
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        to: `0x${string}` | null;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        v: bigint;
        value: bigint;
        yParity: number;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        accessList: import("../../types/transaction.js").AccessList;
        blobVersionedHashes?: undefined;
        chainId: number;
        type: "eip1559";
    } extends infer T_7 ? { [K_5 in keyof T_7 as K_5 extends keyof TOverrideReturnType ? TOverrideReturnType[K_5] extends void ? never : K_5 : K_5]: K_5 extends keyof TOverrideReturnType ? TOverrideReturnType[K_5] : {
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        from: `0x${string}`;
        gas: bigint;
        hash: `0x${string}`;
        input: `0x${string}`;
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        to: `0x${string}` | null;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        v: bigint;
        value: bigint;
        yParity: number;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        accessList: import("../../types/transaction.js").AccessList;
        blobVersionedHashes?: undefined;
        chainId: number;
        type: "eip1559";
    }[K_5]; } : never) & TOverrideReturnType)[K_4]; } : never) | (({
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        from: `0x${string}`;
        gas: bigint;
        hash: `0x${string}`;
        input: `0x${string}`;
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        to: `0x${string}` | null;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        v: bigint;
        value: bigint;
        yParity: number;
        gasPrice?: undefined;
        maxFeePerBlobGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        accessList: import("../../types/transaction.js").AccessList;
        blobVersionedHashes: readonly `0x${string}`[];
        chainId: number;
        type: "eip4844";
    } extends infer T_11 ? { [K_7 in keyof T_11 as K_7 extends keyof TOverrideReturnType ? TOverrideReturnType[K_7] extends void ? never : K_7 : K_7]: K_7 extends keyof TOverrideReturnType ? TOverrideReturnType[K_7] : {
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        from: `0x${string}`;
        gas: bigint;
        hash: `0x${string}`;
        input: `0x${string}`;
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        to: `0x${string}` | null;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        v: bigint;
        value: bigint;
        yParity: number;
        gasPrice?: undefined;
        maxFeePerBlobGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        accessList: import("../../types/transaction.js").AccessList;
        blobVersionedHashes: readonly `0x${string}`[];
        chainId: number;
        type: "eip4844";
    }[K_7]; } : never) & TOverrideReturnType extends infer T_9 ? { [K_6 in keyof T_9]: (({
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        from: `0x${string}`;
        gas: bigint;
        hash: `0x${string}`;
        input: `0x${string}`;
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        to: `0x${string}` | null;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        v: bigint;
        value: bigint;
        yParity: number;
        gasPrice?: undefined;
        maxFeePerBlobGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        accessList: import("../../types/transaction.js").AccessList;
        blobVersionedHashes: readonly `0x${string}`[];
        chainId: number;
        type: "eip4844";
    } extends infer T_10 ? { [K_7 in keyof T_10 as K_7 extends keyof TOverrideReturnType ? TOverrideReturnType[K_7] extends void ? never : K_7 : K_7]: K_7 extends keyof TOverrideReturnType ? TOverrideReturnType[K_7] : {
        blockHash: `0x${string}` | null;
        blockNumber: bigint | null;
        from: `0x${string}`;
        gas: bigint;
        hash: `0x${string}`;
        input: `0x${string}`;
        nonce: number;
        r: `0x${string}`;
        s: `0x${string}`;
        to: `0x${string}` | null;
        transactionIndex: number | null;
        typeHex: `0x${string}` | null;
        v: bigint;
        value: bigint;
        yParity: number;
        gasPrice?: undefined;
        maxFeePerBlobGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        accessList: import("../../types/transaction.js").AccessList;
        blobVersionedHashes: readonly `0x${string}`[];
        chainId: number;
        type: "eip4844";
    }[K_7]; } : never) & TOverrideReturnType)[K_6]; } : never)) & { [_key in TExclude[number]]: never; };
    type: "transaction";
};
export {};
//# sourceMappingURL=transaction.d.ts.map