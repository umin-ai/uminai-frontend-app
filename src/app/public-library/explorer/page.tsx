'use client';
import { DefaultButton, FlexColumn, FlexRow, PrimaryButton, TopHeaderDefault } from "@ap/components/general";
import { Text } from "../components/styled";
import styled from "styled-components";
import { useGetAllUDPD } from "@ap/hooks/api-product.hooks";
import { IProduct } from "@ap/shared/product.interface";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { descriptionShortener } from "@ap/shared/consts";
import { CategoryCard, FlexColumnCard, TagCard } from "./components/styled";

const Grid2Sides = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr;
  gap: 0px;
`
export default function Explorer() {
  const [_allUdpdOnLoad, setAllUdpdOnLoad] = useState<IProduct[]>([]);
  const { allUdpd, allUdpdState } = useGetAllUDPD();

  useEffect(() => {
    if (allUdpd) {
      setAllUdpdOnLoad(allUdpd);
    }
  }, [allUdpd]);

  const handleFilterAllUdpdByCategory = (categories: string[]) => {
    if (allUdpd) {
      const filtered = allUdpd.filter((udpd) => {
        return categories.some((category) => udpd.categories.includes(category));
      });

      setAllUdpdOnLoad(filtered);
    }
  }

  const resetFilter = () => {
    if (allUdpd) {
      setAllUdpdOnLoad(allUdpd);
    }
  }

  const categories = useMemo(() => {
    if (allUdpd) {
      const allCategories = allUdpd.reduce((acc, udpd) => {
        return [...acc, ...udpd.categories];
      }, [] as string[]);

      return Array.from(new Set(allCategories));
    }
    return [];
  }, [allUdpd]);
  return (
    <FlexColumn>
      <TopHeaderDefault>
        <FlexColumn className="w-[60%]">
          <Text className="text-[#2563EB] font-semibold text-xl uppercase">
            uminai's Public Library Explorer
          </Text>
          <Text className="text-[#71717a] mt-5">
            Explore the uminai's Public Library of Product Information.
          </Text>
        </FlexColumn>
      </TopHeaderDefault>
      <FlexColumn>
        <Grid2Sides>
          <Panel1 categories={categories} handleFilterAllUdpdByCategory={handleFilterAllUdpdByCategory}
            resetFilter={resetFilter}
          />

          <Panel2 allUdpd={_allUdpdOnLoad ? _allUdpdOnLoad : []}/>
        </Grid2Sides>
      </FlexColumn>
    </FlexColumn>
  )
}

const Panel1 = ({
  categories,
  handleFilterAllUdpdByCategory,
  resetFilter
}: {
  categories: string[],
  handleFilterAllUdpdByCategory: (categories: string[]) => void
  resetFilter: () => void
}) => {

  return (
    <FlexColumn className="mt-4 px-4">
      <Text className="text-[#2563EB] font-semibold text-lg uppercase ">
        Browse All Categories
      </Text>
      <Text className="cursor-pointer"
        onClick={() => resetFilter()}
      >
        Reset
      </Text>
      <FlexColumn className="px-0 mt-2">
        {categories.map((category) => (
          <DefaultButton key={category} onClick={() => handleFilterAllUdpdByCategory([category])}>
            {category}
          </DefaultButton>
        ))}
      </FlexColumn>
    </FlexColumn>
  )
}
// display all udpd
const Panel2 = ({
  allUdpd
}: {
  allUdpd: IProduct[]
}) => {
  const navigate = useRouter();
  return (
    <FlexColumn>
      <Text className="text-[#2563EB] font-semibold text-lg uppercase mt-4">
        All uDPD
      </Text>
      <FlexColumn>
        {allUdpd.map((udpd) => (
          <FlexColumnCard key={udpd.name}
            onClick={() => navigate.push(`/public-library/view?did=${udpd.identity.find((i) => i.type.toLowerCase() === 'did')?.value}`)}
          >
            <Text>{udpd.identity.find((i) => i.type.toLowerCase() === 'did')?.value}</Text>
            <Text>{udpd.name}</Text>
            <Text>{descriptionShortener(udpd.description)}</Text>
            <FlexRow className="gap-2 mt-2">
              {udpd.categories.map((category) => (
                <CategoryCard key={category}>
                  <Text>{category}</Text>
                </CategoryCard>
              ))}
            </FlexRow>
            <FlexRow className="gap-2 mt-2">
              {udpd.tags.map((tag) => (
                <TagCard key={tag}>
                  <Text>{tag}</Text>
                </TagCard>
              ))}
            </FlexRow>
          </FlexColumnCard>
        ))}
      </FlexColumn>
    </FlexColumn>
  )
}