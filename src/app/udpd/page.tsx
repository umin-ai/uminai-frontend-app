'use client';

import { DefaultButton, FlexColumn, FlexRow, Footer, PrimaryButton } from "@ap/components/general";
import { TopUDPDHeader } from "./components/styled";
import { Text } from "../public-library/components/styled";
import styled from "styled-components";
import { useState } from "react";

const Grid2Col = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
export default function UDPD () {
  return (
    <FlexColumn className="h-full min-h-[100vh]">
      <FlexColumn className="h-full flex-1">
        <TopUDPDHeader>
          <FlexColumn className="w-[60%]">
          <Text className="text-[#2563EB] font-semibold text-xl uppercase">
            uminai Decentralised Product Data (uDPD) Buidlr
          </Text>
          <Text className="text-[#000] font-semibold text-3xl uppercase mt-6">
            Create and manage product data.
          </Text>
          </FlexColumn>
        </TopUDPDHeader>
        {/* Content Generation */}
        <FlexColumn>
          <Generation />
        </FlexColumn>
      </FlexColumn>
      <Footer />
    </FlexColumn>
  )
}

const Generation = () => {
  return (
    <Grid2Col>
      <ContentInput />
      <ContentOutput />
    </Grid2Col>
  )
}

const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 12px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  margin-top: 12px;
`

type TabOption = 'Json' | 'Unstructured';
const TabOptionButton = styled(DefaultButton)<{ active: boolean }>`
  background-color: ${({ active }) => active ? '#2563EB' : '#f8fafc'};
  color: ${({ active }) => active ? '#fff' : '#2563EB'};
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  cursor: pointer;
`
const ContentInput = () => {
  const [tabOption, setTabOption] = useState<TabOption>('Unstructured')
  return (
    <FlexColumn className="px-12 py-8">
      <Text className="text-[#000] font-semibold text-2xl uppercase">
        Product Data Starts Here
      </Text>
      <Text>
        Insert your product data and let uminai Agent handle the rest.
      </Text>
      <FlexRow className="mt-4">
        <TabOptionButton
          active={tabOption === 'Unstructured'}
          onClick={() => setTabOption('Unstructured')}
        >Unstructured</TabOptionButton>
        <TabOptionButton
          active={tabOption === 'Json'}
          onClick={() => setTabOption('Json')}
        >JSON</TabOptionButton>
      </FlexRow>
      <TextAreaStyled />
      <PrimaryButton>Generate uDPD</PrimaryButton>
    </FlexColumn>
  )
}

const ContentOutput = () => {
  return (
    <FlexColumn className="px-12 py-8">
      <Text className="text-[#000] font-semibold text-2xl uppercase">
        Output
      </Text>
      <Text>
        uminai Agent has generated the following product data.
      </Text>
      <TextAreaStyled />
    </FlexColumn>
  )
}

