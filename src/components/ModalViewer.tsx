import useGetChannelList, { ChannelInfo } from "@ap/hooks/useGetChannelList";
import { Divider, Image as MImage, Select } from '@mantine/core';
import { useEffect, useState } from "react";
import styled from "styled-components";
import { WhatsIncludedIconSearch, whatsIncludedText } from "./WhatsIncludedSearch";
import useScreenType from "react-screentype-hook";

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
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  // height: 500px;
  grid-row-gap: 16px;
`;

const ChannelChildCard = styled.div`
  max-width: 230px;
  max-height: 50px;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  @media (max-width: 768px) {

    max-width: 220px;
    gap: 8px;
  }
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

const MImageCustom = styled(MImage)`
  @media (max-width: 768px) {
    min-width: 30px !important;
    max-width: 50px !important;
  }
`
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

  const screenType = useScreenType();

  const onChangeHandler = (value: string) => {
    const selectedCategory = loadChannels?.find((channelInfo) => channelInfo.category === value)
    setCurrentCategory(selectedCategory)
  } 
  return (
    <Wrapper>
      <InternalWrapper>
        {screenType.isMobile ?
          <Select 
            placeholder="Select a category"
            data={loadChannels?.map((channelInfo) => ({
              label: whatsIncludedText({channel: channelInfo.category}),
              value: channelInfo.category
            }))}
            value={currentCategory?.category}
            onChange={(_value, option) => onChangeHandler(option.value)}
          />
        :
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
        }

        <WrapperForGrid>
          {currentCategory && !currentCategory.isMultiPack ?
          <>
            <span className="font-bold">{currentCategory?.allChannels.length} Channels</span>
            <Divider color="#e6007d" className="mt-1 mb-2"/>
            <ChildGridChannelViewer>
              {currentCategory?.allChannels?.map((channelInfo, index) => (
                  <ChannelChildCard key={index} className="flex">
                    <MImageCustom w={70} src={channelInfo.imageUrl} alt="channeler" />
                    <ChannelChildCardDesc>
                      <span className="text-md font-bold">{channelInfo.subtitle}</span>
                      <span className="max-w-[130px] overflow-hidden whitespace-nowrap text-ellipsis">{channelInfo.title}</span>
                    </ChannelChildCardDesc>
                  </ChannelChildCard>
              ))}
            </ChildGridChannelViewer>
          </>
        : currentCategory && currentCategory.isMultiPack ?
          <>
           {/* <span>Multi Pack</span>
            <Divider color="#e6007d" className="mt-1 mb-2"/> */}
            {/* {currentCategory?.multiPackChannels} */}
            <div className="flex flex-col gap-5">
              {currentCategory.multiPackChannels?.map((c, index) => (
                <div key={index}>
                  <span className="font-bold">{c.type}</span>
                  <Divider color="#e6007d" className="mt-1 mb-2"/>
                  <ChildGridChannelViewer>
                    {c.allChannels.map((channelInfo, index) => (
                      <ChannelChildCard key={index} className="flex">
                        <MImage className="max-h-[50px]" w={70} src={channelInfo.imageUrl} alt="channeler" />
                        <ChannelChildCardDesc>
                          <span className="text-md font-bold">{channelInfo.subtitle}</span>
                          <span className="max-w-[130px] overflow-hidden whitespace-nowrap text-ellipsis">{channelInfo.title}</span>
                        </ChannelChildCardDesc>
                      </ChannelChildCard>
                    ))}
                  </ChildGridChannelViewer>
                </div>
              ))}
            </div>
          </>
        : <>Not found</>}

        </WrapperForGrid>
      </InternalWrapper>
    </Wrapper>
  )
}

export default ModalViewer;