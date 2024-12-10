'use client';

import Image from "next/image";
import styled from "styled-components";

const MidCardRoot = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(16, 213, 227, 0) 0%,          /* 0% of #10D5E3 at 0% opacity */
      rgba(0, 180, 238, 0.91) 50%,       /* 50% of #00B4EE at 91% opacity */
      rgba(22, 137, 197, 1) 100%         /* 100% of #1689C5 at 100% opacity */
  );
  padding-bottom: 50px;
`;
const MidCardWrapper = styled.div`

  margin-top: 150px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding: 0 84px;
  pointer-events: none;
  z-index: 3;
`;
const StanleyCardImg = styled(Image)`
  max-width: 700px;
`;
const TopGif = styled(Image)`
  margin-bottom: -20px;
`;

const Words = styled.div`
  margin-top: 20px;
  max-width: 700px;
  text-align: center;
  span {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 2px 1px #000;
  }
`

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const ButtonStyled = styled.button`
  padding: 5px 14px;
  background-color: transparent;
  color: #fff;
  border: 4px solid #fff;
  border-radius: 22px;
  cursor: pointer;
  font-size: 22px;
  font-weight: 700;
  text-shadow: 0px 2px 3px #000;
  transition: all 0.3s ease;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .25);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 8px rgba(0, 0, 0, .25);
  }
`;

export default function StanleyCardMid() {
  return (
    <MidCardRoot>
      <MidCardWrapper>
        <TopGif src='/images/stanleyanim.gif' alt='stanley-anim' width={250} height={0}/>
        <StanleyCardImg src='/images/StanleyLogoXL.png' alt='stanley-logo' width={1920} height={1080}/>
        <Words>
          <span>The No. 1 Twerking Cat, Riding on Robot Vacuum and Trick Shot Master</span>
        </Words>
      </MidCardWrapper>
      <ButtonArea>
        <ButtonStyled>Buy on Birdeye</ButtonStyled>
        <ButtonStyled>Buy on Pump.fun</ButtonStyled>
      </ButtonArea>
    </MidCardRoot>
  )
}