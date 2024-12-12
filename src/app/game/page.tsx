'use client';
import useIsMobile from "@ap/hooks/useIsMobile";
import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { stanleyRecordAtom, useGetRecord, useLogOut, useSaveOrCreateUsername, useUpdateCount } from "./useGetRecord";
import { CustomModal } from "./Modal";
import { useDisclosure } from "@mantine/hooks";
import * as UUID from 'uuid';
const StanleyImg = styled(Image)`
  cursor: pointer;
  draggable: false;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none;
  
`;

const GameWrapper = styled.div<{ isAlternate: boolean }>`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(16, 213, 227, 0.5) 0%,          /* 0% of #10D5E3 at 0% opacity */
      rgba(0, 180, 238, 0.91) 5%,       /* 50% of #00B4EE at 91% opacity */
      rgba(22, 137, 197, 1) 100%         /* 100% of #1689C5 at 100% opacity */
  );

  // alternate mode
  ${({ isAlternate }) => isAlternate && `background: linear-gradient(
    to bottom,
    rgb(0 54 87 / 89%) 0%,          /* 0% of #FF7E6F at 0% opacity */
    rgb(0 61 99 / 91%) 5%,       /* 50% of #FF7E6F at 91% opacity */
    rgb(137 0 101) 100%         /* 100% of #FF7E6F at 100% opacity */
  );`}

  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const ModeButtonPosition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 18px;
  z-index: 100;
`;
const ModeButton = styled.button<{ isAlternate: boolean }>`
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  padding: 8px 22px;
  color: #000;
  background: #F1E1B0;
  width: 100%;
  border-radius: 28px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);

  // alternate mode
  ${({ isAlternate }) => isAlternate && `background: #FF7E6F;`}

  // on click
  &:active {
    transform: scale(0.95);
    background: #F1E1B0;
  }
`;

const ModeButtonMobile = styled(ModeButton)`
  font-size: 18px;
`;

// Styled container for the ball
const BallContainer = styled.div`
  position: relative;
  width: 1334px;
  height: 800px;
  min-height: 700px;
  max-height: 700px;
  border-radius: 22px;
  overflow: hidden;
  overflow: none;
  background-color: #FFFBD2;
  box-shadow: 0px 0px 12px 0px #000;
  @media (max-width: 768px) {
    background-color: #FFFBD2;
    width: 100%;
    max-width: 430px;
    height: 500px;
    border-radius: 12px;
    min-height: 500px;
    max-height: 500px;
    overflow: none;
  }
