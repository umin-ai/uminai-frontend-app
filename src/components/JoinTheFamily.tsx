'use client';

import Image from "next/image";
import styled from "styled-components";

const JoinTheFamilyWrapper = styled.div`
  min-height: 700px;
  height: 100%;
  background-color: #FFFBD2;
  padding-top: 48px;
`;

const FlexColumnArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const BigTitle = styled.span`
  font-size: 48px;
  font-weight: 700;
  color: #73562C;
`;
const SmallTitle = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: #73562C;
`;
const RowSocials = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 48px;
  width: 100%;
  justify-content: center;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  span {
    font-size: 28px;
    font-weight: 700;
    color: #73562C;
  }
`;
const CircleSocial = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
  border: 4px solid #73562C;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialImg = styled(Image)``;

const SupportTheCreator = styled.div`
  margin-top: 48px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 32px;
    font-weight: 700;
    color: #73562C;
  }
`;
export default function JoinTheFamily() {

  return (
    <JoinTheFamilyWrapper>
      <FlexColumnArea>
        <BigTitle>Be part of Stanley Community!</BigTitle>
        <SmallTitle>Embrace the Pawsitive Vibes and Connect with everyone on crypto space</SmallTitle>
      </FlexColumnArea>
      <RowSocials>
        <SocialWrapper>
          <CircleSocial>
            <SocialImg src='/images/x.png' alt='x' width={50} height={0}/>
          </CircleSocial>
          <span>Twitter</span>
        </SocialWrapper>
        <SocialWrapper>
          <CircleSocial>
            <SocialImg src='/images/telegram.png' alt='x' width={50} height={0}/>
          </CircleSocial>
          <span>Telegram</span>
        </SocialWrapper>
      </RowSocials>
      <SupportTheCreator>
        <span>Support The Stanley Creator!</span>
        <SocialWrapper>
          <CircleSocial>
            <SocialImg src='/images/tiktok.png' alt='x' width={50} height={0}/>
          </CircleSocial>
          <span>TikTok</span>
        </SocialWrapper>
      </SupportTheCreator>
    </JoinTheFamilyWrapper>
  )
}