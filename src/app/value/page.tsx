'use client';
import NImage from "next/image";
import styled from "styled-components";

const CardWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 84px;
  // padding: 0 20px;
  pointer-events: none;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 90px 10px;
    align-items: start;
  }
`;

const RealCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #020202;
  max-width: 1163px;
  max-height: 693px;
  border-radius: 22px;
  overflow: hidden;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  pointer-events: all;

  @media (max-width: 768px) {
    // max-width: 100%;
    // max-width: 360px;
    max-height: 500px;
  }
`;

const ImageSpaceShip = styled(NImage)`
  max-width: 503px;
  @media (max-width: 768px) {
    max-width: 200px;
  }
`;

const ImageBottomLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  pointer-events: none;
  @media (max-width: 768px) {
    bottom: 20%;
  }
`;

const ImageMoon = styled(NImage)`
  max-width: 630px;
  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

const ImageBottomRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  pointer-events: none;
`;

const ImageLogo = styled(NImage)`
  max-width: 398px;
    @media (max-width: 768px) {
    max-width: 200px;
  }
`;

const ImageTopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 50px 0px 0px 56px;
  pointer-events: none;
  @media (max-width: 768px) {
    padding: 20px 0px 0px 20px;
  }
`;

const InfoCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 99px;
  padding-left: 67px;
  padding-right: 67px;

  @media (max-width: 768px) {
    padding-top: 90px;
    padding-left: 20px;
    padding-right: 20px;
    max-height: 461px;
  }

`;

const InfoCardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 461px;
  max-width: 1033px;
  background: rgba(2, 2, 2, 0.7);
  border: 2px solid #E7AE35;

  @media (max-width: 768px) {
    border-radius: 22px;
  }
    
  span {
    &.title {
      font-size: 36px;
      font-weight: 700;
      color: #FFF;
      letter-spacing: 2px;
    }

    &.ans {
      margin-top: 20px;
      font-size: 28px;
      font-weight: 600;
      color: #E7AE35;
      letter-spacing: 2px;
    }

    @media (max-width: 768px) {
      &.title {
        font-size: 18px;
        font-weight: 700;
        color: #FFF;
        letter-spacing: 2px;
      }

      &.ans {
        margin-top: 20px;
        font-size: 16px;
        font-weight: 700;
        color: #E7AE35;
        letter-spacing: 2px;
      }
    }
  }


`;

const FlexColQuotes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  text-align: center;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
  span {
    &.bigtitle {
      font-size: 20px;
      font-weight: 700;
      color: #FFF;
      letter-spacing: 2px;
    }

    &.who {
      font-size: 17px;
      font-weight: 600;
      color: #C1C1C1;
      letter-spacing: 2px;
    }

    @media (max-width: 768px) {
      &.bigtitle {
        font-size: 16px;
        font-weight: 700;
        color: #FFF;
        letter-spacing: 2px;
      }

      &.who {
        font-size: 16px;
        font-weight: 600;
        color: #C1C1C1;
        letter-spacing: 2px;
      }
    }
  }
`;
export default function Value() {
  return (
    <div className="flex flex-col w-full h-[100vh] relative">
    <CardWrapper>
      <RealCard>
        <ImageTopLeft>
          <ImageLogo src="/icons/HODL100K.png" alt="HODL100K" width={398} height={398} />
        </ImageTopLeft>
        <ImageBottomLeft>
          <ImageSpaceShip
            src="/images/spaceship_inner.png"
            alt="Spaceship"
            width={1920}
            height={1080}
          />
        </ImageBottomLeft>
        <ImageBottomRight>
          <ImageMoon
            src="/images/moon_cropped.png"
            alt="Spaceship"
            width={1920}
            height={1080}
          />
        </ImageBottomRight>
        <InfoCard>
          <InfoCardBox>
            <span className="title">Token Value Proposition</span>
            <span className="ans">Embracing BTC All Time High</span>
            <span className="ans">MEME Meets Meaning</span>
            <span className="ans">Be Part of The Legacy</span>
            <FlexColQuotes>
              <span className="bigtitle">“Ride the wave to 100K and Beyond, BTC is Imminent”</span>
              <span className="who">- Prof. Hodl Sr.</span>
            </FlexColQuotes>
          </InfoCardBox>
        </InfoCard>
      </RealCard>
    </CardWrapper>
    </div>
  );
}