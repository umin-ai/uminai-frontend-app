import { BASE_SERVER_URL, GeneralState, InitialGeneralState } from "@ap/shared/consts";
import { IProduct } from "@ap/shared/product.interface";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export const constructUDIDForProductText = (UDID: string, text: string) => {
  const UDID_TEXT = `The product did identifier is: ${UDID}. identifier type did value is ${UDID}`;
  return `${UDID_TEXT}\n${text}`;
}
/**
 * This hook is used to generate JSON from text
 * @returns {jsonResult, generateToJsonState, onGenerateToJson}
 * **/
export const useGenerateToJson = ({
  UDID,
}: {
  UDID: string | null;
}) => {
  const [generateToJsonState, setGenerateToJsonState] = useState<GeneralState>(InitialGeneralState);
  const [jsonResult, setJsonResult] = useState<any | null>(null);

  /** 
   * Function to generate JSON from text
   * @param {string} text - The text to generate JSON from
   * **/
  const onGenerateToJson = async (text: string) => {
    try {
      if (!UDID) throw 'Please select a UDID';
      setGenerateToJsonState({ ...generateToJsonState, isLoading: true });
      const response = await axios.post(`${BASE_SERVER_URL}/product/generate-to-json`,
        constructUDIDForProductText(UDID, text),
        {
          headers: {
            'Content-Type': 'text/plain',
          }
        }
      );

      const result = response.data.message;
      console.log('result', result);
      setJsonResult(result);
      setGenerateToJsonState((prevState) => ({ ...prevState, isSuccess: true }));
      // if (result && typeof result === 'object') {
      //   setJsonResult(result);
      //   setGenerateToJsonState((prevState) => ({ ...prevState, isSuccess: true }));
      // } else {
      //   throw 'Error generating JSON - Invalid JSON';
      // }
    } catch (error) {
      console.error('Error generating JSON', error);
    } finally {
      setGenerateToJsonState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  return {
    jsonResult,
    generateToJsonState,
    onGenerateToJson
  }
};

export const useGetIndexedUdid = () => {
  const [indexedUdidState, setIndexedUdidState] = useState<GeneralState>(InitialGeneralState);
  const [indexedUdids, setIndexedUdids] = useState<string[]>([]);

  const { address } = useAccount();
  const onGetIndexedUdpd = async () => {
    try {
      console.log('address', address);
      if (!address) throw 'Please connect your wallet';
      setIndexedUdidState({ ...indexedUdidState, isLoading: true });
      const response = await axios.get(`${BASE_SERVER_URL}/web3/get-udids?ownerAddress=${address}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = response.data.result as string[];
      setIndexedUdids(result);
      setIndexedUdidState((prevState) => ({ ...prevState, isSuccess: true }));
    } catch (error) {
      console.error('Error getting indexed uDPD', error);
    } finally {
      setIndexedUdidState((prevState) => ({ ...prevState, isLoading: false }));
    }
  }

  useEffect(() => {
    if (indexedUdids.length === 0 && address) {
      onGetIndexedUdpd();
    }
  }, [address]);

  return {
    indexedUdids,
    indexedUdidState,
    onGetIndexedUdpd
  }
}

export const useCreateUDPD = () => {
  const [createUdpdState, setCreateUdpdState] = useState<GeneralState>(InitialGeneralState);

  const onCreateUDPD = async (udpd: any, UDID: string, productDescription: string) => {
    try {
      console.log('UDID', productDescription);
      setCreateUdpdState({ ...createUdpdState, isLoading: true });
      const response = await axios.post(`${BASE_SERVER_URL}/product/upsert`, {
        json: udpd,
        description: productDescription,
        UDID,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = response.data.result;
      console.log('result', result);
      setCreateUdpdState((prevState) => ({ ...prevState, isSuccess: true }));
    } catch (error) {
      console.error('Error creating uDPD', error);
    } finally {
      setCreateUdpdState((prevState) => ({ ...prevState, isLoading: false }));
    }
  }

  return {
    createUdpdState,
    onCreateUDPD
  }
}

export const useUDPDByUDID = () => {
  const [udpdByUdidState, setUdpdByUdidState] = useState<GeneralState>(InitialGeneralState);
  const [udpdByUdid, setUdpdByUdid] = useState<any | null>(null);

  const onGetUDPDByUDID = async (UDID: string) => {
    try {
      setUdpdByUdidState({ ...udpdByUdidState, isLoading: true });
      const response = await axios.get(`${BASE_SERVER_URL}/product/get-udpd?udid=${UDID}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = response.data.result;
      console.log('result', result);
      setUdpdByUdid(result);
      setUdpdByUdidState((prevState) => ({ ...prevState, isSuccess: true }));
    } catch (error) {
      console.error('Error getting uDPD by UDID', error);
    } finally {
      setUdpdByUdidState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  return {
    udpdByUdid,
    udpdByUdidState,
    onGetUDPDByUDID
  }
}

export const useGetAllUDPD = () => {
  const [allUdpdState, setAllUdpdState] = useState<GeneralState>(InitialGeneralState);
  const [allUdpd, setAllUdpd] = useState<IProduct[] | null>(null);

  const onGetAllUDPD = async () => {
    try {
      setAllUdpdState({ ...allUdpdState, isLoading: true });
      const response = await axios.get(`${BASE_SERVER_URL}/product/get-all-udpd`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = response.data.result;
      setAllUdpd(result);
      setAllUdpdState((prevState) => ({ ...prevState, isSuccess: true }));
    } catch (error) {
      console.error('Error getting all uDPD', error);
      setAllUdpdState((prevState) => ({ ...prevState, error }));
    } finally {
      setAllUdpdState((prevState) => ({ ...prevState, isLoading: false }));
    }
  }

  useEffect(() => {
    if (!allUdpd) {
      onGetAllUDPD();
    }
  }, []);

  return {
    allUdpd,
    setAllUdpd,
    allUdpdState,
    onGetAllUDPD
  }
}

export const useQueryProducts = () => {
  const [query, setQuery] = useState<string>('');
  const [queryState, setQueryState] = useState<GeneralState>(InitialGeneralState);
  const [queryResult, setQueryResult] = useState<IProduct[] | null>(null);

  const onQuery = async () => {
    try {
      setQueryState({ ...queryState, isLoading: true });
      const response = await axios.get(`${BASE_SERVER_URL}/product/query?search=${query}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = response.data.result;
      setQueryResult(result);
      setQueryState({ ...queryState, isSuccess: true });
    } catch (error) {
      console.error('Error querying products', error);
      setQueryState({ ...queryState, error });
    } finally {
      setQueryState({ ...queryState, isLoading: false });
    }
  }

  return {
    query,
    setQuery,
    queryResult,
    queryState,
    onQuery
  }
}