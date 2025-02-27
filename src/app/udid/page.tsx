'use client';
import { DefaultButton, FlexColumn, FlexRow, PrimaryButton } from "@ap/components/general";
import styled from "styled-components";
import { TopUDIDHeader } from "./components/styled";
import { Text } from "../public-library/components/styled";
import { ConnectKitButton } from "connectkit";

export const TopHeader = styled.div`
  background-color: #f8fafc;
  // background-image: radial-gradient(59.1% 166.02% at 50% -66.02%, 1);
  background-image: linear-gradient(180deg, #f8fafc 50%, #e2e8f0  100%);
  padding: 24px;

  display: flex;
  flex-direction: row;
`

export default function UDID () {
  return (
    <FlexColumn>
      <TopUDIDHeader>
        <FlexColumn className="w-[60%]">
          <Text className="text-[#2563EB] font-semibold text-xl uppercase">
            uminai Decentralised Identity
          </Text>
          <Text className="text-[#000] font-semibold text-3xl uppercase mt-6">
            Decentralised. Identification for all.
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
      </TopUDIDHeader>

      <FlexColumn>
        <Text className="font-bold text-3xl text-center w-[635px] mt-10">
          Generate uDID
          <ConnectKitButton theme="soft" mode="light" showAvatar={false} />
        </Text>
      </FlexColumn>
    </FlexColumn>
  )
}