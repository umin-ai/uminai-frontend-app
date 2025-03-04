'use client';
import { FlexColumn, TopHeaderDefault } from "@ap/components/general";
import { Text } from "../public-library/components/styled";
import styled from "styled-components";

// GRID 2 SIDES and left is Sidebar
const Grid2Sides = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  height: inherit;
`

const SidebarWrapper = styled(FlexColumn)`
  height: 100%;
  background-color: #f8fafc;
  gap: 12px;
  padding: 8px;
`

const Panel2 = styled(FlexColumn)``

const sidePanelOptions = [
  {
    title: 'Recommender Agent',
    description: 'uAgent Recommender system interacts with Smartphone AI to provide recommendations based on user preferences.',
    storyline: "The Smartphone AI owner is looking for energy-efficient appliances. The uAgent Recommender system interacts with the Smartphone AI to provide recommendations based on user preferences.",
    tag: 'recommender-agent',
  },
  {
    title: 'How to use a product via uAgent',
    description: 'uAgent provides a helpful guide on how to use a product.',
    storyline: "The user is looking for a guide on how to use a product. The uAgent displays a helpful guide on how to use a product.",
    tag: 'how-to-use-product',
  },
  {
    title: 'Where is my product located?',
    description: 'uAgent tells you where your product is located.',
    storyline: "uAgent reads the product event log and tells the user where the product is located.",
    tag: 'product-location',
  },
]
export default function AI() {
  return (
    <FlexColumn className="h-[100vh] bg-black">
      <TopHeaderDefault>
        <FlexColumn className="w-[60%]">
          <Text className="text-[#2563EB] font-semibold text-xl uppercase">
            uminai's AI in Action
          </Text>
          <Text className="text-[#71717a] mt-5">
            Explore uminai's AI models in action.
          </Text>
        </FlexColumn>
      </TopHeaderDefault>
      <FlexColumn className="h-full bg-red-500 items-stretch">
        <Grid2Sides>
          <Sidebar />
          <Panel2 />
        </Grid2Sides>
      </FlexColumn>
    </FlexColumn>
  )
}

const OptionCard = styled(FlexColumn)`
  background-color: #f8fafc;
  border: 1px solid #e5e7eb;
  padding: 12px;
  border-radius: 8px;
`;
const Sidebar = () => {
  return (
    <SidebarWrapper>
      {sidePanelOptions.map((option) => (
        <OptionCard key={option.tag}>
          <Text className="text-[#2563EB] font-semibold text-lg">{option.title}</Text>
          <Text className="text-[#000] mt-2">{option.description}</Text>
        </OptionCard>
      ))}
    </SidebarWrapper>
  )
}