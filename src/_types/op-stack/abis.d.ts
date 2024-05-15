/**
 * ABI for the OP Stack [`GasPriceOracle` contract](https://github.com/ethereum-optimism/optimism/blob/develop/packages/contracts-bedrock/src/L2/GasPriceOracle.sol).
 * @see https://optimistic.etherscan.io/address/0x420000000000000000000000000000000000000f
 */
export declare const gasPriceOracleAbi: readonly [{
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "DECIMALS";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "baseFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "gasPrice";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }];
    readonly name: "getL1Fee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }];
    readonly name: "getL1GasUsed";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "l1BaseFee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "overhead";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "scalar";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
export declare const l2OutputOracleAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_submissionInterval";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_l2BlockTime";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_startingBlockNumber";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_startingTimestamp";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_proposer";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_challenger";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_finalizationPeriodSeconds";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint8";
        readonly name: "version";
        readonly type: "uint8";
    }];
    readonly name: "Initialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "outputRoot";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "l2OutputIndex";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "l2BlockNumber";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "l1Timestamp";
        readonly type: "uint256";
    }];
    readonly name: "OutputProposed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "prevNextOutputIndex";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "newNextOutputIndex";
        readonly type: "uint256";
    }];
    readonly name: "OutputsDeleted";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "CHALLENGER";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "FINALIZATION_PERIOD_SECONDS";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "L2_BLOCK_TIME";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "PROPOSER";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "SUBMISSION_INTERVAL";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_l2BlockNumber";
        readonly type: "uint256";
    }];
    readonly name: "computeL2Timestamp";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_l2OutputIndex";
        readonly type: "uint256";
    }];
    readonly name: "deleteL2Outputs";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_l2OutputIndex";
        readonly type: "uint256";
    }];
    readonly name: "getL2Output";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "outputRoot";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint128";
            readonly name: "timestamp";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "l2BlockNumber";
            readonly type: "uint128";
        }];
        readonly internalType: "struct Types.OutputProposal";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_l2BlockNumber";
        readonly type: "uint256";
    }];
    readonly name: "getL2OutputAfter";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "outputRoot";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint128";
            readonly name: "timestamp";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "l2BlockNumber";
            readonly type: "uint128";
        }];
        readonly internalType: "struct Types.OutputProposal";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_l2BlockNumber";
        readonly type: "uint256";
    }];
    readonly name: "getL2OutputIndexAfter";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_startingBlockNumber";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_startingTimestamp";
        readonly type: "uint256";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "latestBlockNumber";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "latestOutputIndex";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "nextBlockNumber";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "nextOutputIndex";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_outputRoot";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint256";
        readonly name: "_l2BlockNumber";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes32";
        readonly name: "_l1BlockHash";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint256";
        readonly name: "_l1BlockNumber";
        readonly type: "uint256";
    }];
    readonly name: "proposeL2Output";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "startingBlockNumber";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "startingTimestamp";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
export declare const l1StandardBridgeAbi: readonly [{
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
    readonly inputs: readonly [];
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "localToken";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "remoteToken";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
        readonly indexed: false;
    }];
    readonly name: "ERC20BridgeFinalized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "localToken";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "remoteToken";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
        readonly indexed: false;
    }];
    readonly name: "ERC20BridgeInitiated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "l1Token";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "l2Token";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
        readonly indexed: false;
    }];
    readonly name: "ERC20DepositInitiated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "l1Token";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "l2Token";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
        readonly indexed: false;
    }];
    readonly name: "ERC20WithdrawalFinalized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
        readonly indexed: false;
    }];
    readonly name: "ETHBridgeFinalized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
        readonly indexed: false;
    }];
    readonly name: "ETHBridgeInitiated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
        readonly indexed: false;
    }];
    readonly name: "ETHDepositInitiated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
        readonly indexed: false;
    }];
    readonly name: "ETHWithdrawalFinalized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "MESSENGER";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract CrossDomainMessenger";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "OTHER_BRIDGE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract StandardBridge";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_localToken";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_remoteToken";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_minGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "bridgeERC20";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_localToken";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_remoteToken";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_minGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "bridgeERC20To";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_minGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "bridgeETH";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_minGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "bridgeETHTo";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_l1Token";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_l2Token";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_minGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "depositERC20";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_l1Token";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_l2Token";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_minGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "depositERC20To";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_minGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "depositETH";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_minGasLimit";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "depositETHTo";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "deposits";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_localToken";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_remoteToken";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "finalizeBridgeERC20";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "finalizeBridgeETH";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_l1Token";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_l2Token";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "finalizeERC20Withdrawal";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_extraData";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "finalizeETHWithdrawal";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_messenger";
        readonly internalType: "contract CrossDomainMessenger";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "l2TokenBridge";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "messenger";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract CrossDomainMessenger";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "otherBridge";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract StandardBridge";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
