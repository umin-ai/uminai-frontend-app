import { Modal } from "@mantine/core";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetLeaderboard } from "./useGetRecord";
import Image from "next/image";

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
    return (
      <ModalStyled
        withCloseButton={false}
        opened={opened}
        onClose={close}
        closeOnClickOutside={true}
        title="Leaderboard"
        size="xl"
        radius={'lg'}
        centered
      >
          {children}
          <>
          <LeaderboardGrid>
            <span>Rank</span>
            <span>Username</span>
            <span>Count</span>
          </LeaderboardGrid>
            {leaderboard && leaderboard.map((item, index) => {
              return (
                <LeaderboardGrid key={index}>
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
      </ModalStyled>
    );
  } else {
    return (
      <></>
    )
  }
}

const LeaderboardGrid = styled.div`
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
`;

const Top3Icon = styled(Image)``;