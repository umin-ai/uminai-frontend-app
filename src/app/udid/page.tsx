'use client';
import { Button, DefaultButton, FlexColumn, FlexRow, PrimaryButton } from "@ap/components/general";
import styled from "styled-components";
import { TopUDIDHeader } from "./components/styled";
import { Text } from "../public-library/components/styled";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { useCreateDID } from "@ap/hooks/web3.hooks";

export const TopHeader = styled.div`
  background-color: #f8fafc;
  // background-image: radial-gradient(59.1% 166.02% at 50% -66.02%, 1);
  background-image: linear-gradient(180deg, #f8fafc 50%, #e2e8f0  100%);
  padding: 24px;

  display: flex;
  flex-direction: row;
`

export default function UDID () {
  // const { address } = useAccount();
  const { onCreateDID_Contract} = useCreateDID();
  return (
    <FlexColumn>
      <TopUDIDHeader>
        <FlexColumn className="w-[60%]">
          <Text className="text-[#2563EB] font-bold text-lg">
            uminai DECENTRALISED IDENTITY (uDID)
          </Text>
          <Text className="text-[#000] font-semibold text-3xl uppercase mt-6">
            UNIQUE{' '}
            <Text className="font-bold underline">Identification</Text>{' '}
            for{' '}
            <Text className="font-bold underline">all.</Text>
          </Text>
          <Text className="text-[#71717a] mt-5">
            Whether you are a person, a product, or an integrated system,
            uminai's Decentralised Identity (uDID) is the key to fully-owned and controlled identity.
          </Text>
          <FlexRow className="gap-3 mt-5">
            <PrimaryButton>Read more</PrimaryButton>
            <DefaultButton>Contribute</DefaultButton>
          </FlexRow>
        </FlexColumn>
        <FlexColumn className="items-end w-[40%]">
          <ConnectKitButton theme="soft" mode="light" showAvatar={false} />

        </FlexColumn>
      </TopUDIDHeader>

      <Grid2Col>
        <FlexColumn id='left' className="p-12 bg-slate-700 w-full text-white">
          <Text className="font-bold text-3xl text-start w-full">
            Generate uDID
          </Text>
          <FlexColumn className="w-full items-start mt-6 font-medium">
            <Text>
              Think of uDID as a reference to item identity.
            </Text>
            <div>
              <li>
                The item owned a uDID.
              </li>
              <li>
                uDID enabled the item to be identified.
              </li>
              <li>
                The item could be a person, a product, or an integrated system.
              </li>
              <li>
                Unlocks access to Web3 and AI Services.
              </li>
            </div>
          </FlexColumn>
        </FlexColumn>
        <FlexColumn id='right' className="p-12 bg-white w-full">
          <Text className="font-bold text-3xl w-[635px]">
            Try it.
          </Text>
          <Text className="mt-6">
            1. Connect to your web3 wallet
          </Text>
          <ConnectKitButton theme="soft" mode="light" showAvatar={false} />
          <Text className="mt-6">
            2. Generate uDID
          </Text>
          <GenerateButton onClick={onCreateDID_Contract}>
            Click to Generate uDID
          </GenerateButton>
          <Text className="mt-6">
            3. uDID
          </Text>
          <GeneratedButton>
            Generate first to reveal uDID
          </GeneratedButton>
        </FlexColumn>
      </Grid2Col>
    </FlexColumn>
  )
}

const GenerateButton = styled(DefaultButton)`
  // background-color: #2563EB;
  // color: white;
  font-weight: 600;
  font-size: 1.25rem;
  padding: 12px 24px;
  border-radius: 0.375rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2563EB;
    color: white;
    // move the text to center
    transform: translateY(-1px);
  }
`

const GeneratedButton = styled(GenerateButton)`
  // slate
  background-color: #dbe3f1;
  // color: white;
  font-weight: 600;
  font-size: 1.25rem;
  padding: 12px 24px;
  border-radius: 0.375rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2563EB;
    color: white;
    // move the text to center
    transform: translateY(-1px);
  }
`

const Grid2Col = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`