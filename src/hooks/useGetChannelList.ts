import { channel } from "diagnostics_channel";
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

interface IChannelData {
  number: number;
  url: string;
}

const BaseChannels = [
  {
    number: 1,
    url: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/29_144.png",
  }
]
interface ChannelInfo {
  category: string;
  numberOfChannels: number;
  description: string;
  channels: IChannelData[];
}
const MockChannelsByName = [
  {
    category: "Base",
    numberOfChannels: 85,
    description: "Take family time to new heights with local & international favourites",
    channels: BaseChannels,
  }
]
export default function useGetChannelList() {
  const [channels, setChannels] = useState<readonly ChannelInfo[]>(MockChannelsByName);
  const onGetChannels = async () => {
    try {
      
    } catch (error) {
      
    }
  }

  return {
    channels,
    onGetChannels,
  }
}