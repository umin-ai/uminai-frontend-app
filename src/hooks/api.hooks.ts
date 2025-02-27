import { BASE_SERVER_URL } from "@ap/shared/consts";
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
interface IProduct {
  identity: number,
  label: string[],
  properties: {
    identifier: string,
    color: string,
    material: string,
    name: string,
    weight: string,
    description: string,
  },
  elementId: string
}

export interface IProductLocation {
  productInfo: IProduct,
  tileNo: number,
}

const useGetAllProductsWithTileLocation = () => {
  const [productLocation, setProductLocation] = useState<IProductLocation[]>([]);
  const onFetch = async () => {
    try {
      const result = await fetch(`${BASE_SERVER_URL}/get-location`);

      if (!result.ok) throw 'Error fetching data';

      const onResult = await result.json();
      const data = onResult.data;
      setProductLocation(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (productLocation.length === 0) {
      onFetch();
    }
  }, []);

  return {
    productLocation
  }
}

export const chatLLMMsgAtom = atom<string>('Send something to chat with LLM');
export const chatLoadingAtom = atom<boolean>(false);
const useChatLLMV2 = () => {
  const [chatLLMMsg, setChatLLMMsg] = useAtom(chatLLMMsgAtom);
  const [chatLoadingState, setChatLoadingState] = useAtom(chatLoadingAtom);
  const onChatToLLM = async (msg: string) => {
    setChatLoadingState(true);
    try {
      const result = await fetch(`${BASE_SERVER_URL}/chat-v2`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: msg })
      });

      if (!result.ok) throw 'Error fetching data';

      const onResult = await result.json();
      console.log('onResult', onResult);
      setChatLLMMsg(onResult.data);
    } catch (error) {
      console.error('[Err in onChatLLM]', error);
    } finally {
      setChatLoadingState(false);
    }
  }

  return {
    onChatToLLM
  }
};

export {
  useGetAllProductsWithTileLocation,
  useChatLLMV2
}