`;

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BgVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Game() {
  const [clickSoundSetter, setClickSound] = useState<HTMLAudioElement | null>(null);
  useEffect(() => {
    // Ensure this code runs only in the browser
    const sound = new Audio("/game/Pop-sound-effect.mp3");
    setClickSound(sound);
  }, []);

  const isMobile = useIsMobile();
  const [mouseClick, setMouseClick] = useState(false);
  const [counter, setCounter] = useState(0);

  const ballRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState<{ dx: number, dy: number } | undefined> ({ dx: 1, dy: 1 }); // Adjust these for speed

  const size = useMemo(() => {
    if (isMobile) {
      return 200;
    } else {
      return 400;
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      setVelocity({ dx: 2, dy: 3 });
    } else {
      setVelocity({ dx: 2, dy: 3 });
    }
  }, [isMobile]);

  const responsiveContainerWidth = useMemo(() => {
    if (isMobile) {
      return window.innerWidth;
    } else {
      return 1334;
    }
  }, [isMobile]);

  const responsiveContainerHeight = useMemo(() => {
    if (isMobile) {
      return 500;
    } else {
      return 700;
    }
  }, [isMobile]);

  useEffect(() => {
    const moveBall = () => {
      const ball = ballRef.current;
      if (!ball) return;
      if(!velocity) return;
      const containerWidth = responsiveContainerWidth;
      const containerHeight = responsiveContainerHeight;
      
      // Calculate next position
      let nextX = position.x + velocity.dx;
      let nextY = position.y + velocity.dy;

      // Reverse direction on collision with edges
      if (nextX <= 0 || nextX + size >= containerWidth) {
        // @ts-ignore
        setVelocity((v) => ({ ...v, dx: -v.dx }));
        nextX = Math.max(0, Math.min(containerWidth - size, nextX));
      }

      if (nextY <= 0 || nextY + size >= containerHeight) {
        // @ts-ignore
        setVelocity((v) => ({ ...v, dy: -v.dy }));
        nextY = Math.max(0, Math.min(containerHeight - size, nextY));
      }

      // Update position
      setPosition({ x: nextX, y: nextY });
    };

    const interval = setInterval(moveBall, 16); // 60 FPS
    return () => clearInterval(interval);
  }, [position, velocity, size, responsiveContainerWidth, responsiveContainerHeight]);
  
  const [badMode, setBadMode] = useState(false);

  const [stanleyRecord, setStanleyRecord] = useAtom(stanleyRecordAtom);
  const [username, setUsername] = useState<string>('');
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (!stanleyRecord) {
      open();
    } else {
      setUsername(stanleyRecord.username);
      // close();
      // setCounter(stanleyRecord.count);
    }
  }, [stanleyRecord]);

  const { getRecordState, newUUID, userIsExist, userIsExistCounter } = useGetRecord({ username: username, setCount: setCounter });

  useEffect(() => {
    if (userIsExist) {
      setStanleyRecord({ username: username, count: userIsExistCounter });
    }
  }, [userIsExist]);

  const [isCopied, setIsCopied] = useState(false);
  // console.log('userData', userData)
  const { saveAndCreateUsername } = useSaveOrCreateUsername({ username, uuidProof: newUUID, close: close, setCount: setCounter });

  const { updateCount } = useUpdateCount({ username: stanleyRecord ? stanleyRecord.username : undefined });

  const handleMouseDown = async () => {
    setMouseClick(true);
    setCounter((c) => c + 1);

    if (clickSoundSetter) {
      clickSoundSetter.currentTime = 0;
      await clickSoundSetter.play();
    }
  };

  const handleMouseUp = () => {
    setMouseClick(false);
  };
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear previous timeout if it exists
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set a new timeout
    debounceTimeoutRef.current = setTimeout(() => {
      updateCount(counter); // Update count after 1 second of inactivity
    }, 1000);

    // Cleanup timeout on component unmount
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [counter]);

  const { logOut } = useLogOut();

  const [openedLeaderboard, { open: openLeaderboard, close: closeLeaderboard }] = useDisclosure(false);

  return (
    <>
    <GameWrapper isAlternate={badMode}>
        <ModeButtonPosition>
          {/* <ModeButton isAlternate={badMode} onClick={() => setBadMode(!badMode)}>Mode: {!badMode ? 'Good boi' : 'Bad boi'}</ModeButton> */}
          <MP3PlayButton isMobile={isMobile} audioSrc="nothing" isPlaying={badMode} setIsPlaying={setBadMode} />
        </ModeButtonPosition>
      

      <CenterLogo>
        <LogoImg src='/images/StanleyLogo.png' alt='stanley' width={180} height={0}/>
      </CenterLogo>
      <BallContainer>
        {!badMode ? (
          <BgImage src='/game/BgMobile.png' alt='bg' width={1000} height={1000}/>
        ) : (
          <BgVideo autoPlay loop muted>
            <source src="/game/BgVideo.mp4" type="video/mp4" />
          </BgVideo>
        )}

        <AbsoluteCounter>Counter: {counter <= 0 ? 0 : counter}</AbsoluteCounter>
        {/* @ts-ignore */}
        <StanleyImg ref={ballRef} src={!mouseClick ? '/game/stanleyup.png' : '/game/stanleydown.png'} alt="StanleyUpDown" width={size} height={size}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          // onMouseDown={handleMouseDown}
          // onMouseUp={handleMouseUp}
          // onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onClick={() => {
            if (!isMobile) {
              handleMouseDown();
              setTimeout(() => {
                handleMouseUp();
              }, 50);
            }
          }}
        />
      </BallContainer>
      <GamePanel>
        <LeaderboardButton
          onClick={() => openLeaderboard()}
        >Leaderboard</LeaderboardButton>
        <YourAccountButton>
          <span>Username:&nbsp;</span>
          <span>{!stanleyRecord ? 'Not Set' : stanleyRecord.username}</span>
        </YourAccountButton>
        {stanleyRecord && (
          <LogOutButton
            onClick={() => {
              logOut();
              setUsername('');
              setCounter(0);
              open();
            }}
          >
            <span>Log Out</span>
          </LogOutButton>
        )}

      </GamePanel>
    </GameWrapper>

    <CustomModal opened={opened} open={open} close={close} type="add_wallet">
      <div>Enter your username</div>
      <StyledWalletInput
        value={username}
        onChange={(e) => {
          // dont more than 50 characters
          if (e.target.value.length <= 26) {
            setUsername(e.target.value)}
          }
        }
      />
      {!stanleyRecord &&
        <CopyButton
          disabled={username.length === 0}
          className="mt-2"
          onClick={() => {
            navigator.clipboard.writeText(newUUID);
            setIsCopied(true);
            setTimeout(() => {
              setIsCopied(false);
            }, 1000);
          }}
        >
          {isCopied ? 'Copied!' : `Copy Proof: ${newUUID}`}
        </CopyButton>
      }

      <SaveButton className="mt-2"
        disabled={username.length === 0}
        onClick={() => {
          if (!stanleyRecord) {
            // create
            saveAndCreateUsername();
          } else {
            close();
          }
        }}
      >
        {!stanleyRecord ? 'Create' : 'Continue'}
      </SaveButton>
      {!stanleyRecord && (
        <div className="flex flex-col mt-2">
          <span>1. Enter your username</span>
          <span>2. Copy Proof (Keep it somewhere safe!)</span>
          <span>- We will ask for proof from winners</span>
          <span>3. Be the Hall of Fame!!!</span>
        </div>
      )}
    </CustomModal>
    {openedLeaderboard &&
    <CustomModal opened={openedLeaderboard} open={openLeaderboard} close={closeLeaderboard} type="leaderboard">
      <></>
    </CustomModal>
    }

    </>
  )
}

const AbsoluteCounter = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;

  padding: 12px;
  font-weight: 700;
  font-size: 54px;
  text-shadow: 0px 2px 3px #000;
  color: #fff;
    -webkit-text-stroke: 1px #000;
  text-stroke: 1px #000;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
const CenterLogo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px;

  @media (max-width: 768px) {
    justify-content: start;
  }
`;

