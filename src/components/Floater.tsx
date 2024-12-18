'use client';
import useIsMobile from "@ap/hooks/useIsMobile";
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

const FloaterInsider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  // max-width: 1050px;
  padding: 16px 45px;
  // background-color: #020202;
  border-radius: 12px;
  justify-content: space-between;
  // box-shadow: 0px 0px 5px 0px #000;
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    width: 100%;
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

const FloaterWrapperTopCA = styled.div`
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
  color: #fff;
  z-index: 5;

  @media (max-width: 768px) {
    top: 1.5%;
  }
`;

const TopLeftFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopLeftGif = styled(Image)``;
const TopLeftImage = styled(Image)`
  max-width: 160px;
  // height: 100%;
`;

const FlexEndMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 1200px) {
    gap: 20px;
  }

  span {
    // font shadow
    text-shadow: 0px 2px 3px #000;
    font-size: 32px;
    font-weight: 700;
    cursor: pointer;

    @media (max-width: 1200px) {
      font-size: 22px;
    }
  }
`;

const ButtonStyled = styled.button`
  padding: 5px 14px;
  background-color: transparent;
  color: #fff;
  border: 4px solid #fff;
  border-radius: 22px;
  cursor: pointer;
  font-size: 32px;
  font-weight: 700;
  text-shadow: 0px 2px 3px #000;
  transition: all 0.3s ease;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .25);

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 8px rgba(0, 0, 0, .25);
  }
`;

export default function Floater() {
  // check current page location nextjs
  const [currentLocation, setCurrentLocation] = useState("");
  const nextNavigate = useRouter();
  const nextRouter = usePathname();
  const isMobile = useIsMobile();

  useEffect(() => {
    setCurrentLocation(nextRouter);
  }, [nextRouter]);

  return (
    <>{currentLocation !== '/game' &&
      <FloaterWrapperTop>
        <FloaterInsider>
        {/* <span
          onClick={() => nextNavigate.push("/")}
          className={currentLocation === "/" ? "active" : "null"}
        >Ticket</span> */}
        <TopLeftFlex>
          {!isMobile &&
            // <TopLeftGif src='/images/stanleyanim.gif' alt='stanley-anim' width={100} height={0}/>
            <TopLeftGif src='/images/stanleyanimxmas.gif' alt='stanley-anim' width={100} height={0}/>
          }
          <TopLeftImage src='/images/StanleyLogo.png' alt='stanley' width={700} height={0}/>
        </TopLeftFlex>
        {!isMobile &&
          <FlexEndMenu>
            <span
              onClick={() => nextNavigate.push("#about")}
              className={currentLocation === "/about" ? "active" : "null"}
            >About</span>
            <span
              onClick={() => nextNavigate.push("#where-to-buy")}
              className={currentLocation === "/ultimate-goal" ? "active" : "null"}
            >Where to buy</span>
            <span
              onClick={() => nextNavigate.push("#socials")}
              className={currentLocation === "/ultimate-goal" ? "active" : "null"}
            >Socials</span>
            <ButtonStyled
              onClick={() => window.open('https://t.me/stanleythecatcto', '_blank')}
            >Join Telegram</ButtonStyled>
          </FlexEndMenu>       
        }
        </FloaterInsider>
      </FloaterWrapperTop>
    }
      {/* <FloaterWrapper>
        <FloaterInsiderSocial>
          <span>Official Links:</span>
          <ImageIcon
            onClick={() => window.open("https://t.me/+cmF4poMG-GZkMzFk", "_blank")}
            src="/icons/tg.png" alt='tg' width={36} height={0}/>
          <ImageIcon
            onClick={() => window.open("https://x.com/HODL100K", "_blank")}
            src="/icons/x.png" alt='x' width={36} height={0}/>
          <span className="more">More to come</span>
        </FloaterInsiderSocial>
      </FloaterWrapper> */}
    </>
  )
}