export declare const l2ToL1MessagePasserAbi: readonly [{
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "gasLimit";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "withdrawalHash";
        readonly type: "bytes32";
    }];
    readonly name: "MessagePassed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "WithdrawerBalanceBurnt";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "MESSAGE_VERSION";
    readonly outputs: readonly [{
        readonly internalType: "uint16";
        readonly name: "";
        readonly type: "uint16";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "burn";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_target";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_gasLimit";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }];
    readonly name: "initiateWithdrawal";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "messageNonce";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "sentMessages";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
export declare const disputeGameFactoryAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "create";
    readonly inputs: readonly [{
        readonly name: "_gameType";
        readonly type: "uint32";
        readonly internalType: "GameType";
    }, {
        readonly name: "_rootClaim";
        readonly type: "bytes32";
        readonly internalType: "Claim";
    }, {
        readonly name: "_extraData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "proxy_";
        readonly type: "address";
        readonly internalType: "contract IDisputeGame";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "findLatestGames";
    readonly inputs: readonly [{
        readonly name: "_gameType";
        readonly type: "uint32";
        readonly internalType: "GameType";
    }, {
        readonly name: "_start";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_n";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "games_";
        readonly type: "tuple[]";
        readonly internalType: "struct IDisputeGameFactory.GameSearchResult[]";
        readonly components: readonly [{
            readonly name: "index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "metadata";
            readonly type: "bytes32";
            readonly internalType: "GameId";
        }, {
            readonly name: "timestamp";
            readonly type: "uint64";
            readonly internalType: "Timestamp";
        }, {
            readonly name: "rootClaim";
            readonly type: "bytes32";
            readonly internalType: "Claim";
        }, {
            readonly name: "extraData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "gameAtIndex";
    readonly inputs: readonly [{
        readonly name: "_index";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "gameType_";
        readonly type: "uint32";
        readonly internalType: "GameType";
    }, {
        readonly name: "timestamp_";
        readonly type: "uint64";
        readonly internalType: "Timestamp";
    }, {
        readonly name: "proxy_";
        readonly type: "address";
        readonly internalType: "contract IDisputeGame";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "gameCount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "gameCount_";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "gameImpls";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "GameType";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IDisputeGame";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "games";
    readonly inputs: readonly [{
        readonly name: "_gameType";
        readonly type: "uint32";
        readonly internalType: "GameType";
    }, {
        readonly name: "_rootClaim";
        readonly type: "bytes32";
        readonly internalType: "Claim";
    }, {
        readonly name: "_extraData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "proxy_";
        readonly type: "address";
        readonly internalType: "contract IDisputeGame";
    }, {
        readonly name: "timestamp_";
        readonly type: "uint64";
        readonly internalType: "Timestamp";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getGameUUID";
    readonly inputs: readonly [{
        readonly name: "_gameType";
        readonly type: "uint32";
        readonly internalType: "GameType";
    }, {
        readonly name: "_rootClaim";
        readonly type: "bytes32";
        readonly internalType: "Claim";
    }, {
        readonly name: "_extraData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "uuid_";
        readonly type: "bytes32";
        readonly internalType: "Hash";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "initBonds";
    readonly inputs: readonly [{
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "GameType";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "initialize";
    readonly inputs: readonly [{
        readonly name: "_owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "owner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "renounceOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setImplementation";
    readonly inputs: readonly [{
        readonly name: "_gameType";
        readonly type: "uint32";
        readonly internalType: "GameType";
    }, {
        readonly name: "_impl";
        readonly type: "address";
        readonly internalType: "contract IDisputeGame";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setInitBond";
    readonly inputs: readonly [{
        readonly name: "_gameType";
        readonly type: "uint32";
        readonly internalType: "GameType";
    }, {
        readonly name: "_initBond";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "transferOwnership";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "version";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "DisputeGameCreated";
    readonly inputs: readonly [{
        readonly name: "disputeProxy";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "gameType";
        readonly type: "uint32";
        readonly indexed: true;
        readonly internalType: "GameType";
    }, {
        readonly name: "rootClaim";
        readonly type: "bytes32";
        readonly indexed: true;
        readonly internalType: "Claim";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "ImplementationSet";
    readonly inputs: readonly [{
        readonly name: "impl";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "gameType";
        readonly type: "uint32";
        readonly indexed: true;
        readonly internalType: "GameType";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "InitBondUpdated";
    readonly inputs: readonly [{
        readonly name: "gameType";
        readonly type: "uint32";
        readonly indexed: true;
        readonly internalType: "GameType";
    }, {
        readonly name: "newBond";
        readonly type: "uint256";
        readonly indexed: true;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Initialized";
    readonly inputs: readonly [{
        readonly name: "version";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "uint8";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "OwnershipTransferred";
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "GameAlreadyExists";
    readonly inputs: readonly [{
        readonly name: "uuid";
        readonly type: "bytes32";
        readonly internalType: "Hash";
    }];
}, {
    readonly type: "error";
    readonly name: "InsufficientBond";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NoImplementation";
    readonly inputs: readonly [{
        readonly name: "gameType";
        readonly type: "uint32";
        readonly internalType: "GameType";
    }];
}];
export declare const portal2Abi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_proofMaturityDelaySeconds";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_disputeGameFinalityDelaySeconds";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "BadTarget";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CallPaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "GasEstimation";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "LargeCalldata";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OutOfGas";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SmallGasLimit";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "Unauthorized";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint8";
        readonly name: "version";
        readonly type: "uint8";
    }];
    readonly name: "Initialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "version";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "opaqueData";
        readonly type: "bytes";
    }];
    readonly name: "TransactionDeposited";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "withdrawalHash";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "success";
        readonly type: "bool";
    }];
    readonly name: "WithdrawalFinalized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "withdrawalHash";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }];
    readonly name: "WithdrawalProven";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IDisputeGame";
        readonly name: "_disputeGame";
        readonly type: "address";
    }];
    readonly name: "blacklistDisputeGame";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_withdrawalHash";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "_proofSubmitter";
        readonly type: "address";
    }];
    readonly name: "checkWithdrawal";
    readonly outputs: readonly [];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint64";
        readonly name: "_gasLimit";
        readonly type: "uint64";
    }, {
        readonly internalType: "bool";
        readonly name: "_isCreation";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }];
    readonly name: "depositTransaction";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IDisputeGame";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "disputeGameBlacklist";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "disputeGameFactory";
    readonly outputs: readonly [{
        readonly internalType: "contract DisputeGameFactory";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "disputeGameFinalityDelaySeconds";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "donateETH";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly internalType: "struct Types.WithdrawalTransaction";
        readonly name: "_tx";
        readonly type: "tuple";
    }];
    readonly name: "finalizeWithdrawalTransaction";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly internalType: "struct Types.WithdrawalTransaction";
        readonly name: "_tx";
        readonly type: "tuple";
    }, {
        readonly internalType: "address";
        readonly name: "_proofSubmitter";
        readonly type: "address";
    }];
    readonly name: "finalizeWithdrawalTransactionExternalProof";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly name: "finalizedWithdrawals";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "guardian";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract DisputeGameFactory";
        readonly name: "_disputeGameFactory";
        readonly type: "address";
    }, {
        readonly internalType: "contract SystemConfig";
        readonly name: "_systemConfig";
        readonly type: "address";
    }, {
        readonly internalType: "contract SuperchainConfig";
        readonly name: "_superchainConfig";
        readonly type: "address";
    }, {
        readonly internalType: "GameType";
        readonly name: "_initialRespectedGameType";
        readonly type: "uint32";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "l2Sender";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "_byteCount";
        readonly type: "uint64";
    }];
    readonly name: "minimumGasLimit";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_withdrawalHash";
        readonly type: "bytes32";
    }];
    readonly name: "numProofSubmitters";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "params";
    readonly outputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "prevBaseFee";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint64";
        readonly name: "prevBoughtGas";
        readonly type: "uint64";
    }, {
        readonly internalType: "uint64";
        readonly name: "prevBlockNum";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "paused";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "proofMaturityDelaySeconds";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "proofSubmitters";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly internalType: "struct Types.WithdrawalTransaction";
        readonly name: "_tx";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "_disputeGameIndex";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "version";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "stateRoot";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "messagePasserStorageRoot";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "latestBlockhash";
            readonly type: "bytes32";
        }];
        readonly internalType: "struct Types.OutputRootProof";
        readonly name: "_outputRootProof";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "_withdrawalProof";
        readonly type: "bytes[]";
    }];
    readonly name: "proveWithdrawalTransaction";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "provenWithdrawals";
    readonly outputs: readonly [{
        readonly internalType: "contract IDisputeGame";
        readonly name: "disputeGameProxy";
        readonly type: "address";
    }, {
        readonly internalType: "uint64";
        readonly name: "timestamp";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "respectedGameType";
    readonly outputs: readonly [{
        readonly internalType: "GameType";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "respectedGameTypeUpdatedAt";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "GameType";
        readonly name: "_gameType";
        readonly type: "uint32";
    }];
    readonly name: "setRespectedGameType";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "superchainConfig";
    readonly outputs: readonly [{
        readonly internalType: "contract SuperchainConfig";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "systemConfig";
    readonly outputs: readonly [{
        readonly internalType: "contract SystemConfig";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
export declare const portalAbi: readonly [{
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
    readonly inputs: readonly [];
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "version";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }];
    readonly name: "Initialized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "Paused";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "version";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "opaqueData";
        readonly internalType: "bytes";
        readonly type: "bytes";
        readonly indexed: false;
    }];
    readonly name: "TransactionDeposited";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "Unpaused";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "withdrawalHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
        readonly indexed: true;
    }, {
        readonly name: "success";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "WithdrawalFinalized";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "withdrawalHash";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
        readonly indexed: true;
    }, {
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "WithdrawalProven";
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "GUARDIAN";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "L2_ORACLE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract L2OutputOracle";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "SYSTEM_CONFIG";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract SystemConfig";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_gasLimit";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "_isCreation";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "depositTransaction";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "payable";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "donateETH";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_tx";
        readonly internalType: "struct Types.WithdrawalTransaction";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "nonce";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "sender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "target";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "gasLimit";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }];
    readonly name: "finalizeWithdrawalTransaction";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "finalizedWithdrawals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "guardian";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_l2Oracle";
        readonly internalType: "contract L2OutputOracle";
        readonly type: "address";
    }, {
        readonly name: "_guardian";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "_systemConfig";
        readonly internalType: "contract SystemConfig";
        readonly type: "address";
    }, {
        readonly name: "_paused";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_l2OutputIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isOutputFinalized";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "l2Oracle";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract L2OutputOracle";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "l2Sender";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "pure";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_byteCount";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }];
    readonly name: "minimumGasLimit";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "params";
    readonly outputs: readonly [{
        readonly name: "prevBaseFee";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }, {
        readonly name: "prevBoughtGas";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "prevBlockNum";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "pause";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "paused";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_tx";
        readonly internalType: "struct Types.WithdrawalTransaction";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "nonce";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "sender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "target";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "gasLimit";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
    }, {
        readonly name: "_l2OutputIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_outputRootProof";
        readonly internalType: "struct Types.OutputRootProof";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "version";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "stateRoot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "messagePasserStorageRoot";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }, {
            readonly name: "latestBlockhash";
            readonly internalType: "bytes32";
            readonly type: "bytes32";
        }];
    }, {
        readonly name: "_withdrawalProof";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "proveWithdrawalTransaction";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "provenWithdrawals";
    readonly outputs: readonly [{
        readonly name: "outputRoot";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }, {
        readonly name: "l2OutputIndex";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "systemConfig";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract SystemConfig";
        readonly type: "address";
    }];
}, {
    readonly stateMutability: "nonpayable";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "unpause";
    readonly outputs: readonly [];
}, {
    readonly stateMutability: "view";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
//# sourceMappingURL=abis.d.ts.map