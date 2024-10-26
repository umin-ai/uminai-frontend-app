'use client';

import Image from "next/image";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: transparent;
  padding: 16px;
  z-index: 1000;
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 70.02px;
  max-height: 70.02px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
`;

const ImageCustom = styled(Image)`
  border-radius: 8px;
  width: 200px;
  height: auto;
  justify-self: center;
  padding: 16px 0px;
`;
const ListGoTo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 56px;
  color: #fff;

  span {
    cursor: pointer;
  }

  background-image: linear-gradient(135deg,#e6007d,#e72f3b);
`

export default function Header() {
  return (
    <HeaderWrapper>
      <StyledHeader>
        <ImageCustom src='/images/astro-reseller.png' alt="astro.com.my" width={300} height={0}/>
        <ListGoTo>
          <span>Promotions</span>
          <span>Astro Packages</span>
          <span>Contact</span>
        </ListGoTo>
      </StyledHeader>
    </HeaderWrapper>
  )
}