'use client';
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components"

const FloaterWrapperTop = styled.div`
  position: fixed;
  width: 100%;
  background-color: transparent;
  top: 1.5%;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    top: 1.5%;
  }
`;

const FloaterWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: transparent;
  bottom: 1.5%;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    bottom: 15%;
  }
`;

const FloaterInsider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 650px;
  padding: 16px 45px;
  background-color: #020202;
  border-radius: 12px;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 0px #000;
  
  @media (max-width: 768px) {
    padding: 16px 25px;
    width: 95%;

  }
  span {
    // spacing
    letter-spacing: 2px;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;

    &.active {
      color: #E7AE35;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const FloaterInsiderSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 650px;
  padding: 16px 45px;
  background-color: #E7AE35;
  border-radius: 12px;
  justify-content: start;
  gap: 30px;
  box-shadow: 0px 0px 5px 0px #000;

  @media (max-width: 768px) {
    padding: 16px 25px;
    width: 95%;

    justify-content: center;
    .more {
      display: none;
    }
  }

  img {
    cursor: pointer;
  }

  span {
    // spacing
    letter-spacing: 2px;
    color: #000;
    font-size: 22px;
    font-weight: 700;
    cursor: pointer;

    &.active {
      color: #E7AE35;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const ImageIcon = styled(Image)`
  max-height: 40px;

  @media (max-width: 768px) {
    max-height: 30px;
    max-width: 30px;
  }
`;

export default function Floater() {
  // check current page location nextjs
  const [currentLocation, setCurrentLocation] = useState("");
  const nextNavigate = useRouter();
  const nextRouter = usePathname();

  useEffect(() => {
    setCurrentLocation(nextRouter);
  }, [nextRouter]);

  return (
    <>
      <FloaterWrapperTop>
        <FloaterInsider>
          <span
            onClick={() => nextNavigate.push("/")}
            className={currentLocation === "/" ? "active" : "null"}
          >Ticket</span>
          <span
            onClick={() => nextNavigate.push("/value")}
            className={currentLocation === "/value" ? "active" : "null"}
          >Value</span>
          <span
            onClick={() => nextNavigate.push("/ultimate-goal")}
            className={currentLocation === "/ultimate-goal" ? "active" : "null"}
          >Ultimate Goal</span>
        </FloaterInsider>
      </FloaterWrapperTop>
      <FloaterWrapper>
        <FloaterInsiderSocial>
          <span>Official Links:</span>
          <ImageIcon
            onClick={() => window.open("https://t.me/PROJECT_HODL_TG", "_blank")}
            src="/icons/tg.png" alt='tg' width={36} height={0}/>
          <ImageIcon
            onClick={() => window.open("https://x.com/HODL100K", "_blank")}
            src="/icons/x.png" alt='x' width={36} height={0}/>
          <span className="more">More to come</span>
        </FloaterInsiderSocial>
      </FloaterWrapper>
    </>
  )
}