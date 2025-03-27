'use client';
import { FlexColumn, FlexRow } from "@ap/components/general";
import { Text } from "@mantine/core";
import Image from "next/image";
import styled from "styled-components";
import { ItemIcons } from "/public/svgs";

const CardXL = styled.div`
  width: 100%;
  height: 100%;
  min-height: 700px;
  // background-color: #2C394C;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  background: #2C394C;
  // opacity: 0.8;

  width: 650px;
  height: 345px;
  border-radius: 16px;
`;

const Sidepanel = styled(FlexColumn)`
  background: rgb(53,59,113);
  background: linear-gradient(90deg, rgba(53,59,113,1) 0%, rgba(45,51,98,1) 25%, rgba(40,46,89,1) 63%, rgba(35,40,80,1) 100%);
  border-radius: 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  height: 100%;
  padding: 20px;
  align-items: center;
`;

const ContentLayout = styled(FlexRow)`
  gap: 56px;
  justify-content: space-between;
`;

const Dashboard = styled(FlexRow)`
  height: 100vh;
  padding: 16px 16px;
  gap: 20px;
`;

const MainImg = styled(Image)``;

const TabItem = styled(FlexRow)<{ active?: boolean }>`
  align-items: center;
  gap: 8px;
  padding: 8px 32px 8px 16px;

  border-radius: 0px 8px 8px 0;
  cursor: pointer;

  border-left: 5px solid #fff;
  background-color: rgba(255, 255, 255, 0.3); // White with 30% opacity
  backdrop-filter: blur(10px); // Adjust blur radius as needed
  color: ${({ active }: { active?: boolean }) => active ? '#000' : '#fff'};
  font-weight: ${({ active }: { active?: boolean }) => active ? 'bold' : 'normal'};

  svg, path {
    width: 24px !important;
    height: 24px !important;
    stroke: #fff !important;
  }
`

const TabRoot = styled(FlexColumn)`
  gap: 16px;
`;

export default function Main() {
  return (
    <Dashboard>
      <Sidepanel>
        <MainImg src={'/images/uminai.png'} alt='uminai' width={80} height={0}/>
        <TabRoot className="mt-5">
          <TabItem>
            <ItemIcons.Home />
            Dashboard
          </TabItem>
          <TabItem>
            <ItemIcons.AI />
            Agent
          </TabItem>
          <TabItem>
            <ItemIcons.Setting />
            Settings
          </TabItem>
        </TabRoot>
      </Sidepanel>
      <CardXL>
        <ContentLayout>
          <FlexColumn className="gap-[56px]">
            <Card>
              Dashboard
            </Card>
            <Card>
              some
            </Card>
          </FlexColumn>
        </ContentLayout>
      </CardXL>
    </Dashboard>
  )
}