'use client';

import useGetAllOtherPacks from "@ap/hooks/useGetAllOtherPacks";
import usePromotions, { PromotionInfo } from "@ap/hooks/usePromotions";
import { Divider, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { WhatsIncludedIconSearch } from "./WhatsIncludedSearch";
import ModalViewer from "./ModalViewer";
import CustomModal from "./CustomModal";

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 16px;
  display: flex;
  justify-content: center;
  // min-height: 880px;
  // height: 100%;
  position: relative;
  padding-top: 60px;
  padding-bottom: 120px;
`;

const WrapperInternal = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  border-radius: 32px;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
  overflow: hidden;
  // opacity: 0.9;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  // justify-content: center;
`;

const StyledText = styled.span`
  font-size: 24px;
  font-weight: 800;
  // padding: 16px 0px;
  line-height: 1;
`;

const CardGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  // gap: 16px;
  justify-items: center;
  align-items: center;
  column-gap: 32px;
  row-gap: 62px;
`;

const AbsoluteImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  flex-direction: column;
  // gap: 120px;
  justify-content: space-between;
  top: 0;
  left: 0;
`;
export default function AllOtherPacks() {
  const { tvpacks } = useGetAllOtherPacks();
  return (
    <Wrapper id="astro-packages">
      <AbsoluteImage>
        <Image src="/images/astro-packs1.png" alt="astro.com.my" width={1920} height={1080} />
        <Image src="/images/astro-packs-mid2.png" alt="astro.com.my" width={1920} height={1080} />
        <Image src="/images/astro-packs2.png" alt="astro.com.my" width={1920} height={1080} />
      </AbsoluteImage>
      <WrapperInternal>
        <StyledText>Astro Plus Pack</StyledText>

        <CardGrid className="mt-6">
          {tvpacks.map((tvpack, index) => (
            <Card
              key={index}
              {...tvpack}
            />
          ))}

        </CardGrid>
      </WrapperInternal>
    </Wrapper>
  )

}

const StyledCard = styled.div`
  justify-self: center;
  width: 100%;
  max-width: 330px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  border-radius: 36px;
  align-items: center;
  justify-content: center;
  padding-bottom: 16px;
  // overflow: hidden;
  background-color: #fff;
  position: relative; // Set to relative to contain the ::before element

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 36px;
    padding: 2px;
    background: linear-gradient(
      90deg,
      #e6007d,
      #FEBF0E,
      #e6007d,
      #FEBF0E
    );
    background-size: 300% 100%;
    animation: gradientSlide 5s linear infinite;
    z-index: -1;
  }

  @keyframes gradientSlide {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 36px;
  gap: 8px;
  overflow: hidden;
`;

const IconImage = styled(Image)`
  border-radius: 8px;
  width: 32px;
  height: auto;
  justify-self: center;
  padding: 16px 0px;
`;

const DescriptionArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 8px 16px;
  height: 120px;
  max-height: 120px;
`;

const WhatsIncluded = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  // padding: 16px;
  gap: 8px;
`;

const WhatsIncludedIcon = styled(Image)`
  border-radius: 8px;
  width: 40px;
  height: auto;
  justify-self: center;
  // padding: 16px 0px;
  border: 1px solid #dcdcdc;
`;

const BigImageArea = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BigImage = styled(Image)`
  // border-radius: 8px;
  width: 100%;
  height: auto;
  justify-self: center;
  // hover to zoom
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const BigImageFilter = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const ClickableText = styled.span`
  color: rgb(230 0 125 / 1);
  cursor: pointer;
`;

const IWantButton = styled.button`
  width: 80%;
  padding: 8px;
  border-radius: 12px;
  background-color: rgb(230 0 125 / 1);
  color: white;
  cursor: pointer;
`;

const SeeAllChannels = styled.div`
  display: flex;
  width: 92%;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
  padding: 12px 10px;
  padding-bottom: 12px;
  background-color: rgb(246 246 248/1);
  gap: 8px;
  border-radius: 12px;
  margin-top: 12px;
`;

const ScrollableArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 8px;
  overflow-x: scroll;
  scrollbar-width: thin; /* Uses a thin scrollbar in Firefox */
  scrollbar-color: #d4d4d4 transparent;

  /* For WebKit-based browsers (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    width: 6px; /* Increase width slightly for visibility */
    height: 6px; /* Adjust height for horizontal scrollbars, if any */
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    // background-color: #e5e7eb;
    border-radius: 32px;
    border: 2px solid transparent; /* Add some padding around for better visuals */
    background-clip: content-box; /* Prevents the border color from overlaying */
  }
`;

interface ICardProps extends PromotionInfo {
}
const Card = (
  { priority, title, bigImage, packageInfo, description, price, originalPrice, iconUrl, supportedApps, supportedChannels }: ICardProps
) => {
  // const { channels } = useGetChannels();
  // console.log(channels);

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <StyledCard>
      <CardHeader>
        <IconImage src={iconUrl || '/images/home-card-primary.png'}
          alt={`astro promotion - ${title}`} width={100} height={0}
        />
        <span className="text-lg font-bold text-neutral-800">{title}</span>
      </CardHeader>
      <Divider color="red" w={'100%'}/>
      <DescriptionArea>
        <span className="text-lg font-bold text-neutral-800">
          {packageInfo}
        </span>
        <span className="text-center mt-1">
          {description}
        </span>
      </DescriptionArea>
      <BigImageArea>
        <BigImage src={bigImage ? bigImage : '/images/acm-pack-primarypack.jpg'}
          width={300} height={0} alt="astro.com.my"
        />
        {/* <BigImageFilter /> */}
      </BigImageArea>

      <CustomModal
        centered
        opened={opened}
        onClose={close}
        title={<span className="w-full ml-1 font-bold">{title}</span>}
        size="80%"
        radius={'22px'}
        padding="md"
        w={'100%'}
        className="w-full z-50"
      >
        <ModalViewer apps={supportedApps} channels={supportedChannels} />
      </CustomModal>

      <SeeAllChannels>
        <WhatsIncluded>
          <span className="min-w-[62px] font-bold">App</span>
          <ScrollableArea>
            {supportedApps.map((app, index) => (
              <WhatsIncludedIconSearch key={index} channel={app} />
            ))}
          </ScrollableArea>
        </WhatsIncluded>
        <WhatsIncluded>
          <span className="font-bold">Channel</span>
          <ScrollableArea>
          {supportedChannels.map((channel, index) => (
              <WhatsIncludedIconSearch key={index} channel={channel} />
          ))}
          </ScrollableArea>
        </WhatsIncluded>
        <ClickableText onClick={open}>See all channels</ClickableText>
      </SeeAllChannels>

      <Divider className="my-2" color="red" w={'100%'}/>
      <div className="font-extrabold">
        <span className="text-2xl">RM{price}</span>
        <span>/month</span>
        {originalPrice > 0 && (
        <span className="ml-1.5 text-sm font-normal text-neutral-400">
          <s>RM{originalPrice}</s>
        </span>
        )}
      </div>

      <IWantButton className="mt-2">Get now</IWantButton>

    </StyledCard>
  )
}