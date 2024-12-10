'use client';

import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  background-color: #000;
  color: #fff;
`;
export default function FooterArea() {
  return (
    <FooterWrapper>
      DISCLAIMER: By purchasing $STANLEY coin, you acknowledge that you are not acquiring a security, an investment contract, or a product affiliated with its original creator. $STANLEY is a community-driven DeFi ecosystem with no direct connection to the original creator. You agree to hold the team harmless and waive any liability for potential losses or taxes incurred. Always ensure compliance with your local laws and regulations before making a purchase.
    </FooterWrapper>
  )
}