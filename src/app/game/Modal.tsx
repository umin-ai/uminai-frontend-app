import { Modal } from "@mantine/core";
import { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { stanleyRecordAtom, useGetLeaderboard } from "./useGetRecord";
import Image from "next/image";
import { useAtomValue } from "jotai";

const ModalStyled = styled(Modal)`
  .mantine-Paper-root, .mantine-Modal-header {
    background-color: #FFFBD2;
  }
  .mantine-Modal-title {
    font-size: 24px !important;
    font-weight: 500 !important;
  }
  background-color: #FFFBD2 !important;
  @media (max-width: 768px) {
    .mantine-Modal-body {
      max-height: 500px;
    }
  }
`;

const ModalStyledLeaderboard = styled(Modal)`
  .mantine-Paper-root, .mantine-Modal-header {
    background-color: #FFFBD2;
  }
  .mantine-Modal-title {
    font-size: 24px !important;
    font-weight: 500 !important;
  }
  background-color: #FFFBD2 !important;
  @media (max-width: 768px) {
    .mantine-Modal-body {
      max-height: 500px;
      width: 430px;
      // max-width: 100%;
    }
  }
`;
export const CustomModal = ({ children,
  opened,
  open,
  close,
  type,
 }: {
  children: React.ReactNode;
  opened: boolean;
  open: () => void;
  close: () => void;
  type: string;
}) => {
  const { leaderboard, onGetLeaderboard } = useGetLeaderboard();
  // const [opened, { open, close }] = useDisclosure(false);
  
  useEffect(() => {
    if (type === 'leaderboard')
      onGetLeaderboard();
  }, [type]);
  if (type === 'add_wallet') {
    return (
      <ModalStyled
        withCloseButton={false}
        opened={opened}
        onClose={close}
        closeOnClickOutside={false}
        title="Start the game"
        size="md"
        radius={'lg'}
        centered
      >
          {children}
      </ModalStyled>
    );
  } else if (type === 'leaderboard'){
    const stanleyRecord = useAtomValue(stanleyRecordAtom);
    const isUserConnected = useCallback((username: string) => {
      return stanleyRecord && stanleyRecord.username === username ? true : false;
    }, []);
    const myRanking = useMemo(() => {
      if (leaderboard) {
        const myRank = leaderboard.findIndex((item) => item.username === stanleyRecord?.username);
        return myRank + 1;
      }
    }, [leaderboard, stanleyRecord]);

    return (
      <ModalStyledLeaderboard
        withCloseButton={false}
        opened={opened}
        onClose={close}
        closeOnClickOutside={true}
        // title={<HeaderLeaderboard />}
        size="xl"
        radius={'lg'}
        centered
      >
          {children}
          <>
          <HeaderLeaderboard myRanking={myRanking}/>
          <LeaderboardGrid>
            <span>Rank</span>
            <span>Username</span>
            <span>Count</span>
          </LeaderboardGrid>
            {leaderboard && leaderboard.map((item, index) => {
              return (
                <LeaderboardGrid key={index} isUserConnected={isUserConnected(item.username)}>
                  <span>{index + 1}
                  </span>
                  <span className="flex gap-2 items-center">{item.username}
                    {index === 0 && <><Top3Icon src="/game/1.png" alt="First" width={32} height={32} /><span>Twerk Lord</span></>}
                    {index === 1 && <><Top3Icon src="/game/2.png" alt="Second" width={32} height={32} /><span>Twerk Master</span></>}
                    {index === 2 && <><Top3Icon src="/game/3.png" alt="Third" width={32} height={32} /><span>Twerk In Custody</span></>}
                  </span>
                  <span>{item.count}</span>
                </LeaderboardGrid>
              )
            })}
          </>
      </ModalStyledLeaderboard>
    );
  } else {
    return (
      <></>
    )
  }
}

const HeaderLeaderboardWrapper = styled.div`
    font-size: 24px !important;
    font-weight: 500 !important;
    display: flex;
    justify-content: space-between;
    // padding: 16px 0;
    padding-bottom: 8px;
    border-bottom: 1px solid #000;
`;
const HeaderLeaderboard = ({
  myRanking
}: {
  myRanking?: number;
}) => {
  return (
    <HeaderLeaderboardWrapper>
      <span>Leaderboard</span>
      <span>My Rank: {myRanking ? myRanking : 'Unranked'}</span>
    </HeaderLeaderboardWrapper>
  )
}

const LeaderboardGrid = styled.div<{ isUserConnected?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 16px;
  row-gap: 16px;
  border-bottom: 1px solid #000;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 3fr 1fr;
    gap: 8px;
    row-gap: 8px;
  }

  span {
    margin: 4px 0px;
  }

  ${props => props.isUserConnected && `
    background-color: #FFECAA;
    font-weight: 700;
  `}
`;

const Top3Icon = styled(Image)``;