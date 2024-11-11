'use client';

import Image from "next/image";
import Script from "next/script";
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  background-color: rgb(51 51 51/1);
  color: #fff;
  padding: 22px 48px;
  margin-top: 32px;
`;

const ColumnArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    #show-border {
      border-left: 0px solid #fff !important;
      border-bottom: 1px solid #fff;
    }
    #show-border-mobile {
      border-bottom: 1px solid #fff !important;
    }

    grid-gap: 16px;
  }
  #show-border {
    border-left: 1px solid #fff;
  }
`;

const Column = styled.div`
  width: 100%;
  align-items: start;
  justify-self: start;
  padding-left: 12px;
  // min-width: 300px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-left: 0px;
    padding-bottom: 16px;
  }

  gap: 8px;

`;

const FocusedText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const MainText = styled.span`
  // color: #e6007d;
  font-size: 18px;
  font-weight: 500;
`;

const CopyrightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  border-top: 1px solid #fff;
  padding-top: 16px;

  @media (max-width: 768px) {
    border-top: 0px solid #fff;
    text-align: center;
  }
`;
export default function Footer() {
  return (
    <Wrapper id='contactus'>
      <ColumnArea>
        <Column id="show-border-mobile">
          <FocusedText>Contact Sales</FocusedText>
          <MainText>Astro Promotions Sales</MainText>
          <MainText>Sales (Whatsapp): +012-880 0015</MainText>
          <FocusedText>Customer Support</FocusedText>
          <MainText>Dial: +603 95433838</MainText>
        </Column>
        <Column id='show-border'>
          <FocusedText>Emails</FocusedText>
          <MainText>sales@astro-promotions.com</MainText>
          <MainText>admin@astro-promotions.com</MainText>
        </Column>
        <Column id='show-border'>
          <FocusedText>Official Link</FocusedText>
          <MainText>www.astro-promotions.com</MainText>
          <FocusedText>(Monday to Friday: 9:30pm - 5:30pm)</FocusedText>
          <div className="max-w-[160px] bg-white py-3 px-4 rounded-xl">
            <Image src='/images/astro-reseller.png' alt="astro.com.my" width={300} height={0} />
          </div>
        </Column>
      </ColumnArea>
      <CopyrightSection>
        Copyright © 2024 | Astro Promotions Authorized Reseller
      </CopyrightSection>
    </Wrapper>
  )
}