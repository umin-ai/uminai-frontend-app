import Image from "next/image";
import styled from "styled-components";

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // width: 100%;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media (max-width: 768px) {
    overflow: scroll;
    padding: 8px 16px;
    max-width: 95%;
    align-items: start;
    justify-content: start;
  }
`;

const CustomerCardReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  max-width: 310px;
  min-width: 310px;
  width: 100%;
`;

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 28px;
  margin-top: 54px;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
const CImage = styled(Image)``;

const BorderedBox = styled.div`
  width: 100%;
  padding: 8px 16px;
  border-radius: 12px;
  // border: 1px solid #e6007d;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6007d;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0);
  color: #fff;
  font-weight: bold;
`;
export default function WhatOurCustomersSaying (){

  return (
    <OuterWrapper>
      <span className="text-2xl font-bold">What our customers are saying</span>
      <RowWrapper>
        <CustomerCardReview>
          <div className="flex items-center justify-between w-full">
            <span className="text-lg font-bold">Nathan Lai</span>
            <CImage src='/icons/tick-icon.png' alt='review-astro-promotions.com' width={30} height={0}/>
          </div>
          <BorderedBox>Entertainment Pack</BorderedBox>
          <span >
            Astro-promotions team been serving my household for the past years. Quick setup from the team and they make it easy for us!
          </span>
        </CustomerCardReview>
        <CustomerCardReview>
          <div className="flex items-center justify-between w-full">
            <span className="text-lg font-bold">Jasmine Fong</span>
            <CImage src='/icons/tick-icon.png' alt='review-astro-promotions.com' width={30} height={0}/>
          </div>
          <BorderedBox>Primary Pack</BorderedBox>
          <span >
            First time subscribing to astro, the reseller is very helpful and patient in explaining the packages to me. Highly recommended!
          </span>
        </CustomerCardReview>
        <CustomerCardReview>
          <div className="flex items-center justify-between w-full">
            <span className="text-lg font-bold">Hasrul B.</span>
            <CImage src='/icons/tick-icon.png' alt='review-astro-promotions.com' width={30} height={0}/>
          </div>
          <BorderedBox>Sports Plus Pack</BorderedBox>
          <span>
            Servis cepat dan pantas. Terima kasih kerana membantu saya mendapatkan pakej astro sports yang saya mahu
          </span>
        </CustomerCardReview>
      </RowWrapper>
    </OuterWrapper>
  )
}