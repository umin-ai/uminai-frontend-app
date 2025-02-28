'use client';
import { DefaultButton, FlexColumn, FlexRow, Footer, PrimaryButton } from "@ap/components/general";
import styled from "styled-components";
import { TopUDIDHeader } from "./components/styled";
import { Text } from "../public-library/components/styled";
import { ConnectKitButton } from "connectkit";
import { useCreateDID, useReadDIDPointers } from "@ap/hooks/web3.hooks";
import { useEffect, useState } from "react";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useResolveDIDIpfs } from "@ap/hooks/ipfs.hooks";
import { allExpanded, defaultStyles, JsonView } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

export default function UDID () {
  // const { address } = useAccount();
  const { onCreateDID_Contract, did, createDIDState } = useCreateDID();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [isCopied]);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  }

  return (
    <FlexColumn className="justify-between h-[100vh]">
    <FlexColumn className="h-full">
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
            3. uDID <>{did && <>
              {!isCopied ? <>- Click to copy</> : <>- Copied!</>}
            </>}</>
          </Text>
          <GeneratedButton
            onClick={() => {
              if (did) {
                copyToClipboard(did);
              }
            }}
          >
            {!createDIDState.isLoading && !createDIDState.isSuccess && 'Generate first to reveal uDID'}
            {createDIDState.isLoading && !createDIDState.isSuccess && 'Generating...'}
            {!createDIDState.isLoading && createDIDState.isSuccess && did}
          </GeneratedButton>
        </FlexColumn>
      </Grid2Col>
      <ResolveDIDIPFS />
    </FlexColumn>
    <Footer />
    </FlexColumn>
  )
}

const ResolveDIDIPFS = () => {
  const [inputDID, setInputDID] = useState('');
  const [opened, { open, close }] = useDisclosure(false);
  const { didPointers, getDidPointers_Contract } = useReadDIDPointers();

  const onHandleResolve = async () => {
    if (inputDID.length === 0) return;
    else {
      await getDidPointers_Contract(inputDID);
    }
  }

  const { onResolveIPFS, didDoc } = useResolveDIDIpfs()

  useEffect(() => {
    if (didPointers && didPointers.exists) {
      onResolveIPFS(didPointers.ipfsCID).then(() => {
        open();
      });
    }
  }, [didPointers]);
  return (
      <>
      <FlexColumn className="p-12 bg-white w-full justify-center items-center
        border-t border-gray-400
      ">
        <Text className="font-bold text-3xl">
          Resolve your uDID
        </Text>
        <FlexRow className="gap-3 mt-6 max-w-[453px] w-full">
          <StyledInput placeholder="Enter your uDID"
            value={inputDID}
            onChange={(e) => setInputDID(e.target.value)}
          />
          <DefaultButton
            onClick={onHandleResolve}
          >Resolve</DefaultButton>
        </FlexRow>
        <div className="mt-3 h-[30px]">
          {didPointers && didPointers.exists ? 
            <Text
              className="cursor-pointer text-blue-400"
            >{didPointers.ipfsCID}</Text> :
            <Text
              className="text-red-400"
            >uDID not found</Text>
          }
        </div>
        <FlexColumn className="mt-4 justify-center items-center">
          <Text className="font-bold text-lg">
            or you can try this example uDID:
          </Text>
          <Text className="cursor-pointer text-blue-400"
            onClick={() => setInputDID('did:uminai:19143aff-270f-4ac2-be1b-6cb5240dd6ea')}
          >
            did:uminai:19143aff-270f-4ac2-be1b-6cb5240dd6ea
          </Text>
        </FlexColumn>
      </FlexColumn>
      <>
        <Modal opened={opened} onClose={close} title="Authentication"
          size={'lg'}
          centered={true}
        >
          {/* Modal content */}
          <RawFileJsonBox>
            <JsonView data={didDoc} style={defaultStyles} shouldExpandNode={allExpanded} />
          </RawFileJsonBox>
        </Modal>
      </>
      </>
  )
}

const RawFileJsonBox = styled.div`
  background-color: #f8fafc;
  border-radius: 8px;
  max-height: 500px;
  overflow-y: scroll;
`

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

const StyledInput = styled.input`
  padding: 8px 24px;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  font-size: 1rem;
  width: 100%;
`