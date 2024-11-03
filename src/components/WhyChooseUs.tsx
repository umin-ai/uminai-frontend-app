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
  padding: 16px;
`;

const InternalWrapper = styled.div`
  width: 100%;
  height: 300px;
  max-width: 1200px;
  min-height: 300px;
  display: grid;
  // flex-direction: row;
  grid-template-columns: 2fr 1fr;
  place-items: center;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border-radius: 32px;
  border: 1px solid #dcdcdc;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4)
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
`;

const UnfocusedTextV2 = styled.span`
  font-size: 40px;
  font-weight: 700;
  line-height: 1em;
`;

const FocusedText = styled.span`
  font-size: 32px;
  font-weight: 900;
  background-image: linear-gradient(135deg,#e6007d,#e72f3b);
  color: transparent;
  background-clip: text;
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

export default function WhyChooseUs() {
  return (
    <Wrapper>
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