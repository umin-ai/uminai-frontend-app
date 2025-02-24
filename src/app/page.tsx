'use client';
import { useGetAllProductsWithTileLocation } from "@ap/hooks/api.hooks";
import { Space } from "@mantine/core";
import Image from "next/image";
import { useMemo } from "react";
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
  )
}

const SimpleChatBot = () => {
  return (
    <div className="flex justify-center items-center w-full border">
      <div className="bg-white h-96 w-full">
        <div className="flex justify-center items-center h-16 w-full bg-white">
          <span className="text-lg font-bold">Chat Bot</span>
        </div>
        <div className="h-full w-full bg-gray-200 p-5 flex flex-col">
          <div>
            <span>Response:</span>
            <div className="h-20">Hello</div>
          </div>
          <div>
            <span>Ask anything</span>
            <textarea className="w-full h-32 p-3"></textarea>
          </div>
          <div>
            <button className="bg-blue-500 text-white w-full h-10">Send</button>
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