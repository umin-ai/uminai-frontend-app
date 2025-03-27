'use client';
import { FlexColumn, FlexRow } from "@ap/components/general";
import { Text } from "@mantine/core";
import Image from "next/image";
import styled from "styled-components";

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
  background: rgb(38,20,84);
  background: linear-gradient(180deg, rgba(38,20,84,1) 0%, rgba(101,80,154,1) 25%, rgba(139,121,93,0.9752275910364145) 63%, rgba(120,120,186,1) 100%);

  border-radius: 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  height: 100%;
  padding: 20px;
`;

const TabItem = styled(FlexRow)<{ active?: boolean }>`
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ active }: { active?: boolean }) => active ? '#F2F2F2' : 'transparent'};
  color: ${({ active }: { active?: boolean }) => active ? '#000' : '#666'};
  font-weight: ${({ active }: { active?: boolean }) => active ? 'bold' : 'normal'};
`

const ContentLayout = styled(FlexRow)`
  gap: 56px;
  justify-content: space-between;
`;

const Dashboard = styled(FlexRow)`
  height: 100vh;
  padding: 8px 0px;
  gap: 20px;
`;

const MainImg = styled(Image)``;

export default function Main() {
  return (
    <Dashboard>
      <Sidepanel>
        <MainImg src={'/images/uminai.png'} alt='uminai' width={128} height={0}/>
        <TabItem>Listing</TabItem>
        <TabItem>Setting</TabItem>
      </Sidepanel>
      <CardXL>
        <ContentLayout>
          <FlexColumn className="gap-[56px]">
            <Card>
              some
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