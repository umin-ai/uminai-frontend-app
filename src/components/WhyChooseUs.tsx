'use client';

import Image from "next/image";
import styled from "styled-components";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import '@mantine/carousel/styles.css';
import { Image as MImage } from '@mantine/core';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  // text-align: center;
  align-items: center;
  justify-content: center;
  // background-color: red;
  padding: 16px 16px 0px 16px;

  @media (max-width: 768px) {
    align-items: end;
    justify-content: center;
  }
`;

const InternalWrapper = styled.div`
  width: 100%;
  height: 300px;
  max-width: 1200px;
  min-height: 300px;
  display: grid;
  // flex-direction: row;
  grid-template-columns: 2fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0px;
    min-height: unset;
    height: unset;
  }
  place-items: center;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-radius: 32px;
  border: 1px solid #dcdcdc;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  background-color: white;
`;
const BgImage = styled(Image)`
  // object-fit: cover;
  width: 100%;
  max-width: 500px;
  border-left: 1px solid #dcdcdc;
`;

const PromotedDescription = styled.div`
  width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-self: center;
  justify-content: start;
  padding: 16px;
`;
const BigTitleArea = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const UnfocusedText = styled.span`
  font-size: 28px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const UnfocusedTextV2 = styled.span`
  font-size: 40px;
  font-weight: 700;
  line-height: 1em;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const FocusedText = styled.span`
  font-size: 32px;
  font-weight: 900;
  background-image: linear-gradient(135deg,#e6007d,#e72f3b);
  color: transparent;
  background-clip: text;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ClickHereButton = styled.button`
  width: 80%;
  padding: 8px;
  border-radius: 12px;
  background-image: linear-gradient(135deg,#e6007d,#e72f3b);
  color: white;
  cursor: pointer;
  max-width: 490.19px;
`;

const WavesAbsolute = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: -2px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  display: flex;
  justify-content: end;
  align-items: end;

  @media (max-width: 768px) {
    margin-bottom: -2px;
  }
`;

export default function WhyChooseUs() {
  return (
    <Wrapper id='why'>
      <WavesAbsolute id='waves'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00075e" fill-opacity="1" d="M0,64L21.8,85.3C43.6,107,87,149,131,144C174.5,139,218,85,262,106.7C305.5,128,349,224,393,250.7C436.4,277,480,235,524,218.7C567.3,203,611,213,655,202.7C698.2,192,742,160,785,170.7C829.1,181,873,235,916,234.7C960,235,1004,181,1047,176C1090.9,171,1135,213,1178,208C1221.8,203,1265,149,1309,138.7C1352.7,128,1396,160,1418,176L1440,192L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
      </WavesAbsolute>
      <InternalWrapper>
        <PromotedDescription>
          <BigTitleArea>
            <UnfocusedText>LIMITED TIME:</UnfocusedText>
            <FocusedText>JUALAN JIMAT BESAR</FocusedText>
          </BigTitleArea>
          <div className="flex flex-row items-end">
          <span className="font-[700] text-lg underline">
            Primary Pack&nbsp;
          </span>
          <span>
            at only&nbsp;
          </span>
          <UnfocusedTextV2>RM41.99/month</UnfocusedTextV2>
          </div>
          <ClickHereButton className="mt-3">Get now!</ClickHereButton>
        </PromotedDescription>
        {/* <div className="min-w-[500px] max-w-[500px] flex w-full"> */}
          <CarouselViewer/>
        {/* </div> */}
        {/* <BgImage src="/images/jualan-besar-astro-malaysia-promosi-v2.jpg" alt="astro.com.my" width={1920} height={0} /> */}
      </InternalWrapper>
    </Wrapper>
  )
}

const CarouselViewer = () => {
  const autoplay = useRef(Autoplay({ delay: 10000 }));
  return (
    <Carousel
      withIndicators
      height={'100%'}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      style={{ borderLeft: '1px solid #dcdcdc' }}
    >
      <Carousel.Slide>
      {/* <BgImage src="/images/jualan-besar-astro-malaysia-promosi-v2.jpg" alt="astro.com.my" width={394} height={300} /> */}
        <MImage src="/images/astro-landing-394-300.png" alt="astro-promotions.com curated movie 394px-300px"/>
      </Carousel.Slide>
      <Carousel.Slide>
        <MImage src="/images/watch-on-all-devices.png" alt="astro-promotions.com astro go devices 394px-300px"/>
      </Carousel.Slide>
      <Carousel.Slide>
        <MImage src="/images/watch-premium-channels.png" alt="astro-promotions.com watch premium channels 394px-300px"/>
      </Carousel.Slide>
    </Carousel>
  )
}