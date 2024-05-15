import { bytesToHex, encodeFunctionData } from '../../../utils/index.js';
import { paymasterAbi } from '../../constants/abis.js';
export function getApprovalBasedPaymasterInput(parameters) {
    const { innerInput, minAllowance, token } = parameters;
    const innerInputHex = typeof innerInput === 'string' ? innerInput : bytesToHex(innerInput);
    return encodeFunctionData({
        abi: paymasterAbi,
        functionName: 'approvalBased',
        args: [token, minAllowance, innerInputHex],
    });
}
//# sourceMappingURL=getApprovalBasedPaymasterInput.js.map