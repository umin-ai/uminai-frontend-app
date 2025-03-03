import { BASE_SERVER_URL, GeneralState, InitialGeneralState } from "@ap/shared/consts";
import axios from "axios";
import { atom, useAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";
import * as ethers from "ethers";
import { Config, useAccount, useClient, useConnectorClient } from "wagmi";
import type { Account, Chain, Client, Transport } from 'viem'
import { readContract } from "viem/actions";
import { config } from "@ap/components/WalletProvider";
import UDIDManage_ABI from "@ap/abis/uDID.abi.json";
import { UDID_MANAGER_CONTRACT } from "@ap/shared/addresses";
import { useResolveDIDIpfs } from "./ipfs.hooks";

function clientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new ethers.providers.Web3Provider(transport, network)
  const signer = provider.getSigner(account.address)
  return signer
}

export function clientToProvider(client: Client<Transport, Chain>) {
  const { chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  if (transport.type === 'fallback')
    return new ethers.providers.FallbackProvider(
      (transport.transports as ReturnType<Transport>[]).map(
        ({ value }) => new ethers.providers.JsonRpcProvider(value?.url, network),
      ),
    )
  return new ethers.providers.JsonRpcProvider(transport.url, network)
}

/** Hook to convert a Viem Client to an ethers.js Signer. */
function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId })
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client])
}

/** Hook to convert a viem Client to an ethers.js Provider. */
export function useEthersProvider({
  chainId,
}: { chainId?: number | undefined } = {}) {
  const client = useClient<Config>({ chainId })
  return useMemo(() => (client ? clientToProvider(client) : undefined), [client])
}

interface ICreateDID {
  uniqueId: string;
  cid: string;
}
const useCreateDID = () => {
  const [createDIDState, setCreateDIDState] = useState<GeneralState>(InitialGeneralState);
  const [did, setDid] = useState<string | null>(null);
  const client = useClient();
  const { connector, address } = useAccount();

  const signer = useEthersSigner();

  const generateDID = async () => {
    try {
      const response = await axios.get(`${BASE_SERVER_URL}/web3/generate-udid`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = response.data.result as ICreateDID;

      return result;
    } catch (error) {
      console.error('Error generating DID', error);
    }
  }

  const onCreateDID_Contract = async () => {
    setCreateDIDState({ ...InitialGeneralState, isLoading: true });
    try {
      if (!connector) throw 'Please connect your wallet';
      if (!signer) throw 'Please connect your wallet';

      const generatedDID = await generateDID();
      if (!generatedDID) throw 'Error generating DID';

      const contract = new ethers.Contract(UDID_MANAGER_CONTRACT, UDIDManage_ABI, signer);

      await contract.createDID(`did:uminai:${generatedDID.uniqueId}`, generatedDID.cid);

      await axios.post(`${BASE_SERVER_URL}/web3/index-udid`, {
        udid: `did:uminai:${generatedDID.uniqueId}`,
        owner: address,
      });
      setDid(`did:uminai:${generatedDID.uniqueId}`);
      setCreateDIDState((prevState) => ({ ...prevState, isSuccess: true }));
    } catch (error) {
      console.error(error);
      setCreateDIDState((prevState) => ({ ...prevState, error: error }));
    } finally {
      setCreateDIDState((prevState) => ({ ...prevState, isLoading: false }));
    }
  }
  return {
    did,
    createDIDState,
    onCreateDID_Contract
  }
}

interface IReadDIDPointers {
  ipfsCID: string;
  owner: string;
  exists: boolean;
}
const useReadDIDPointers = () => {
  const [dIDPointersState, setDIDPointersState] = useState<GeneralState>(InitialGeneralState);
  const [targetDID, setTargetDID] = useState<string>('');
  const [didPointers, setDidPointers] = useState<IReadDIDPointers | null>(null);

  const provider = useEthersProvider();

  const getDidPointers_Contract = async (did: string) => {
    try {
      setTargetDID(did);

      const contract = new ethers.Contract(UDID_MANAGER_CONTRACT, UDIDManage_ABI, provider);
      
      const pointer = await contract.didPointers(did);

      setDidPointers({
        ipfsCID: pointer.ipfsCID,
        owner: pointer.owner,
        exists: pointer.exists,
      });

      return {
        ipfsCID: pointer.ipfsCID,
        owner: pointer.owner,
        exists: pointer.exists,
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  return {
    targetDID,
    didPointers,
    getDidPointers_Contract
  }
}

const useReadDIDPointerDocument = ({
  didFromQuery,
}: {
  didFromQuery: string | null;
}) => {
  const [dIDPointerDocument, setDIDPointerDocument] = useState<GeneralState>(InitialGeneralState);
  const [didDoc, setDidDoc] = useState<any | null>(null);

  const { getDidPointers_Contract } = useReadDIDPointers();
  const { onResolveIPFS } = useResolveDIDIpfs();
  const onResolveDIDPointerDocument = async (did: string) => {
    try {
      if (!did) throw 'No DID provided';
      const resultOnGetDidPointers = await getDidPointers_Contract(did);
      console.log('resultOnGetDidPointers', resultOnGetDidPointers);
      if (!resultOnGetDidPointers) throw 'DID CID not found';

      const { ipfsCID } = resultOnGetDidPointers;
      const resolvedResult = await onResolveIPFS(ipfsCID);

      console.log('resolvedResult', resolvedResult);
      setDidDoc(resolvedResult);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (didFromQuery) {
      onResolveDIDPointerDocument(didFromQuery);
    }
  }, [didFromQuery]);

  return {
    didDoc,
    dIDPointerDocument,
    onResolveDIDPointerDocument
  }
}


export {
  useCreateDID,
  useReadDIDPointers,
  useReadDIDPointerDocument,
}