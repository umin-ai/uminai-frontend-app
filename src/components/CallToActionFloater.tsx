'use client';

import Image from "next/image";
import styled from "styled-components";

const FloaterRightBottom = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 5;
  background-color: #000;
  padding: 16px 20px;
  border-radius: 12px;
  span {
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 700;

    &.dull {
      color: #919191;
    }
  }

  .mobile-area {
    display: flex;
    align-items: center;
    width: 100%;
    top: -25%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .boxed {
      color: #fff;
      background-color: #000;
      padding: 0px;
      border-radius: 12px;
      border: 2px solid #FFF;
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    right: 2.5%;
    bottom: 2%;
    flex-direction: row;
    justify-content: center;
    // position: 
    .title {
      display: none;
    }

    .onlydesktop {
      display: none;
    }

    .mobile-area {
      display: flex;
      align-items: center;
      position: absolute;
      width: 100%;
      top: -25%;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .boxed {
        color: #fff;
        background-color: #000;
        padding: 10px 20px;
        border-radius: 12px;
        border: 2px solid #FFF;
      }
    }
  }
`;

const ContentFlex = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  cursor: pointer;

`;

const ContentImg = styled(Image)``;

const MidImg = styled(Image)`
  max-width: 120px;
  background-color: #000;
  padding: 0px;

  // border: 1px solid #FFF;
  @media (max-width: 768px) {
    max-width: 150px;
    padding: 10px 20px;
    border-radius: 8px 8px 0 0;
  }
`;

export default function CallToActionFloater() {
  return (
    <FloaterRightBottom>
      <div className="mobile-area">
        <span className="onlydesktop">Get</span>
        <MidImg src={"/images/hodl100k.png"} alt='hodl100k' width={333} height={30} />
      </div>
      <ContentFlex>
        <ContentImg src="/images/PUMPFUN.png" alt='pump.fun' width={30} height={30} />
        <span>Pump.fun</span>
      </ContentFlex>
      <ContentFlex>
        <ContentImg src="/images/RAYDIUM.png" alt='raydium' width={30} height={30} />
        <span className="dull">Raydium</span>
      </ContentFlex>
    </FloaterRightBottom>
  );
}