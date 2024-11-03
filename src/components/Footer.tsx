'use client';

import Script from "next/script";
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
          <Script src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" />
          <div className="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="67265e7b87d79fb6e7319cbe" data-style-height="52px" data-style-width="100%">
            <a href="https://www.trustpilot.com/review/astro-promotions.com" target="_blank" rel="noopener">Trustpilot</a>
          </div>
          <span>Contact Sales</span>
          <span>Astro Promotions Sales</span>
          <span>Sales: +6018-3991009</span>
          <span>(Monday to Friday: 9:30pm - 5:30pm)</span>
        </Column>
      </ColumnArea>
    </Wrapper>
  )
}