'use client';

import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  background-color: rgb(51 51 51/1);
  color: #fff;
`;

const ColumnArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
export default function Footer() {
  return (
    <Wrapper>
      <ColumnArea>
        <Column>
          <span>Contact Sales</span>
          <span>Astro Promotions Sales</span>
          <span>Sales: +6018-3991009</span>
          <span>(Monday to Friday: 9:30pm - 5:30pm)</span>
        </Column>
      </ColumnArea>
    </Wrapper>
  )
}