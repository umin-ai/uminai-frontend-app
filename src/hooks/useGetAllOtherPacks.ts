import { useState } from "react";

export interface AstroPackInfo {
  priority: number
  title: string;
  packageInfo: string;
  description: string;
  price: number;
  originalPrice: number;
  iconUrl?: string;
}


const MockPacks: AstroPackInfo[] = [
  {
    priority: 1,
    title: "Sports Pack",
    packageInfo: "2 apps and 95+ channels",
    description: "Witness every major league, live sports events, and Malaysia's football scene",
    price: 99.99,
    originalPrice: 0,
    iconUrl: "/images/home-card-primary.png",
  },
  {
    priority: 2,
    title: "Sports Plus Pack",
    packageInfo: "3 apps and 100+ channels",
    description: "More than live sports for the sports enthusiasts, featuring Netflix and more",
    price: 129.99,
    originalPrice: 0,
    iconUrl: "/images/home-card-primary.png",
  },
  {
    priority: 3,
    title: "Movies Plus Pack",
    packageInfo: "4 apps and 100+ channels",
    description: "All of movie-fan favourites, including Netflix, Disney+ Hotstar, and HBO GO, in one pack",
    price: 129.99,
    originalPrice: 0,
    iconUrl: "/images/home-card-primary.png",
  },
  {
    priority: 4,
    title: "Entertainment Plus Pack",
    packageInfo: "3 apps and 110+ channels",
    description: "Non-stop local and international variety for all ages, featuring Netflix and more",
    price: 129.99,
    originalPrice: 0,
    iconUrl: "/images/home-card-primary.png",
  }
]
export default function useGetAllOtherPacks() {
  const [tvpacks, setTvpacks] = useState<readonly AstroPackInfo[]>(MockPacks);
  const onGetTvpacks = async () => {
    try {
      
    } catch (error) {
      
    }
  }

  return {
    tvpacks,
    onGetTvpacks,
  }
}