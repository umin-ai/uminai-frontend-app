import { useState } from "react";

export interface PromotionInfo {
  priority: number
  title: string;
  packageInfo: string;
  description: string;
  price: number;
  originalPrice: number;
  iconUrl?: string;
  supportedApps: string[];
  supportedChannels: string[];
}

const MockPromotions: PromotionInfo[] = [
  {
    priority: 1,
    title: "Primary Pack",
    packageInfo: "1 app 85+ channels",
    description: "Enjoy must-watch local and international content crafted for the whole family.",
    price: 41.99,
    originalPrice: 59.99,
    iconUrl: "/images/home-card-primary.png",
    supportedApps: ["ASTRO_GO"],
    supportedChannels: ["BASE"]
  },
  {
    priority: 2,
    title: "Entertainment Pack",
    packageInfo: "2 apps 100+ channels",
    description: "The best in entertainment, featuring Asian and global favorites alongside kids",
    price: 62.99,
    originalPrice: 89.99,
    iconUrl: "/images/home-card-primary.png",
    supportedApps: ["ASTRO_GO", "BBC_PLAYER"],
    supportedChannels: ["BASE", "VARIETY", "KIDS", "ASIAN_FAVOURITES"]
  },
  {
    priority: 3,
    title: "Movies Pack",
    packageInfo: " 3 app and 90+ channels",
    description: "Explore award-winning films and original series at the ultimate home for movies, featuring Disney+ Hotstar and HBO",
    price: 66.49,
    originalPrice: 94.99,
    iconUrl: "/images/home-card-primary.png",
    supportedApps: ["ASTRO_GO", "DISNEY_PLUS_HOTSTAR", "HBO_GO"],
    supportedChannels: ["BASE", "MOVIES_PACK"]
  }
]
export default function usePromotions() {
  const [promotions, setPromotions] = useState<readonly PromotionInfo[]>(MockPromotions);
  const onGetPromotions = async () => {
    try {
      
    } catch (error) {
      
    }
  }

  return {
    promotions,
    onGetPromotions,
  }
}