import Image from "next/image";
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
  z-index: 3;
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
`;

const ImageSpaceShip = styled(Image)`
  max-width: 503px;
`;

const ImageBottomLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  pointer-events: none;
`;

const ImageMoon = styled(Image)`
  max-width: 630px;
`;

const ImageBottomRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  pointer-events: none;
`;

const ImageLogo = styled(Image)`
  max-width: 398px;
`;

const ImageTopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 50px 0px 0px 56px;
  pointer-events: none;
`;

const ImageCenter = styled.div`
  margin-top: 0px;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // pointer-events: none;
`;

const BitcoinImg = styled(Image)`
  max-width: 325.77px;
  pointer-events: none;
`;

const EndlessImg = styled(Image)`
  margin-top: 28px;
  max-width: 713.84px;
  pointer-events: none;
`;

const ButtonArea = styled.div`
  margin-top: 45px;

  width: 100%;
  max-width: 495px;
  max-height: 94px;
  height: 100%;
  border: 1px solid #FFFFFF;
  background-color: #000;
  padding: 24px 26px;
  border-radius: 16px;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  overflow: hidden;

  span {
    color: #FFFFFF;
    font-size: 36px;
    // font weight black
    font-weight: 900;
    letter-spacing: 3%;
  }

  .ticket-button {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    padding: 12px 24px;
    border-radius: 16px;
    span {
      color: #000;
    }
  }
`;

export const MidCard = () => {
  return (
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
        <ImageCenter>
          <BitcoinImg
            src="/images/Bitcoin.png"
            alt="Rocket"
            width={1920}
            height={1080}
          />
          <EndlessImg
            src="/images/Endless.png"
            alt="Rocket"
            width={1920}
            height={1080}
          />
        </ImageCenter>
        <ButtonPlacement>
          <ButtonArea>
            <span>PRINT YOUR</span>
            <div className="ticket-button">
              <span>TICKET</span>
            </div>
          </ButtonArea>
        </ButtonPlacement>

      </RealCard>
    </CardWrapper>
  )
}

const ButtonPlacement = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
`;