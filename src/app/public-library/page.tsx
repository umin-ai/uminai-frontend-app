'use client';
import { Button, DefaultButton, FlexColumn, FlexRow, PrimaryButton, Spacer } from "@ap/components/general";
import { SearchInput, SearchLogo, SearchWrapper, Text, TopHeader } from "./components/styled"
import { Category, Graphics, Icons } from "/public/svgs";
import { useSearch } from "@ap/hooks/search.hooks";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { useQueryProducts } from "@ap/hooks/api-product.hooks";
import styled from "styled-components";

export default function PublicLibrary() {
  return (
    <div>
      <TopHeader>
        <FlexColumn className="w-[60%]">
          <Text className="text-[#2563EB] font-semibold text-xl uppercase">
            uminai's Public Library of Product Information
          </Text>
          <Text className="text-[#000] font-semibold text-3xl uppercase mt-6">
            Decentralised. High Granularity. Open Data.
          </Text>
          <Text className="text-[#71717a] mt-5">
            One-stop decentralised open data library for all product information.
            Station for researchers, developers, and enthusiasts to access and contribute to product information.
          </Text>
          <FlexRow className="gap-3 mt-5">
            <PrimaryButton>Read more</PrimaryButton>
            <DefaultButton>Contribute</DefaultButton>
          </FlexRow>
        </FlexColumn>
      </TopHeader>
      <FlexColumn className="relative items-center h-[250px] overflow-hidden gap-6">
        <Text className="font-bold text-3xl text-center w-[635px] mt-10">
          Tap into uminai's Public Library of Product Information
        </Text>
        <Search />
        <div className="absolute bottom-[-32px] left-0 z-[-1]
          filter opacity-60
        ">
          <Graphics.Waves />
        </div>
      </FlexColumn>
      <FlexColumn className="w-full justify-center items-center">
        <Text className="text-3xl font-semibold text-center mt-10">
          Categories
        </Text>
        <CategoryCards />
      </FlexColumn>
      <RecentlyAdded />
      <Spacer />
    </div>
  )
}

const ResultCard = styled(FlexRow)`
  background-color: #f1f1f1;
  padding: 8px 8px;
  border-radius: 8px;
`

const Search = () => {
  // const { searchInput, setSearchInput } = useSearch();
  const { query, setQuery, queryResult, queryState, onQuery } = useQueryProducts();
  const navigate = useRouter();
  const [opened, { open, close }] = useDisclosure();
  console.log('queryResult', queryResult);
  return (
    <SearchWrapper>
      <SearchInput placeholder="Enter something to explore"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchLogo
        onClick={() => 
          {
            onQuery();
            open();
          }
        }
      >
        <Icons.SearchIcon/>
      </SearchLogo>

      <Modal
        opened={opened}
        onClose={close}
        title="Search Results"
        size="xl"
      >
        <FlexColumn className="gap-3">
          {queryState.isLoading && <Text>Loading...</Text>}
          {queryState.error && <Text>Error: {queryState.error}</Text>}
          {queryState.isSuccess && queryResult?.length === 0 && <Text>No results found</Text>}
          {!queryResult && <Text>No results found</Text>}
          {queryResult && queryResult.length > 0 && queryResult.map((product, idx) => (
            <ResultCard key={idx} className="justify-between items-center">
              <FlexColumn>
                <Text>{product.identity.find((i) => i.type.toLowerCase() === 'did')?.value}</Text>
                <Text>{product.name}</Text>
              </FlexColumn>
              <Text
                className="text-blue-400 cursor-pointer"
                onClick={() => navigate.push(`/public-library/view?did=${product.identity.find((i) => i.type.toLowerCase() === 'did')?.value}`)}>
                View
              </Text>
            </ResultCard>
          ))}
        </FlexColumn>
      </Modal>
    </SearchWrapper>
  )
}

const CategoryCardXL = ({ category }: { category: string }) => {
  return (
    <FlexColumn className="bg-white p-4 rounded-md shadow-md w-full min-w-[150px] max-w-[200px]
      items-center justify-center
    ">
      <FlexRow className="items-center gap-2">
        <Category.Education />
        <Text className="text-xl font-semibold">{category}</Text>
      </FlexRow>
      <Text className="mt-2 text-center w-full">Explore {category}</Text>
    </FlexColumn>
  )
}
const CategoryCards = () => {
  return (
    <FlexRow className="gap-5
      // need to be flexible
      flex-wrap
      justify-center
      mt-6
      px-5
    ">
      <CategoryCardXL category="Electronics" />
      <CategoryCardXL category="Home" />
      <CategoryCardXL category="Hardware" />
      <CategoryCardXL category="Scientific" />
      <CategoryCardXL category="Industrial" />
      <CategoryCardXL category="Digital" />
      <CategoryCardXL category="Arts" />
      <CategoryCardXL category="Luxury" />
    </FlexRow>
  )
}

const RecentlyAddedCard = () => {
  return (
    <FlexColumn className="bg-white p-4 rounded-md shadow-md w-full min-w-[150px] max-w-[350px]">
      <Text className="text-xs font-semibold">
        {new Date().toLocaleDateString()}
      </Text>
      <Text className="text-lg text-center mt-2">
        did:uminai:product123456
      </Text>
      <Button className="mt-2">View</Button>
    </FlexColumn>
  )
}
const RecentlyAdded = () => {
  return (
    <FlexColumn className="px-5 justify-center items-center mt-8">
      <Text className="text-3xl font-semibold text-center mt-10">
        Recently Added: Public creations using uminai
      </Text>
      <Text className="mt-5">
        Network: XRPL EVM
      </Text>
      <FlexRow className="mt-6 flex-wrap justify-center gap-5">
        <RecentlyAddedCard />
        <RecentlyAddedCard />
        <RecentlyAddedCard />
        <RecentlyAddedCard />
        <RecentlyAddedCard />
        <RecentlyAddedCard />
        <RecentlyAddedCard />
      </FlexRow>
    </FlexColumn>
  )
}