import { useState } from "react";
import { PromotionInfo } from "./usePromotions";

export interface AstroPackInfo extends PromotionInfo{
}


const MockPacks: AstroPackInfo[] = [
  {
    priority: 1,
    title: "Sports Pack",
    bigImage: "/images/acm-pack-sportspack.jpg",
    packageInfo: "2 apps and 95+ channels",
    description: "Witness every major league, live sports events, and Malaysia's football scene",
    price: 99.99,
    originalPrice: 0,
    iconUrl: "/images/home-card-primary.png",
    supportedApps: ["BEIN_SPORTS_CONNECTED", "ASTRO_GO"],
    supportedChannels: ["SPORTS_PACK", "BASE"]
  },
  {
    priority: 2,
    title: "Sports Plus Pack",
    bigImage: "/images/acm-pack-sportspluspack.jpg",
    packageInfo: "3 apps and 100+ channels",
    description: "More than live sports for the sports enthusiasts, featuring Netflix and more",
    price: 129.99,
    originalPrice: 0,
    iconUrl: "/images/home-card-primary.png",
    supportedApps: ["NETFLIX", "ASTRO_GO", "BEIN_SPORTS_CONNECTED"],
    supportedChannels: ["BASE", "SPORTS_PACK", "KOREAN", "HORROR"]
  },
  {
    priority: 3,
    title: "Movies Plus Pack",
    bigImage: "/images/acm-pack-moviespluspack.jpg",
    packageInfo: "4 apps and 100+ channels",
    description: "All of movie-fan favourites, including Netflix, Disney+ Hotstar, and HBO GO, in one pack",
    price: 129.99,
    originalPrice: 0,
    iconUrl: "/images/home-card-primary.png",
    supportedApps: ["NETFLIX", "DISNEY_PLUS_HOTSTAR", "HBO_GO", "ASTRO_GO"],
    supportedChannels: ["BASE", "SPORTS_PACK", "KOREAN", "HORROR"]
  },
  {
    priority: 4,
    title: "Entertainment Plus Pack",
    packageInfo: "3 apps and 110+ channels",
    bigImage: "/images/acm-pack-entertainmentpluspack.jpg",
    description: "Non-stop local and international variety for all ages, featuring Netflix and more",
    price: 129.99,
    originalPrice: 0,
    iconUrl: "/images/home-card-primary.png",
    supportedApps: ["NETFLIX", "BBC_PLAYER", "ASTRO_GO"],
    supportedChannels: ["BASE", "KOREAN", "HORROR", "VARIETY", "KIDS", "ASIAN_FAVOURITES"]
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