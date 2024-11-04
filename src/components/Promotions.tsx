'use client';

import usePromotions, { PromotionInfo } from "@ap/hooks/usePromotions";
import { Divider, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import ModalViewer from "./ModalViewer";
import CustomModal from "./CustomModal";
import { Image as MImage } from '@mantine/core';
import { WhatsIncludedIconSearch } from "./WhatsIncludedSearch";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 16px;
  min-height: 850px;
  position: relative;
  padding-top: 32px;
`;

const WrapperInternal = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  border-radius: 32px;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
  overflow: hidden;
  // justify-content: center;
`;

const StyledText = styled.span`
  font-size: 24px;
  font-weight: 800;
  // padding: 16px 0px;
  line-height: 1;
`;

const AbsoluteBackImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const BadgePlacement = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 32px;
  display: flex;
  gap: 8px;
`;
export default function Promotions() {
  const { promotions } = usePromotions();
    // const { channels } = useGetChannels();
    // console.log(channels);
  return (
    <Wrapper id="promotions">
      <AbsoluteBackImage>
        <MImage className="w-full max-w-[1896px]" src="/images/drop-back-p1.png" alt="backimage" />
      </AbsoluteBackImage>
      <WrapperInternal>
        <BadgePlacement>
          <MImage src="/icons/badge-hot.png" alt='astro-hot-deals' />
          <MImage src="/icons/badge-limited.png" alt='astro-limited-deals' />
        </BadgePlacement>
        <StyledText>Astro Promotions</StyledText>
        <span className="mb-6 mt-5 text-lg font-semibold">Enjoy <span className="font-extrabold text-2xl">30% OFF</span> on Primary, Entertainment and Movies Pack today. Limited Time Only!</span>

        <div className="w-full flex flex-row items-center justify-center gap-12">
          {promotions.map((promotion, index) => (
            <Card
              key={index}
              {...promotion}
            />
          ))}

        </div>
      </WrapperInternal>
    </Wrapper>
  )
}

const StyledCard = styled.div`
  width: 100%;
  max-width: 330px;

  height: 100%;

  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  // background-color: red;
  border-radius: 36px;
  align-items: center;
  justify-content: center;
  padding-bottom: 16px;
  overflow: hidden;

  // hover to move up a bit
  transition: transform 0.2s;
  &:hover {
    transform: translateY(8px);
  }
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
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
          <span className="min-w-[62px]">App</span>
          {supportedApps.map((app, index) => (
            <WhatsIncludedIconSearch key={index} channel={app} />
          ))}
        </WhatsIncluded>
        <WhatsIncluded>
          <span>Channel</span>
          {supportedChannels.map((channel, index) => (
            <WhatsIncludedIconSearch key={index} channel={channel} />
          ))}
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

const BASE_CHANNELS = ['CH101', 'CH102', 'CH103', 'CH104', 'CH105', 'CH106', 'CH107', 'CH108', 'CH114', 'CH116', 
  'CH122', 'CH146', 'CH147', 'CH148', 'CH149', 'CH201', 'CH202', 'CH203', 'CH221', 'CH222', 
  'CH223', 'CH300', 'CH305', 'CH306', 'CH308', 'CH309', 'CH310', 'CH311', 'CH316', 'CH317', 
  'CH319', 'CH320', 'CH321', 'CH325', 'CH326', 'CH333', 'CH335', 'CH392', 'CH393', 'CH398', 
  'CH110', 'CH501', 'CH502', 'CH503', 'CH549', 'CH550', 'CH603', 'CH611', 'CH701', 'CH703', 
  'CH706', 'CH707', 'CH708', 'CH709', 'CH712', 'CH801', 'CH802', 'CH803', 'CH804', 'CH852', 
  'CH853', 'CH854', 'CH855', 'CH856', 'CH857', 'CH858', 'CH859', 'CH860', 'CH861', 'CH862', 
  'CH863', 'CH864', 'CH865', 'CH866', 'CH867', 'CH868', 'CH869', 'CH870', 'CH871', 'CH872', 
  'CH873', 'CH874', 'CH875', 'CH876', 'CH877']
 

// const useGetChannels = () => {
//   const [channels, setChannels] = useState<{} | null>(null);
//   const onGetChannels = async () => {
//     try {
//       const result = await fetch('https://contenthub-api.eco.astro.com.my/channel/min.json');
//       const data = await result.json();
//       const { response } = data;
//       const responseValues = Object.values(response).filter((c: any) => BASE_CHANNELS.includes(c.subtitle));
//       setChannels(responseValues);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     if (!channels)
//       onGetChannels();
// }, []);

//   return {
//     channels
//   }
// }