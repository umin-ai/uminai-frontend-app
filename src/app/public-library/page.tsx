'use client';
import { Button, DefaultButton, FlexColumn, FlexRow, PrimaryButton } from "@ap/components/general";
import { SearchInput, SearchLogo, SearchWrapper, Text, TopHeader } from "./components/styled"
import { Category, Graphics, Icons } from "/public/svgs";

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
      <h1>Public Library</h1>
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
      <FlexColumn>
        <Text className="text-3xl font-semibold text-center mt-10">
          Categories
        </Text>
        <CategoryCards />
      </FlexColumn>
    </div>
  )
}

export const Search = () => {
  return (
    <SearchWrapper>
      <SearchInput placeholder="Enter something to explore" />
      <SearchLogo>
        <Icons.SearchIcon />
      </SearchLogo>
    </SearchWrapper>
  )
}

const CategoryCard = ({ category }: { category: string }) => {
  return (
    <FlexColumn className="bg-white p-4 rounded-md shadow-md">
      <Category.Arts />
      <Text className="text-2xl font-semibold text-center mt-4">{category}</Text>
      <Button className="mt-4">Explore {category}</Button>
    </FlexColumn>
  )
}
export const CategoryCards = () => {
  return (
    <FlexRow className="gap-4">
      <CategoryCard category="Arts" />
      <CategoryCard category="Education" />
      <CategoryCard category="Economy" />
      <CategoryCard category="Environment" />
      <CategoryCard category="Housing" />
      <CategoryCard category="Health" />
      <CategoryCard category="Social" />
      <CategoryCard category="Transport" />
    </FlexRow>
  )
}