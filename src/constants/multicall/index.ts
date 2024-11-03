import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
   [ChainId.TESTNET]: '0x2E78F9295D5A06c8D121F8D12cB30CBE17C9f469'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
