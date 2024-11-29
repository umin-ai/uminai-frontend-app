'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const FloaterRightBottom2 = styled.div`


  @media (max-width: 768px) {
    position: fixed;
    bottom: 5%;
    right: 5%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 5;
    background-color: #000;
    padding: 6px 0px;
    // border-radius: 12px;
  }
  span {
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 700;

    &.dull {
      color: #919191;
    }
  }

  .mobile-area {
    display: flex;
    align-items: center;
    width: 100%;
    top: -25%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .boxed {
      color: #fff;
      background-color: #000;
      padding: 0px;
      border-radius: 12px;
      border: 2px solid #FFF;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    bottom: 22%;
    flex-direction: row;
    justify-content: center;
    // position: 
    .title {
      display: none;
    }

    .onlydesktop {
      display: none;
    }

    .mobile-area {
      display: flex;
      align-items: center;
      position: absolute;
      width: 100%;
      top: -25%;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .boxed {
        color: #fff;
        background-color: #000;
        padding: 10px 20px;
        // border-radius: 12px;
        border: 2px solid #FFF;
      }
    }
  }
`;

const ContentFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #E7AE35;
  padding: 10px 8px;
  border: 1px solid #E7AE35;

  span {
    color: #fff;
    
    font-size: 9px;
    letter-spacing: 2px;
    font-weight: 600;
  }
`;

const ContentImg = styled(Image)``;

const MidImg = styled(Image)`
  max-width: 120px;
  background-color: #000;
  padding: 0px;

  // border: 1px solid #FFF;
  @media (max-width: 768px) {
    max-width: 150px;
    padding: 10px 20px;
    border-radius: 8px 8px 0 0;
  }
`;

export default function CAFloater() {
  const [isCopied, setIsCopied] = useState(false);
  const onClickCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText("6AQW7Ed9rBRFrFZ1ivD7jcfcG9gtb3xYu1vCKwoJpump");
  }

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  } , [isCopied]);
  return (
    <FloaterRightBottom2>
      <ContentFlex onClick={onClickCopy}>
        {isCopied ? <span>Copied!</span> : <span>COPY CA</span>}
        <span>6AQW7Ed9rBRFrFZ1ivD7jcfcG9gtb3xYu1vCKwoJpump</span>
      </ContentFlex>
    </FloaterRightBottom2>
  );
}