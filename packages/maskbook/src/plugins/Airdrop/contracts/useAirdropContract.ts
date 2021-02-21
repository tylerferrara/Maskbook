import type { AbiItem } from 'web3-utils'
import type { Airdrop } from '../../../contracts/Airdrop'
import { useConstant } from '../../../web3/hooks/useConstant'
import { useContract } from '../../../web3/hooks/useContract'
import { AIRDROP_CONSTANTS } from '../constants'
import AirdropABI from '../../../../abis/Airdrop.json'

export function useAirdropContract() {
    const address = useConstant(AIRDROP_CONSTANTS, 'AIRDROP_CONTRACT_ADDRESS')
    return useContract<Airdrop>(address, AirdropABI as AbiItem[])
}
