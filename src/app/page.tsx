'use client';
import { StyledButton, StyledReadOnlyTextArea } from "@ap/components/general";
import { chatLLMMsgAtom, chatLoadingAtom, useChatLLMV2, useGetAllProductsWithTileLocation } from "@ap/hooks/api.hooks";
import { Space } from "@mantine/core";
import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import { useMemo, useState } from "react";
import styled from "styled-components";

// Astro Promotions One Page Web Design

const Spacer = styled(Space)`
  height: 80px;
  @media (max-width: 768px) {
    height: 95px !important;
    min-height: 95px !important;
  };
`;

const Tile = [{
  id: 1,
}, {
  id: 2,
}, {
  id: 3,
}, {
  id: 4,
}, {
  id: 5,
}, {
  id: 6,
}, {
  id: 7,
}, {
  id: 8,
}, {
  id: 9,
}, {
  id: 10,
}, {
  id: 11,
}, {
  id: 12,
}, {
  id: 13,
}, {
  id: 14,
}, {
  id: 15,
}, {
  id: 16,
}]
const Load4X4TILERECTANGLE = () => {
  const { productLocation } = useGetAllProductsWithTileLocation();
  console.log('productLocation', productLocation)

  return (
    <div className="flex flex-row items-center justify-center w-full h-full bg-slate-500
      gap-12
    ">
      <div className="grid grid-cols-4 gap-4 w-fit">
        {Tile.map((tile) => (
          <div key={tile.id}className={`h-24 w-24 flex justify-center items-center
            ${productLocation.find((p) => p.tileNo === tile.id) ? 'bg-green-500' : 'bg-gray-200'}
            `}>
              {productLocation.find((p) => p.tileNo === tile.id) &&
                <span className="text-center">
                  {productLocation.find((p) => p.tileNo === tile.id)?.productInfo.properties.name}
                </span>
              }
            </div>
        ))}
      </div>
      <ResponsePanel />
    </div>
  )
}

const ResponsePanel = () => {
  const chatLLMMsg = useAtomValue(chatLLMMsgAtom);
  const chatLoading = useAtomValue(chatLoadingAtom);
  return (
    <div id='chat-response-panel' className="flex flex-col w-[50%] h-full bg-slate-300">
      <div className="p-5 h-full flex flex-col">
        <span>Response:</span>
        <div className="flex flex-col relative h-full w-full">
          <StyledReadOnlyTextArea
            className="w-full h-full p-3"
            disabled
            value={chatLLMMsg}
          />
          {chatLoading &&
            <div className="absolute w-full h-full
              bg-slate-400 bg-opacity-50
              flex justify-center items-center
            ">
              <span className="font-regular text-xl">Loading...</span>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

const SimpleChatBot = () => {
  const { onChatToLLM } = useChatLLMV2();
  const [command, setCommand] = useState<string>('');
  const handleChatToLLM = async () => {
    if (command.length > 0) {
      onChatToLLM(command);
    }
  }
  return (
    <div className="flex justify-center items-center w-full border">
      <div className="bg-white h-96 w-full">
        <div className="flex justify-center items-center h-16 w-full bg-white">
          <span className="text-lg font-bold">Chat Bot</span>
        </div>
        <div className="h-full w-full bg-gray-200 p-5 flex flex-col">
          <div>
            <span>Ask anything</span>
            <textarea className="w-full h-32 p-3"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="Type here..."
            ></textarea>
          </div>
          <div>
            <StyledButton className="bg-blue-500 text-white w-full h-10"
              onClick={handleChatToLLM}
              disabled={command.length === 0}
            >Send</StyledButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col w-full h-[100vh] relative overflow-x-hidden">
      <Load4X4TILERECTANGLE />
      <Spacer />
      <SimpleChatBot />
    </div>
  )
};