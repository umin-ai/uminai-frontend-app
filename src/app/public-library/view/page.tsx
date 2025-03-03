'use client';
import { useParams, useSearchParams } from "next/navigation";
import { TopViewHeader } from "./components/styled";
import { FlexColumn, FlexRow } from "@ap/components/general";
import { Text } from "../components/styled";
import styled from "styled-components";

import { JsonView, allExpanded, darkStyles, defaultStyles } from 'react-json-view-lite';
import "react-json-view-lite/dist/index.css";
import { sampleJson } from "./sample.json";
import { useReadDIDPointerDocument } from "@ap/hooks/web3.hooks";
import { useUDPDByUDID } from "@ap/hooks/api-product.hooks";
import { useEffect } from "react";

export default function View() {
  const searchParams = useSearchParams();
  const did = searchParams.get('did');
  // console.log('did', did);

  const { didDoc } = useReadDIDPointerDocument({
    didFromQuery: did
  });
  
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
          <LeftCard udid={did} jsonDocument={didDoc}/>
          <RightCard udid={did}/>
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

const LeftCard = ({
  udid,
  jsonDocument
}: {
  udid: string | null;
  jsonDocument: any;
}) => {
  console.log('jsonDocument', jsonDocument);
  return (
    <LeftCardLayout className="max-w-[500px]">
      <FlexRow className="items-start">
        <Text className="text-[#2563EB] font-semibold text-lg">
          uDID:&nbsp;{" "}
        </Text>
        <Text className="text-[#71717a] font-semibold text-lg">
          {udid}
        </Text>
      </FlexRow>
      <RawFileJsonBox className="mt-6">
        {jsonDocument &&
          <JsonView data={jsonDocument} style={defaultStyles} shouldExpandNode={allExpanded}/>
        }
      </RawFileJsonBox>
    </LeftCardLayout>
  )
}

const RightCardLayout = styled.div`
  background-color: #f8fafc;
  padding: 24px;
  border-radius: 8px;
`;

const RightCard = ({
  udid,
}: {
  udid: string | null;
}) => {
  const { onGetUDPDByUDID, udpdByUdid, udpdByUdidState } = useUDPDByUDID();
  useEffect(() => {
    if (udid || udid && !udpdByUdid) {
      onGetUDPDByUDID(udid);
    }
  }, [udid]);

  // console.log('hello', udpdByUdid);
  return (
    <RightCardLayout>
      <FlexRow className="items-center">
        <Text className="text-[#2563EB] font-semibold text-lg">
          Information:&nbsp;{" "}
        </Text>
      </FlexRow>
      {udpdByUdid && <ProductSpecs product={udpdByUdid} />}
      {/* <p>
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
      </p> */}
      {/*  */}
    </RightCardLayout>
  )
}

type HeadingTitleProps = {
  children: React.ReactNode;
};
const HeadingTitle: React.FC<HeadingTitleProps> = ({ children }) => (
  <div style={{ fontWeight: 'bold', marginRight: '16px' }}>{children}</div>
);

type ValueDataProps = {
  children: React.ReactNode;
};
const ValueData: React.FC<ValueDataProps> = ({ children }) => (
  <div>{children}</div>
);

interface RenderSpecProps {
  label: string;
  data: any;
}

const RenderSpec: React.FC<RenderSpecProps> = ({ label, data }) => {
  // If data is an array, render each item inside a collapsible section.
  if (Array.isArray(data)) {
    return (
      <details style={{ paddingLeft: '16px', marginBottom: '8px', textTransform: 'capitalize' }}>
        <summary>{label} (Array: {data.length} items)</summary>
        {data.map((item, index) => (
          <RenderSpec key={index} label={`${label} ${index + 1}`} data={item} />
        ))}
      </details>
    );
  }

  // If data is an object (and not null), iterate over its properties.
  if (typeof data === 'object' && data !== null) {
    return (
      <details style={{ paddingLeft: '16px', marginBottom: '8px' }}>
        <summary className="capitalize">{label} (Object)</summary>
        {Object.entries(data).map(([key, value]) => (
          <RenderSpec key={key} label={key} data={value} />
        ))}
      </details>
    );
  }

  // Otherwise, render the primitive value directly.
  if (typeof data === 'string' && data !== null) {
    return <InfoFlexRow label={label} value={data} />;
  } else if (data !== null) {
    return <InfoFlexRow label={label} value={data.toString()} />;
  } else {
    return <></>
  }
};

interface InfoFlexRowProps {
  label: string;
  value: React.ReactNode;
}

const InfoFlexRow: React.FC<InfoFlexRowProps> = ({ label, value }) => (
  <div style={{ display: 'flex', padding: '4px 0' }}>
    <div style={{ fontWeight: 'bold', marginRight: '8px', minWidth: '150px', textTransform: 'capitalize' }}>
      {label}:
    </div>
    <div>{value}</div>
  </div>
);
interface ProductSpecsProps {
  product: any; // You can define a more specific type if needed
}

const ProductSpecs: React.FC<ProductSpecsProps> = ({ product }) => {
  return (
    <div>
      {Object.entries(product).map(([key, value]) => (
        <RenderSpec key={key} label={key} data={value} />
      ))}
    </div>
  );
};