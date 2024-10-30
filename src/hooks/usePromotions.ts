import { useState } from "react";

export interface PromotionInfo {
  priority: number
  title: string;
  packageInfo: string;
  description: string;
  price: number;
  originalPrice: number;
  iconUrl?: string;
}


const MockPromotions: PromotionInfo[] = [
  {
    priority: 1,
    title: "Primary Pack",
    packageInfo: "1 app 85+ channels",
    description: "The must-watch local and international content made for everyone in the family",
    price: 41.99,
    originalPrice: 59.99,
    iconUrl: "/images/home-card-primary.png",
  },
  {
    priority: 2,
    title: "Entertainment Pack",
    packageInfo: "2 apps 100+ channels",
    description: "The best of entertainment, from all Asian and global favourites to kids content",
    price: 62.99,
    originalPrice: 89.99,
    iconUrl: "/images/home-card-primary.png",
  },
  {
    priority: 3,
    title: "Movies Pack",
    packageInfo: " 3 app and 90+ channels",
    description: "Discover award-winning films and original series at the home of movies, which includes Disney+ Hotstar & HBO",
    price: 66.49,
    originalPrice: 94.99,
    iconUrl: "/images/home-card-primary.png",
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