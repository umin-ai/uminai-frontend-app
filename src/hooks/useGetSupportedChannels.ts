import { useEffect, useState } from "react";

const MOCK_CHANNEL_ICON = {
  1: '/images/astro-go-256.png',
  2: '/images/icon_base.png',
}

const MOCK_PROMOTION_CHANNELS: PackageChannels[] = [
  {
    packageId: 1,
    channels: [1, 2]
  }
]

interface PackageChannels {
  packageId: number
  channels: number[]
}
export default function useGetSupportedChannels() {
  const [channels, setChannels] = useState<PackageChannels[]>([]);

  const onGetSupportedChannels = async () => {
    try {
      // const result = await fetch('https://contenthub-api.eco.astro.com.my/channel/min.json');
      // const data = await result.json();
      // const { response } = data;
      setChannels(MOCK_PROMOTION_CHANNELS);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!channels.length)
      onGetSupportedChannels();
    }
  , []);
  
  return {
    channels,
  }
}