'use client';
import Image from "next/image";
import styled from "styled-components"

const MainFixer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
`;
const LeftSiderWrapper = styled.div`
  // width: 25%;
  width: 100%;
  max-width: 339px;
  height: 100%;
  background-color: #E7AE35;
  display: flex;
  flex-direction: column;
  padding: 12px;
  position: relative;
  pointer-events: all;

  @media (max-width: 768px) {
    max-width: 100px;

    span {
      font-size: 12px;
      line-height: 14px;
      font-weight: 900;
    }
  }
`;

const RightSiderWrapper = styled.div`
  width: 100%;
  max-width: 84px;
  height: 100%;
  background-color: #E7AE35;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: all;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MImage = styled(Image)`
  max-width: 90px;
  height: auto;
`;

const ImagePlacement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 2%;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 339px;
  height: 100%;
`;

const ImagePlacement2 = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 339px;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IImage = styled(Image)`
  max-width: 40px;
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const FlexIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  margin-top: 20px;
`;
export const Siders = () => {
  return (
    <MainFixer>
      <LeftSiderWrapper className="lefter">
        <span className="font-black text-xl text-black">OFFICIAL HODL100K</span>
        <ImagePlacement>
          <MImage src="/images/rocket_big.png" alt='rocket' width={1920} height={0}/>
        </ImagePlacement>
        <ImagePlacement2>
          <MImage src="/images/MYLANDING.png" alt='rocket' width={33} height={0}/>
        </ImagePlacement2>
      </LeftSiderWrapper>
      <RightSiderWrapper className="righter">
        <span className="font-black text-xl text-black">LINK</span>
        <FlexIcons>
          <IImage
            onClick={() => window.open("https://t.me/PROJECT_HODL_TG", "_blank")}
            src="/icons/tg.png" alt='tg' width={84} height={84}/>
          <IImage
            onClick={() => window.open("https://x.com/HODL100K", "_blank")}
            src="/icons/x.png" alt='x' width={84} height={84}/>
        </FlexIcons>
      </RightSiderWrapper>
    </MainFixer>
  )
}