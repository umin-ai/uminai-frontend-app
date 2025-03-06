'use client';
import { FlexColumn, FlexRow, TopHeaderDefault } from "@ap/components/general";
import Image from "next/image";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { Text } from "./public-library/components/styled";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <FlexColumn className="h-full min-h-[100vh]">
      <TopHeaderDefault>
        <Text className="text-[#2563EB] font-semibold text-xl">
          uminai - Demo Applications
        </Text>
      </TopHeaderDefault>
      <FlexColumn className="mt-6 px-6 items-center">
        <Text className="text-[#000] font-semibold text-3xl uppercase mt-6 mb-6">
          Applications
        </Text>
        <Grid3Col>
          <Card
            title="1. Public Library"
            description="View public product information. Explore uDPD and engage with uminai Agent"
            image="/images/public-library.png"
            link="/public-library"
          />
          <Card
            title="2. uDID"
            description="Decentralised Identity. Create and manage Decentralised Identifiers"
            image="/images/udid.png"
            link="/udid"
          />
          <Card
            title="3. uDPD"
            description="Decentralised Product Data. Create and manage product data."
            image="/images/udpd.png"
            link="/udpd"
          />
          {/* <Card
            title="4. AI in Action"
            description="View uminais AI in action. Explore AI models and engage with uminai Agent"
            image="/images/udpd.png"
            link="/ai"
          /> */}
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

const CardBox = styled(FlexColumn)`
  // design like a windows desktop card
  background-color: #f8fafc;
  padding: 24px;
  border-radius: 8px;
  max-width: 300px;
  max-height: 300px;
  justify-content: start;
  align-items: center;
`

const Img = styled(Image)`
`

const Card = ({ title, description, image, link }: {
  title: string,
  description: string,
  image: string,
  link: string
}) => {
  const navigate = useRouter();
  return (
    <CardBox
      className="cursor-pointer"
      onClick={() => navigate.push(link)}
    >
      <Img src={image} alt={title} width={150} height={150} />
      <FlexColumn className="justify-center items-center mt-4 text-center">
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