'use client';

import Image from "next/image";
import { useRef, useState } from "react";
import styled from "styled-components";
import ReactAudioPlayer from 'react-audio-player';

const MidCardRoot = styled.div<{ isPlay?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(16, 213, 227, 0) 0%,          /* 0% of #10D5E3 at 0% opacity */
      rgba(0, 180, 238, 0.91) 50%,       /* 50% of #00B4EE at 91% opacity */
      rgba(22, 137, 197, 1) 100%         /* 100% of #1689C5 at 100% opacity */
  );
  padding-bottom: 50px;

  ${({ isPlay }) => isPlay && `
    background: #000 !important;
  `}
`;
const MidCardWrapper = styled.div`

  margin-top: 150px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding: 0 84px;
  pointer-events: none;
  z-index: 3;
`;
const StanleyCardImg = styled(Image)`
  max-width: 700px;
`;
const TopGif = styled(Image)`
  margin-bottom: -20px;
`;

const Words = styled.div`
  margin-top: 20px;
  max-width: 700px;
  text-align: center;
  span {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 2px 1px #000;
  }
`

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const ButtonStyled = styled.button`
  padding: 5px 14px;
  background-color: transparent;
  color: #fff;
  border: 4px solid #fff;
  border-radius: 22px;
  cursor: pointer;
  font-size: 22px;
  font-weight: 700;
  text-shadow: 0px 2px 3px #000;
  transition: all 0.3s ease;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .25);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 8px rgba(0, 0, 0, .25);
  }
`;

const PawPosition = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  margin-top: 400px;
  margin-left: 150px;
`;
const PawImg = styled(Image)`
  width: 320px;
`;
const PawPosition2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  margin-top: 420px;
  margin-right: 150px;
`;

const DiscoBall1Position = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin-top: 0px;
  margin-left: 0px;
`;

const DiscoBall2Position = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  margin-top: 0px;
  margin-left: 0px;
`;

const DiscoBallImg = styled(Image)``;

const PlayerPosition = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  margin-top: 250px;
  margin-left: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  pointer-events: all;
`;

const StanleyDiscoPosition1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin-top: 500px;
  margin-left: 300px;

  img {
    border-radius: 50%;
    max-width: 350px;
  }
`;

const StanleyDiscoPosition2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  margin-top: 500px;
  margin-right: 300px;

  img {
    border-radius: 50%;
    max-width: 350px;
  }
`;

const StanleySmashPosition1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin-top: 600px;
  margin-left: 50px;

  img {
    border-radius: 50%;
    max-width: 200px;
  }
`;

const StanleySmashPosition2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  margin-top: 600px;
  margin-right: 50px;

  img {
    border-radius: 50%;
    max-width: 200px;
  }
`;

const DiscoLightPosition1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin-top: 50px;
  margin-left: 750px;

  img {
    max-width: 200px;
  }
`;
export default function StanleyCardMid() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <MidCardRoot isPlay={isPlaying}>
      <PawPosition>
        <PawImg src='/images/paws.png' alt='pawprint' width={500} height={0}/>
      </PawPosition>
      <PawPosition2>
        <PawImg src='/images/paws2-e.png' alt='pawprint' width={500} height={0}/>
      </PawPosition2>
      {isPlaying &&
        <>
          <DiscoBall1Position>
            <DiscoBallImg src='/images/bullett-glitter.gif' alt='discoball1' width={500} height={0}/>
          </DiscoBall1Position>
          <DiscoBall2Position>
            <DiscoBallImg src='/images/bullett-glitter.gif' alt='discoball2' width={500} height={0}/>
          </DiscoBall2Position>
          <StanleyDiscoPosition1>
            <Image src='/images/discostanley.gif' alt='stanley-disco' width={500} height={0}/>
          </StanleyDiscoPosition1>
          <StanleyDiscoPosition2>
            <Image src='/images/discostanley.gif' alt='stanley-disco' width={500} height={0}/>
          </StanleyDiscoPosition2>
          <StanleySmashPosition1>
            <Image src='/images/stanleysmash.gif' alt='stanley-smash' width={500} height={0}/>
          </StanleySmashPosition1>
          <StanleySmashPosition2>
            <Image src='/images/stanleysmash.gif' alt='stanley-smash' width={500} height={0}/>
          </StanleySmashPosition2>
          <DiscoLightPosition1>
            <Image src='/images/discolight.gif' alt='disco-light' width={500} height={0}/>
          </DiscoLightPosition1>
        </>
      }

      <MidCardWrapper>
        <TopGif src='/images/stanleyanim.gif' alt='stanley-anim' width={250} height={0}/>
        <PlayerPosition>
          <MP3PlayButton audioSrc="/audio/tellmewhy.mp3" isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </PlayerPosition>

        <StanleyCardImg src='/images/StanleyLogoXL.png' alt='stanley-logo' width={1920} height={1080}/>
        <Words>
          <span>The No. 1 Twerking Cat, Riding on Robot Vacuum and Trick Shot Master</span>
        </Words>
      </MidCardWrapper>
      <ButtonArea>
        <ButtonStyled>Buy on Birdeye</ButtonStyled>
        <ButtonStyled>Buy on Pump.fun</ButtonStyled>
      </ButtonArea>
    </MidCardRoot>
  )
}

const PlayButton = styled.button`
  padding: 5px 10px;
  font-size: 22px;
  font-weight: 700;
  border-radius: 16px;
  cursor: pointer;
  border: 5px solid #FFDE59;
  color: #FFDE59;
  // text-stroke
  text-shadow: 0px 2px 3px #000;
  box-shadow: 0 8px 8px rgba(0, 0, 0, .25);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 12px rgba(0, 0, 0, .25);
  }
`;
const MP3PlayButton = ({ audioSrc, isPlaying, setIsPlaying }: 
  { audioSrc: string,
    isPlaying: boolean,
    setIsPlaying: (isPlaying: boolean) => void
   }
) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    else {
      if (isPlaying) {
        await audio.pause();
      } else {
        try {
          await audio.play();
        } catch (error) {
          console.error("Autoplay was prevented:", error);
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <PlayButton
        onClick={togglePlay}
      >
        {isPlaying ? 'Pause' : 'Smack me arse!'}
      </PlayButton>
      <audio ref={audioRef} loop>
        <source src="https://lime-artistic-puffin-516.mypinata.cloud/ipfs/bafybeicbmbozgvtsb6y3rdbnb6nnhlh662z4u6ajkfcfqkrbhuhcs3zqt4" type="audio/mpeg" />
      </audio>
    </div>
  );
};