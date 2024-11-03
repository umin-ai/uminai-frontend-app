import { channel } from "diagnostics_channel";
import { useEffect, useState } from "react";

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

interface ChannelProps {
  id: number;
  backupImage: string;
  detailUrl: string;
  imageUrl: string;
  isAstroGoExclusive: boolean;
  isOnDemandExclusive: boolean;
  isRadioExclusive: boolean;
  originalImage: string;
  stbNumber: number;
  subtitle: string;
  subtitle_my: string;
  title: string;
}

interface MultipackChannels {
  type: string;
  allChannels: ChannelProps[];
}
export interface ChannelInfo {
  category: string;
  allChannels: ChannelProps[];
  isMultiPack?: boolean;
  multiPackChannels?: MultipackChannels[]
}
const MockChannelsByName = [
  {
    category: "Base",
    numberOfChannels: 85,
    description: "Take family time to new heights with local & international favourites",
    channels: BaseChannels,
  }
]
const useGetChannelList = ({
  channels
}: {
  channels: string[];
}) => {
  const [loadChannels, setLoadChannels] = useState<readonly ChannelInfo[]>();
  const onGetChannels = async () => {
    try {
      const result = await fetch('https://contenthub-api.eco.astro.com.my/channel/min.json');
      const data = await result.json();
      const { response } = data;
      let resultAppendable: ChannelInfo[] = [];
      channels.forEach((channel) => {
        if (channel === 'BASE') {
          const responseValues = Object.values(response).filter((c: any) => BASE_CHANNELS.includes(c.subtitle))
          .sort((a: any, b: any) => a.isRadioExclusive - b.isRadioExclusive) as ChannelProps[];
          // console.log('BASE', responseValues);

          resultAppendable.push({
            category: "BASE",
            allChannels: responseValues,
          })
          // 
          console.log('resultAppendable', resultAppendable);
        } else if (channel === 'MOVIES_PACK') {
          const responseValues = Object.values(response).filter((c: any) => MOVIES_PACK.includes(c.subtitle))  as ChannelProps[];
          resultAppendable.push({
            category: "MOVIES_PACK",
            allChannels: responseValues,
          })
        } else if (channel === 'VARIETY') {
          const responseValues = Object.values(response).filter((c: any) => VARIETY.includes(c.subtitle))  as ChannelProps[];
          resultAppendable.push({
            category: "VARIETY",
            allChannels: responseValues,
          })
        } else if (channel === 'ASIAN_FAVOURITES') {
          // const responseValues = Object.values(response).filter((c: any) => ASIAN_FAVOURITES.includes(c.subtitle))  as ChannelProps[];
          let multipackChannelsValues: MultipackChannels[] = [];

          multipackChannelsValues.push({
            type: 'Asian Variety',
            allChannels: [{
              id: 1,
              backupImage: "https://d3riyfoij6hyxp.cloudfront.net/acm/media/cassandraassets/viu_icon.png",
              detailUrl: "https://www.astro.com.my/",
              imageUrl: "/icons/viu_icon.png",
              isAstroGoExclusive: false,
              isOnDemandExclusive: false,
              isRadioExclusive: false,
              originalImage: "https://d3riyfoij6hyxp.cloudfront.net/acm/media/cassandraassets/viu_icon.png",
              stbNumber: 1,
              subtitle: "HD, 5 Screens",
              subtitle_my: "HD, 5 Screens",
              title: "Viu Premium"
            }]
          })
          ASIAN_FAVOURITES.forEach((item) => {
            if (item.type === 'Indian Favorites') {
              const responseValues = Object.values(response).filter((c: any) => item.channels.includes(c.subtitle))  as ChannelProps[];
              multipackChannelsValues.push({
                type: "Indian Favorites",
                allChannels: responseValues,
              })
            } else if (item.type === 'Indonesian Favorites') {
              const responseValues = Object.values(response).filter((c: any) => item.channels.includes(c.subtitle))  as ChannelProps[];
              multipackChannelsValues.push({
                type: "Indonesian Favorites",
                allChannels: responseValues,
              })
            }
          })
          resultAppendable.push({
            category: "ASIAN_FAVOURITES",
            allChannels: [],
            isMultiPack: true,
            multiPackChannels: multipackChannelsValues,
          })
        }
      })
      setLoadChannels(resultAppendable);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onGetChannels();
  }, []);

  return {
    loadChannels,
    onGetChannels,
  }
}

const BASE_CHANNELS = ['CH101', 'CH102', 'CH103', 'CH104', 'CH105', 'CH106', 'CH107', 'CH108', 'CH114', 'CH116', 
  'CH122', 'CH146', 'CH147', 'CH148', 'CH149', 'CH201', 'CH202', 'CH203', 'CH221', 'CH222', 
  'CH223', 'CH300', 'CH305', 'CH306', 'CH308', 'CH309', 'CH310', 'CH311', 'CH316', 'CH317', 
  'CH319', 'CH320', 'CH321', 'CH325', 'CH326', 'CH333', 'CH335', 'CH392', 'CH393', 'CH398', 
  'CH110', 'CH501', 'CH502', 'CH503', 'CH549', 'CH550', 'CH603', 'CH611', 'CH701', 'CH703', 
  'CH706', 'CH707', 'CH708', 'CH709', 'CH712', 'CH801', 'CH802', 'CH803', 'CH804', 'CH852', 
  'CH853', 'CH854', 'CH855', 'CH856', 'CH857', 'CH858', 'CH859', 'CH860', 'CH861', 'CH862', 
  'CH863', 'CH864', 'CH865', 'CH866', 'CH867', 'CH868', 'CH869', 'CH870', 'CH871', 'CH872', 
  'CH873', 'CH874', 'CH875', 'CH876', 'CH877'];

const MOVIES_PACK = ['CH241', 'CH251', 'CH401', 'CH411', 'CH412', 'CH413', 'CH414', 'CH415', 'CH416']

const VARIETY = ['CH702', 'CH714', 'CH715', 'CH716', 'CH717', 'CH718', 'On Demand Channel', 'On Demand Channel']

const ASIAN_FAVOURITES = [{
  type: 'Asian Variety',
  channels: ['VIU_PREMIUM'],
}, {
  type: 'Indonesian Favorites',
  channels: ['CH112', 'CH113'],
}, {
  type: 'Indian Favorites',
  channels: ['CH221', 'CH212', 'CH214', 'CH215', 'CH216', 'CH217']
}]
export default useGetChannelList;