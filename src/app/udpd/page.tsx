'use client';

import { DefaultButton, FlexColumn, FlexRow, Footer, PrimaryButton } from "@ap/components/general";
import { TopUDPDHeader } from "./components/styled";
import { Text } from "../public-library/components/styled";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { constructUDIDForProductText, useCreateUDPD, useGenerateToJson, useGetIndexedUdid, useUDPDByUDID } from "@ap/hooks/api-product.hooks";
import { Select } from "@mantine/core";
import { GeneralState } from "@ap/shared/consts";
import Image from "next/image";
import { ConnectKitButton } from "connectkit";
import { useAccount, useClient } from "wagmi";

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
  const [text, setText] = useState('');
  const [selectedUdid, setSelectedUdid] = useState<string | null>(null);

  const { jsonResult, generateToJsonState, onGenerateToJson } = useGenerateToJson({
    UDID: selectedUdid
  });
  const { indexedUdidState, indexedUdids } = useGetIndexedUdid();

  return (
    <Grid2Col>
      <ContentInput
        text={text}
        setText={setText}
        generateToJsonState={generateToJsonState}
        onGenerateToJson={onGenerateToJson}
        indexedUdids={indexedUdids}
        indexedUdidState={indexedUdidState}
        selectedUdid={selectedUdid}
        setSelectedUdid={setSelectedUdid}
      />
      <ContentOutput 
        jsonResult={jsonResult}
        generateToJsonState={generateToJsonState}
        productText={constructUDIDForProductText(selectedUdid || '', text)}
        UDID={selectedUdid || ''}
      />
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
const ContentInput = ({
  text,
  setText,
  generateToJsonState,
  onGenerateToJson,
  indexedUdids,
  indexedUdidState,
  selectedUdid,
  setSelectedUdid
}: {
  text: string,
  setText: (text: string) => void,
  generateToJsonState: GeneralState,
  onGenerateToJson: (text: string) => void
  indexedUdids: string[],
  indexedUdidState: GeneralState,
  selectedUdid: string | null,
  setSelectedUdid: (udid: string) => void
}) => {
  const [tabOption, setTabOption] = useState<TabOption>('Unstructured');
  console.log('indexedUdids', indexedUdids);

  const client = useAccount();

  const { udpdByUdid, udpdByUdidState, onGetUDPDByUDID } = useUDPDByUDID(); 
  
  useEffect(() => {
    if (selectedUdid) {
      onGetUDPDByUDID(selectedUdid);
    }
  }, [selectedUdid]);
  return (
    <FlexColumn className="px-12 py-8">
      <Text className="text-[#000] font-semibold text-2xl uppercase">
        Product Data Starts Here
      </Text>
      <Text>
        Insert your product data and let uminai Agent handle the rest.
      </Text>

      <Text className="mt-4">
        Connect wallet to get started
      </Text>
      <ConnectKitButton theme="soft" mode="light" showAvatar={false} />

      <Text className="mt-4">
        Select uDID
        <Select
          data={indexedUdids}
          value={selectedUdid}
          disabled={!client.isConnected}
          onChange={(value) => value && setSelectedUdid(value)}  
        />
      </Text>
      <FlexRow className="mt-4">
        <TabOptionButton
          active={tabOption === 'Unstructured'}
          onClick={() => setTabOption('Unstructured')}
        >Unstructured</TabOptionButton>
        <TabOptionButton
          active={tabOption === 'Json'}
          onClick={() => setTabOption('Json')}
        >Image Processing (Upcoming)</TabOptionButton>
      </FlexRow>
      {/* Text area for product data */}

      {udpdByUdid && (
        <Text className="mt-4">
          Found {udpdByUdid.name} uDPD for selected uDID
        </Text>
      )}
      <TextAreaStyled
        placeholder={selectedUdid === null ? "Please select uDID" : "Describe your product here..."}
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={selectedUdid === null}
      />
      <PrimaryButton
        onClick={() => onGenerateToJson(text)}
        disabled={text.length === 0 || generateToJsonState.isLoading}
      >
        {generateToJsonState.isLoading ? 'Generating...' : 'Generate uDPD'}
      </PrimaryButton>
      {generateToJsonState.isSuccess && !generateToJsonState.isLoading && (
        <FlexRow className="w-full items-center justify-center gap-1 mt-4">
          <Text className="text-[#40C057]">
            Product data successfully generated
            </Text>
            <Img50x50 src={'/icons/success-tick-50x50.png'} alt="success-tick" width={100} height={0} />
        </FlexRow>
      )}
    </FlexColumn>
  )
}

const Img50x50 = styled(Image)`
  height: 25px;
  width: 25px;
`;

const ContentOutput = ({
  jsonResult,
  productText,
  UDID,
  generateToJsonState
}: {
  jsonResult: any
  productText: string
  UDID: string
  generateToJsonState: GeneralState
}) => {
  const { onCreateUDPD, createUdpdState } = useCreateUDPD();
  return (
    <FlexColumn className="px-12 py-8">
      <Text className="text-[#000] font-semibold text-2xl uppercase">
        Output
      </Text>
      <Text>
        uminai Agent has generated the following product data.
      </Text>
      <TextAreaStyled
        value={JSON.stringify(jsonResult, null, 2)}
        readOnly
      />
      <PrimaryButton
        onClick={() => onCreateUDPD(jsonResult, UDID, productText)}
        disabled={jsonResult === null || generateToJsonState.isLoading}
      >Create uDPD</PrimaryButton>
      {createUdpdState.isSuccess && (
        <FlexRow className="w-full items-center justify-center gap-1 mt-4">
          <Text className="text-[#40C057]">
            uDPD successfully created
          </Text>
          <Img50x50 src={'/icons/success-tick-50x50.png'} alt="success-tick" width={100} height={0} />
        </FlexRow>
      )}
    </FlexColumn>
  )
}

