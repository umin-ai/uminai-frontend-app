'use client';

import usePromotions, { PromotionInfo } from "@ap/hooks/usePromotions";
import { Divider, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 16px;
  min-height: 780px;
`;

const WrapperInternal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
  // justify-content: center;
`;

const StyledText = styled.span`
  font-size: 24px;
  font-weight: 800;
  // padding: 16px 0px;
  line-height: 1;
`;

export default function Promotions() {
  const { promotions } = usePromotions();
  return (
    <Wrapper>
      <WrapperInternal>
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
  justify-content: center;
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
  padding-top: 4px;
  padding-bottom: 12px;
  background-color: rgb(246 246 248/1);
  gap: 8px;
  border-radius: 12px;
  margin-top: 12px;
`;

interface ICardProps extends PromotionInfo {
}
const Card = (
  { priority, title, packageInfo, description, price, originalPrice, iconUrl }: ICardProps
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
        <BigImage src='/images/acm-pack-primarypack.jpg'
          width={300} height={0} alt="astro.com.my"
        />
        {/* <BigImageFilter /> */}
      </BigImageArea>
      <Modal
        opened={opened}
        onClose={close}
        title="Primary Pack"
        size="md"
        padding="md"
      />

      <SeeAllChannels>
        <ClickableText onClick={open}>See all channels</ClickableText>
        <WhatsIncluded>
          <WhatsIncludedIcon src='/images/astro-go-256.png'
            width={100} height={0} alt="astro.com.my"
          />
          <WhatsIncludedIcon src='/images/icon_base.png'
            width={100} height={0} alt="astro.com.my"
          />
        </WhatsIncluded>
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

const useGetChannels = () => {
  const [channels, setChannels] = useState<{} | null>(null);
  const onGetChannels = async () => {
    try {
      const result = await fetch('https://contenthub-api.eco.astro.com.my/channel/min.json');
      const data = await result.json();
      const { response } = data;
      setChannels(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!channels)
      onGetChannels();
}, []);

  return {
    channels
  }
}