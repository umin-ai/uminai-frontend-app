import { GeneralState, InitialGeneralState } from "@ap/shared/consts";
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import ethers from "ethers";
import { useAccount, useClient } from "wagmi";
import { readContract } from "viem/actions";
import { config } from "@ap/components/WalletProvider";
import UDIDManage_ABI from "@ap/abis/uDID.abi.json";
import { UDID_MANAGER_CONTRACT } from "@ap/shared/addresses";

const useCreateDID = () => {
  const [createDIDState, setCreateDIDState] = useState<GeneralState>(InitialGeneralState);
  const client = useClient();
  const onCreateDID_Contract = async () => {
    try {
      // @ts-ignore
      const result = await readContract(config, {
        abi: UDIDManage_ABI,
        address: UDID_MANAGER_CONTRACT,
        functionName: 'didPointers',
        args: ["did:uminai:0a38c4d2-de98-4820-97f5-80aac64bf55a"]
      })

      console.log('result', result)
    } catch (error) {
      console.error(error);
    }
  }
  return {
    onCreateDID_Contract
  }
}

export {
  useCreateDID
}