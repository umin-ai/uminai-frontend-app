import NImage from "next/image";
import { useEffect, useRef, useState } from "react";
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
    max-height: 450px;
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
  max-width: 300px;
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

const CATopRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 50px 50px 0px 0px;
  pointer-events: none;
  color: #E7AE35;
  font-size: 20px;
  font-weight: 700;
  z-index: 5;
  @media (max-width: 768px) {
    padding: 20px 0px 0px 20px;
    display: none;
  }
`;


const TicketCenter = styled.div`
  margin-top: 0px;
  z-index: 2;
  position: relative;
  width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  // align-items: center;
  padding-top: 140px;

  .spanarea {
    display: none;
  }
  @media (max-width: 768px) {
    padding-top: 70px;
    flex-direction: column;
    align-items: center;

    .spanarea {
      margin-top: 50px;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: #E7AE35;
      font-weight: 900;
      font-size: 18px;
      span {
        // stroke
        -webkit-text-stroke: 0.02px #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.45);
      }
    }
  }
`;

const BitcoinImg = styled(NImage)`
  max-width: 325.77px;
  pointer-events: none;
`;

const EndlessImg = styled(NImage)`
  margin-top: 28px;
  max-width: 713.84px;
  pointer-events: none;
`;

const ButtonArea = styled.div`
  margin-top: 45px;

  width: 100%;
  max-width: 520px;
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

  @media (max-width: 768px) {
    max-width: 360px;
    max-height: 50px;
    padding: 8px 26px;
    border-radius: 12px;
  }

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
    border-top-left-radius: 0;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 26px;

    &.lighten {
      background-color: #fff;
    }

    &.darken {
      background-color: #c1c1c1;
    }
    span {
      color: #000;
    }

    @media (max-width: 768px) {
      padding: 6px 22px;
      border-top-left-radius: 0;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 18px;
      span {
        font-size: 18px;
      }
    }
  }
`;

const BorderedCA = styled.div`
  padding: 12px 12px;
  pointer-events: none;
  display: flex;
  border: 1px solid #E7AE35;
`;

export const MidCardTest = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [username, setUsername] = useState<string>("");
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingTime, setLoadingTime] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleDownload = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const link = document.createElement("a");
      link.download = `${username}_hodl100k_ticket.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  useEffect(() => {
    const drawTicket = () => {

      if (canvasRef.current) {

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const img = new Image();
          if (firstLoad) {
            setLoading(true);
          }
          img.src = "/images/TicketV2.png"; // Replace with your ticket image path


          img.onload = () => {
            setLoading(false); // Hide loading indicator

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const text = username.toUpperCase();
            ctx.font = "bold 26px Orbitron"; // Font style
            ctx.fillStyle = "#000"; // Text color
            ctx.textAlign = "center";
            ctx.fillText(text, canvas.width - 160, canvas.height - 80); // Adjust position as needed
          };
          setFirstLoad(false);
        }
      }
    };

    drawTicket();
  }, [username]);

  return (
    <CardWrapper>
      <RealCard>
        <ImageTopLeft>
          <ImageLogo src="/icons/HODL100K.png" alt="HODL100K" width={398} height={398} />
        </ImageTopLeft>
        <CATopRight>
          <BorderedCA>
            <span>CA: <span className="text-white">6AQW7Ed9rBRFrFZ1ivD7jcfcG9gtb3xYu1vCKwoJpump</span></span>
          </BorderedCA>
        </CATopRight>
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

        <TicketCenter>
          <WhiteTangle>
            {loading && (
              <div>
                <p>Loading... {loadingTime ? `(${loadingTime} ms)` : ""}</p>
              </div>
            )}
            <TicketImgPlacement>
              {loading &&
                <TicketImg src="/images/Ticket.png" alt="Bitcoin" width={956} height={0} />
              }
              <canvas
                ref={canvasRef}
                width="956"
                height="376"
              ></canvas>
            </TicketImgPlacement>
          </WhiteTangle>
          <div className="spanarea">
            <span>Step 1: Enter your name</span>
            <span>Step 2: Click "Ticket" to download</span>
          </div>

        </TicketCenter>

        <ButtonPlacement>
          <ButtonArea>
            <InputStyled type="text" value={username} onChange={handleInputChange} placeholder="Enter Name"/>
            <div className={`ticket-button ${username.length > 0 ? 'lighten' : 'darken'}`} onClick={() => { username.length > 0 ? handleDownload() : null }}>
              <span>TICKET</span>
            </div>
          </ButtonArea>
          {/* <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={handleInputChange}
          /> */}
        </ButtonPlacement>

      </RealCard>
    </CardWrapper>
  )
}

const InputStyled = styled.input`
  width: 100%;
  max-width: 280px;
  height: 100%;
  color: #FFFFFF;
  font-size: 36px;
  // font weight black
  font-weight: 900;
  letter-spacing: 3%;
  background: transparent;
  // text to uppercase
  text-transform: uppercase;

  border: none;

  // focus disable
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const WhiteTangle = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  // height: 100%;
  max-width: 956px;
  height: 337px;
  background-color: #FFFFFF;
  pointer-events: all;

  @media (max-width: 768px) {
    max-width: 360px;
    height: 140px;
  }
`;

const TicketImgPlacement = styled.div`
  position: absolute;
  width: 100%;
  // height: 100%;
  margin-top: 20px;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
  canvas {
    box-shadow: -8px -8px 10px rgba(0, 0, 0, 0.45);

    &:hover {
    // scale
    transform: scale(1.01);
    // transition
    transition: transform 0.5s;
    }

    @media (max-width: 768px) {
      max-width: 360px;
      &:hover {
      // scale
      transform: scale(1.01);
      // transition
      transition: transform 0.5s;
      }
    }
  }
`;
const TicketImg = styled(NImage)`
  box-shadow: -8px -8px 10px rgba(0, 0, 0, 0.45);
`;

const ButtonPlacement = styled.div`
  position: absolute;
  display: flex;
  bottom: 0%;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  pointer-events: all;

  @media (max-width: 768px) {
    bottom: 0%;
    padding-bottom: 48px;
  }
`;