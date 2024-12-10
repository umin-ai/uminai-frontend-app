'use client';

import Image from "next/image";
import styled from "styled-components";

const HowToBuyRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background-color: #0F98D2;
`;

const AboutTextArea = styled.div`
  width: 600px;
  span {
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    // text-shadow: 0 2px 1px #000;
  }

  @media (max-width: 768px) {
    width: 300px;
    span {
      font-size: 22px;
    }
  }
`;

const DescriptionTextArea = styled.div`
  width: 800px;
  span {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    // text-shadow: 0 2px 1px #000;
  }

    @media (max-width: 768px) {
    width: 300px;
    span {
      font-size: 16px;
    }
  }
`;

const FlexRowTextInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const FlexColumnTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StanleyImgStep = styled(Image)`
  max-width: 100px;
  height: 100%;
  border-radius: 50%;

  @media (max-width: 768px) {
    max-width: 50px;
  }
`;


const ListedWrapper = styled(FlexColumnTextInfo)`
  padding-top: 48px;
  padding-bottom: 28px;
  background-color: #FFFBD2;
  align-items: center;
`;

const LaterStages = styled.div`
  span {
    color: #73562C;
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
  }

  @media (max-width: 768px) {
    span {
      font-size: 32px;
    }
  }
`;

const ListedImg = styled(Image)`
  // max-width: 200px;
  width: fit-content;
  height: 50px;

  @media (max-width: 768px) {
    height: unset;
    width: 155px;
  }
`;

const ToBeListedFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export default function HowToBuy() {
  return (
    <>
    <HowToBuyRoot>
      <FlexRowTextInfo>
        <FlexColumnTextInfo>
          <AboutTextArea>
            <span>How to Buy $STANLEY</span>
          </AboutTextArea>
          <FlexRowTextInfo>
            <StanleyImgStep src='/images/1.png' alt='1' width={300} height={0} />
            <DescriptionTextArea>
              <span>
                1. Getting your phantom or solflare wallet prepared
              </span>
            </DescriptionTextArea>
          </FlexRowTextInfo>
          <FlexRowTextInfo>
            <StanleyImgStep src='/images/2.png' alt='1' width={300} height={0} />
            <DescriptionTextArea>
              <span>
                2. To have some Solana available in your wallet
              </span>
            </DescriptionTextArea>
          </FlexRowTextInfo>
          <FlexRowTextInfo>
            <StanleyImgStep src='/images/3.png' alt='1' width={300} height={0} />
            <DescriptionTextArea>
              <span>
                3. Connect your wallet to Birdeye or Pump.Fun
              </span>
            </DescriptionTextArea>
          </FlexRowTextInfo>
          <FlexRowTextInfo>
            <StanleyImgStep src='/images/stanleyanim.gif' alt='1' width={300} height={0} />
            <DescriptionTextArea>
              <span>
                4. Swap Solana for $STANLEY
              </span>
            </DescriptionTextArea>
          </FlexRowTextInfo>
        </FlexColumnTextInfo>
      </FlexRowTextInfo>
    </HowToBuyRoot>
    <ListedWrapper>
      <LaterStages>
        <span>To be listed on:</span>
      </LaterStages>
      <ToBeListedFlex>
        <ListedImg src='/images/Coinbase.svg.png' alt='list1' width={300} height={0} />
        <ListedImg src='/images/Bybit-logo_(cropped).png' alt='list2' width={300} height={0} />
        <ListedImg src='/images/cmc.png' alt='list3' width={300} height={0} />
        <ListedImg src='/images/coingecko-1.svg' alt='list4' width={300} height={0} />
      </ToBeListedFlex>
    </ListedWrapper>
    </>
  )
}