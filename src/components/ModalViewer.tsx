import useGetChannelList, { ChannelInfo } from "@ap/hooks/useGetChannelList";
import { Divider, Image as MImage } from '@mantine/core';
import { useEffect, useState } from "react";
import styled from "styled-components";
import { WhatsIncludedIconSearch, whatsIncludedText } from "./WhatsIncludedSearch";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
`;

const InternalWrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 2fr 8fr;
`;

const CategorySelector = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryButton = styled.button<{ isactive?: boolean }>`
  // background-color: rgb(240 240 240/1);
  background-color: ${({ isactive }) => isactive ? 'rgb(240 240 240/1)' : 'transparent'};
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  // border: 1px solid #dcdcdc;
`;

const WrapperForGrid = styled.div`
  width: 100%;
  min-height: 500px;
  max-height: 500px;
  
  overflow-y: scroll;
  background-color: #f1f1f1;
  padding: 8px 16px;
  border-radius: 16px;
`;
const ChildGridChannelViewer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // height: 500px;
  grid-row-gap: 16px;
`;

const ChannelChildCard = styled.div`
  max-width: 230px;
  max-height: 50px;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  align-items: center;
  gap: 0px;
`;

const ChannelChildCardDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  // gap: 8px;
`;
const ModalViewer = ({
  apps,
  channels
}: {
  apps: string[],
  channels: string[]
}) => {
  const { loadChannels } = useGetChannelList({
    channels: channels
  })

  const [currentCategory, setCurrentCategory] = useState<ChannelInfo | undefined>(undefined);

  useEffect(() => {
    if (loadChannels) {
      setCurrentCategory(loadChannels[0])
    }
  }, [loadChannels])

  return (
    <Wrapper>
      {/* {Object.values(data).map((item: any, index: number) => (
        <div>
          {item.subtitle}
        </div>
      ))} */}
      <InternalWrapper>
        <CategorySelector>
          {loadChannels?.map((channelInfo, index) => (
            <CategoryButton key={index} onClick={() => setCurrentCategory(channelInfo)} isactive={currentCategory?.category === channelInfo.category}>
              <WhatsIncludedIconSearch size={32} channel={channelInfo.category} />
              {whatsIncludedText({
                channel: channelInfo.category
              })}
              {/* <span className="font-bold">{channelInfo.allChannels.length} Channels</span> */}
            </CategoryButton>
          ))}
        </CategorySelector>
        <WrapperForGrid>
        <span className="font-bold">{currentCategory?.allChannels.length} Channels</span>
        <Divider color="#e6007d" className="mt-1 mb-2"/>
        <ChildGridChannelViewer>
          {currentCategory?.allChannels?.map((channelInfo, index) => (
              <ChannelChildCard key={index} className="flex">
                <MImage w={70} src={channelInfo.imageUrl} alt="channeler" />
                <ChannelChildCardDesc>
                  <span className="text-md font-bold">{channelInfo.subtitle}</span>
                  <span className="max-w-[130px] overflow-hidden whitespace-nowrap text-ellipsis">{channelInfo.title}</span>
                </ChannelChildCardDesc>
              </ChannelChildCard>
          ))}
        </ChildGridChannelViewer>
        </WrapperForGrid>
      </InternalWrapper>
    </Wrapper>
  )
}

export default ModalViewer;