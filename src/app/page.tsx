'use client';
import { FlexColumn, FlexRow, TopHeaderDefault } from "@ap/components/general";
import Image from "next/image";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { Text } from "./public-library/components/styled";

export default function Home() {
  return (
    <FlexColumn className="h-full min-h-[100vh]">
      <TopHeaderDefault>
        <Text className="text-[#2563EB] font-semibold text-xl">
          uminai - Demo Applications
        </Text>
      </TopHeaderDefault>
      <FlexColumn className="mt-6 px-6">
        <Text className="text-[#000] font-semibold text-3xl uppercase mt-6">
          Applications
        </Text>
        <Grid3Col>
          <Card
            title="Public Library"
            description="View public product information"
            image="/public-library.png"
            link="/public-library"
          />
          <Card
            title="uDID"
            description="Decentralised Identity"
            image="/udid.png"
            link="/udid"
          />
          <Card
            title="uDPD"
            description="Decentralised Product Data"
            image="/udpd.png"
            link="/udpd"
          />
        </Grid3Col>
        </FlexColumn>
    </FlexColumn>
  )
};

const Grid3Col = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`

const CardBox = styled.div`
  // design like a windows desktop card
  background-color: #f8fafc;
  padding: 24px;
  border-radius: 8px;
`

const Card = ({ title, description, image, link }: {
  title: string,
  description: string,
  image: string,
  link: string
}) => {
  return (
    <CardBox>
      <Image src={image} alt={title} width={300} height={300} />
      <FlexColumn className="justify-center items-center mt-4">
        <Text className="text-[#000] font-semibold text-xl">
          {title}
        </Text>
        <Text className="text-[#71717a]">
          {description}
        </Text>
      </FlexColumn>
    </CardBox>
  )
}