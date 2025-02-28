import { useState } from 'react';
import { GeneralState, InitialGeneralState } from './../shared/consts';
import axios from 'axios';

const IPFS_URL= 'https://ipfs-chainsafe.dev/ipfs'
const useResolveDIDIpfs = () => {
  const [resolveIPFSState, setResolveIPFSState] = useState<GeneralState>(InitialGeneralState);
  const [didDoc, setDidDoc] = useState<any | null>(null);
  const onResolveIPFS = async (cid: string) => {
    try {
      const response = await axios.get(`${IPFS_URL}/${cid}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log('response', response);
      setDidDoc(response.data);
    } catch (error) {
      console.error('Error resolving DID', error);
    }
  }

  return {
    didDoc,
    resolveIPFSState,
    onResolveIPFS
  }
}

export {
  useResolveDIDIpfs
}