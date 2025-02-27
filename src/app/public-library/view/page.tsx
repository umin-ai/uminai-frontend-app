'use client';
import { useParams, useSearchParams } from "next/navigation";
import { TopViewHeader } from "./components/styled";
import { FlexColumn, FlexRow } from "@ap/components/general";
import { Text } from "../components/styled";
import styled from "styled-components";

import { JsonView, allExpanded, darkStyles, defaultStyles } from 'react-json-view-lite';
import "react-json-view-lite/dist/index.css";
import { sampleJson } from "./sample.json";

export default function View() {
  const searchParams = useSearchParams();
  const did = searchParams.get('did');
  console.log('did', did);
  
  return (
    <FlexColumn>
      <FlexColumn className="mt-6 px-6">
        <TopViewHeader className="">
          <FlexColumn>
            <Text className="text-[#2563EB] font-semibold text-xl uppercase">
              uminai's Public Library of Product Information
            </Text>
            <Text className="text-[#000] font-semibold text-3xl uppercase mt-6">
              Product Information
            </Text>
          </FlexColumn>
          {/* Render your blog post content based on the id */}
        </TopViewHeader>

        <GridLayout>
          <LeftCard></LeftCard>
          <RightCard></RightCard>
        </GridLayout>
      </FlexColumn>
    </FlexColumn>
  )
}

// The left is smaller than the right
const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  margin-top: 20px;
`

const LeftCardLayout = styled.div`
  background-color: #f8fafc;
  padding: 24px;
  border-radius: 8px;
`

const RawFileJsonBox = styled.div`
  background-color: #f8fafc;
  border-radius: 8px;
  max-height: 500px;
  overflow-y: scroll;
`

const LeftCard = () => {
  return (
    <LeftCardLayout>
      <FlexRow className="items-center">
        <Text className="text-[#2563EB] font-semibold text-lg">
          uDID:&nbsp;{" "}
        </Text>
        <Text className="text-[#71717a] font-semibold text-lg">
          did:uminai:0x1234567890abcdef
        </Text>
      </FlexRow>
      <RawFileJsonBox className="mt-6">
        <JsonView data={sampleJson} style={defaultStyles} shouldExpandNode={allExpanded} />
      </RawFileJsonBox>
    </LeftCardLayout>
  )
}

const RightCardLayout = styled.div`
  background-color: #f8fafc;
  padding: 24px;
  border-radius: 8px;
`;

const RightCard = () => {
  return (
    <RightCardLayout>
      <FlexRow className="items-center">
        <Text className="text-[#2563EB] font-semibold text-lg">
          Information:&nbsp;{" "}
        </Text>
      </FlexRow>
      <p>
      {`1. Product Module (ID: did:uminai:container-unique-id)
    2. Product Details
       - Name: Container
       - UPC Identifier: CONTAINER-UPC-123456789
       - Description: A durable storage container designed for everyday use.
       - Material: High-grade Plastic
       - Dimensions (all measurements in cm):
           - Length: 10
           - Width: 10
           - Height: 10
       - Weight: 200 g
       - Manufacturer Details
           - Name: Container Co.
           - Location: USA
       - Production Information
           - Batch Number: C-001
           - Production Date: January 15, 2025
           - Expiry Date: January 15, 2030
           - Certifications: ISO9001, Recyclable
           - Origin: USA
    3. Category
       - Generalization: PhysicalProduct, DurableGood, StorageSolution
       - Main Categories: Storage, Household
    4. Color: Blue
    5. Usage Instructions
        - How to Use the Container
          - Step 1: Ensure the container is empty and clean before use.
          - Step 2: Open the container by lifting the lid slowly.
          - Step 3: Place your items inside, making sure to organize them properly.
          - Step 4: Close the lid securely to keep the contents safe.
          - Step 5: Store the container in a cool, dry place to maintain its condition`}
      </p>
      {/*  */}
    </RightCardLayout>
  )
}

// const 