const LogoImg = styled(Image)`
  @media (max-width: 768px) {
    width: 150px;
  }
`;

const GamePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 12px;
  width: 100%;
  min-height: 200px;
  border-radius: 12px;
  background: #FFFBD2;
  box-shadow: 0px 0px 12px 0px #000;
  // inner shadow
  -webkit-box-reflect: below 0px linear-gradient(transparent, #0005);
  gap: 12px;
  margin-top: 12px;

  @media (max-width: 768px) {
    margin-top: 0;
    width: 100%;
    border-radius: 32px;
    height: 100px;
    justify-content: center;
  }
`;

const LeaderboardButton = styled.button`
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  padding: 8px 0px;
  color: #000;
  background: #F1E1B0;
  width: 100%;
  border-radius: 28px;
  border: 1px solid rgba(0, 0, 0, 0.5);

  // on click
  &:active {
    transform: scale(0.95);
    background: #F1E1B0;
  }
`;

const YourAccountButton = styled.button`
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  padding: 8px 22px;
  color: #000;
  background: #F1E1B0;
  width: 100%;
  border-radius: 28px;
  // ellipsis
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid rgba(0, 0, 0, 0.5);

  // on click
  &:active {
    transform: scale(0.95);
    background: #F1E1B0;
  }
`;

const LogOutButton = styled(YourAccountButton)`
  background: #FF7E6F;
`;

const SaveButton = styled(YourAccountButton)`

  // disabled
  ${({ disabled }) => disabled && `background: #ccc;`}
`;

const CopyButton = styled(YourAccountButton)`
  font-size: 18px;

  // disabled
  ${({ disabled }) => disabled && `background: #ccc;`}
`;
const StyledWalletInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 12px;
  font-size: 24px;
  font-weight: 700;
  border-radius: 22px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-top: 12px;
`;

const MP3PlayButton = ({ audioSrc, isPlaying, setIsPlaying, isMobile }: 
  { audioSrc: string,
    isPlaying: boolean,
    setIsPlaying: (isPlaying: boolean) => void
    isMobile: boolean
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
    <>
    {!isMobile ? (
      <ModeButton
      onClick={togglePlay}
      isAlternate={isPlaying}
    >
      Mode: {!isPlaying ? 'Good boi' : 'Bad boi'}
    </ModeButton>

    ) : (
      <ModeButtonMobile
      onClick={togglePlay}
      isAlternate={isPlaying}
    >
      Mode: {!isPlaying ? 'Good boi' : 'Bad boi'}
    </ModeButtonMobile>
    )}

      <audio ref={audioRef} loop>
        <source src="https://lime-artistic-puffin-516.mypinata.cloud/ipfs/bafybeibobwkzaatvuoh2gx5zmtlbjy42prx7cds7bkekv435o72kprkga4" type="audio/mpeg" />
      </audio>
    </>
  );
};