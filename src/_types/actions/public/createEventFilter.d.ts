import type { AbiEvent, Address } from 'abitype';
import type { Client } from '../../clients/createClient.js';
import type { Transport } from '../../clients/transports/createTransport.js';
import type { ErrorType } from '../../errors/utils.js';
import type { BlockNumber, BlockTag } from '../../types/block.js';
import type { Chain } from '../../types/chain.js';
import type { MaybeAbiEventName, MaybeExtractEventArgsFromAbi } from '../../types/contract.js';
import type { Filter } from '../../types/filter.js';
import type { Prettify } from '../../types/utils.js';
import { type EncodeEventTopicsErrorType } from '../../utils/abi/encodeEventTopics.js';
import type { RequestErrorType } from '../../utils/buildRequest.js';
import { type NumberToHexErrorType } from '../../utils/encoding/toHex.js';
export type CreateEventFilterParameters<TAbiEvent extends AbiEvent | undefined = undefined, TAbiEvents extends readonly AbiEvent[] | readonly unknown[] | undefined = TAbiEvent extends AbiEvent ? [TAbiEvent] : undefined, TStrict extends boolean | undefined = undefined, TFromBlock extends BlockNumber | BlockTag | undefined = undefined, TToBlock extends BlockNumber | BlockTag | undefined = undefined, _EventName extends string | undefined = MaybeAbiEventName<TAbiEvent>, _Args extends MaybeExtractEventArgsFromAbi<TAbiEvents, _EventName> | undefined = undefined> = {
    address?: Address | Address[] | undefined;
    fromBlock?: TFromBlock | BlockNumber | BlockTag | undefined;
    toBlock?: TToBlock | BlockNumber | BlockTag | undefined;
} & (MaybeExtractEventArgsFromAbi<TAbiEvents, _EventName> extends infer TEventFilterArgs ? {
    args: TEventFilterArgs | (_Args extends TEventFilterArgs ? _Args : never);
    event: TAbiEvent;
    events?: never | undefined;
    /**
     * Whether or not the logs must match the indexed/non-indexed arguments on `event`.
     * @default false
     */
    strict?: TStrict | undefined;
} | {
    args?: never | undefined;
    event?: TAbiEvent | undefined;
    events?: never | undefined;
    /**
     * Whether or not the logs must match the indexed/non-indexed arguments on `event`.
     * @default false
     */
    strict?: TStrict | undefined;
} | {
    args?: never | undefined;
    event?: never | undefined;
    events: TAbiEvents | undefined;
    /**
     * Whether or not the logs must match the indexed/non-indexed arguments on `event`.
     * @default false
     */
    strict?: TStrict | undefined;
} | {
    args?: never | undefined;
    event?: never | undefined;
    events?: never | undefined;
    strict?: never | undefined;
} : {
    args?: never | undefined;
    event?: never | undefined;
    events?: never | undefined;
    strict?: never | undefined;
});
export type CreateEventFilterReturnType<TAbiEvent extends AbiEvent | undefined = undefined, TAbiEvents extends readonly AbiEvent[] | readonly unknown[] | undefined = TAbiEvent extends AbiEvent ? [TAbiEvent] : undefined, TStrict extends boolean | undefined = undefined, TFromBlock extends BlockNumber | BlockTag | undefined = undefined, TToBlock extends BlockNumber | BlockTag | undefined = undefined, _EventName extends string | undefined = MaybeAbiEventName<TAbiEvent>, _Args extends MaybeExtractEventArgsFromAbi<TAbiEvents, _EventName> | undefined = undefined> = Prettify<Filter<'event', TAbiEvents, _EventName, _Args, TStrict, TFromBlock, TToBlock>>;
export type CreateEventFilterErrorType = EncodeEventTopicsErrorType | RequestErrorType | NumberToHexErrorType | ErrorType;
/**
 * Creates a [`Filter`](https://viem.sh/docs/glossary/types#filter) to listen for new events that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges).
 *
 * - Docs: https://viem.sh/docs/actions/public/createEventFilter
 * - JSON-RPC Methods: [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter)
 *
 * @param client - Client to use
 * @param parameters - {@link CreateEventFilterParameters}
 * @returns [`Filter`](https://viem.sh/docs/glossary/types#filter). {@link CreateEventFilterReturnType}
 *
 * @example
 * import { createPublicClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { createEventFilter } from 'viem/public'
 *
 * const client = createPublicClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 * const filter = await createEventFilter(client, {
 *   address: '0xfba3912ca04dd458c843e2ee08967fc04f3579c2',
 * })
 */
export declare function createEventFilter<TChain extends Chain | undefined, const TAbiEvent extends AbiEvent | undefined = undefined, const TAbiEvents extends readonly AbiEvent[] | readonly unknown[] | undefined = TAbiEvent extends AbiEvent ? [TAbiEvent] : undefined, TStrict extends boolean | undefined = undefined, TFromBlock extends BlockNumber<bigint> | BlockTag | undefined = undefined, TToBlock extends BlockNumber<bigint> | BlockTag | undefined = undefined, _EventName extends string | undefined = MaybeAbiEventName<TAbiEvent>, _Args extends MaybeExtractEventArgsFromAbi<TAbiEvents, _EventName> | undefined = undefined>(client: Client<Transport, TChain>, { address, args, event, events: events_, fromBlock, strict, toBlock, }?: CreateEventFilterParameters<TAbiEvent, TAbiEvents, TStrict, TFromBlock, TToBlock, _EventName, _Args>): Promise<CreateEventFilterReturnType<TAbiEvent, TAbiEvents, TStrict, TFromBlock, TToBlock, _EventName, _Args>>;
//# sourceMappingURL=createEventFilter.d.ts.map