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
    supportedChannels: ["SPORTS_PACK", "KOREAN", "HORROR", "BASE"]
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
    supportedChannels: ["SPORTS_PACK", "KOREAN", "HORROR", "BASE"]
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
    supportedChannels: ["KOREAN", "HORROR", "VARIETY", "KIDS", "ASIAN_FAVOURITES", "BASE"]
  },
  {
    priority: 5,
    title: "Premium Pack 1",
    bigImage: "/images/acm-pack-premiumpack1.jpg",
    packageInfo: "4 apps and 105+ channels",
    description: "Explore a top-tier selection of movies and sports, along with access to multiple streaming apps.",
    price: 109.99,
    originalPrice: 129.99,
    iconUrl: "/images/home-card-primary.png",
    supportedApps: ["DISNEY_PLUS_HOTSTAR", "HBO_GO", "BEIN_SPORTS_CONNECTED", "ASTRO_GO"],
    supportedChannels: ["MOVIES_PACK", "SPORTS_PACK", "BASE" ]
  },
  {
    priority: 6,
    title: "Premium Pack 2",
    bigImage: "/images/acm-pack-premiumpack2.png",
    packageInfo: "4 apps and 115+ channels",
    description: "Enhance your home entertainment with a premium variety of shows, sports, and access to multiple streaming apps.",
    price: 149.99,
    originalPrice: 0,
    iconUrl: "/images/home-card-primary.png",
    supportedApps: ["NETFLIX", "DISNEY_PLUS_HOTSTAR", "HBO_GO", "BBC_PLAYER", "ASTRO_GO"],
    supportedChannels: ["MOVIES_PACK", "KOREAN", "HORROR", "VARIETY", "KIDS", "ASIAN_FAVOURITES", "BASE"]
  },
  {
    priority: 7,
    title: "Premium Pack 3",
    bigImage: "/images/acm-pack-premiumpack3.jpg",
    packageInfo: "5 apps and 110+ channels",
    description: "Enjoy an elevated experience with premium movies, diverse content, and access to multiple streaming apps.",
    price: 154.99,
    originalPrice: 0,
    iconUrl: "/images/home-card-primary.png",
    supportedApps: ["NETFLIX", "DISNEY_PLUS_HOTSTAR", "HBO_GO", "BBC_PLAYER", "HBO_GO", "ASTRO_GO"],
    supportedChannels: ["MOVIES_PACK", "KOREAN", "HORROR", "VARIETY", "KIDS", "ASIAN_FAVOURITES", "BASE"]
  },
  {
    priority: 8,
    title: "Platinum Pack",
    bigImage: "/images/acm-pack-platinum.jpg",
    packageInfo: "6 apps and 150+ channels",
    description: "Experience the ultimate all-in-one entertainment with movies, sports, Netflix, and a wide range of streaming apps.",
    price: 194.99,
    originalPrice: 0,
    iconUrl: "/images/home-card-primary.png",
    supportedApps: ["NETFLIX", "DISNEY_PLUS_HOTSTAR", "BEIN_SPORTS_CONNECTED", "HBO_GO", "BBC_PLAYER", "HBO_GO", "ASTRO_GO"],
    supportedChannels: ["MOVIES_PACK", "KOREAN", "HORROR", "VARIETY", "NEWS_DOCUMENTARY", "KIDS", "ASIAN_FAVOURITES", "SPORTS_PACK", "SPORTS_PACK_EXTRA", "BASE"]
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