import Image from "next/image";
import { useMemo } from "react";
import styled from "styled-components";

const WhatsIncludedIcon = styled(Image)<{ size?: number }>`
  border-radius: 8px;
  width: ${({ size }) => (size ? `${size}px` : '40px')};
  height: auto;
  justify-self: center;
  border: 1px solid #dcdcdc;
`;

export const WhatsIncludedIconSearch = ({ channel, size }: { channel: string, size?: number }) => {
  const srcUrl = useMemo(() => {
    switch (channel) {
      case 'ASTRO_GO':
        return '/icons/astro-go-256.png';
      case 'DISNEY_PLUS_HOTSTAR':
        return '/icons/d-h_app_logo-256x256.png';
      case 'HBO_GO':
        return '/icons/hbo_go_v2.png';
      case 'BBC_PLAYER':
        return '/icons/bbc-player-app-icon_144x144.png';
      case 'MOVIES_PACK':
        return '/icons/icon_movies.png';
      case 'BASE':
        return '/icons/icon_base.png';
      case 'MOVIES_PACK':
        return '/icons/icon_movies.png';
      case 'ASIAN_FAVOURITES':
        return '/icons/icon_asian-favourites.png';
      case 'VARIETY':
        return '/icons/icon_variety.png';
      case 'KIDS':
        return '/icons/icon_kids.png';
      default:
        return '/icons/icon_base.png';
    }
  }, [channel]);
  return (
    <WhatsIncludedIcon size={size} src={srcUrl}
      width={100} height={0} alt="astro.com.my"
    />
  )
}

export const whatsIncludedText = ({ channel }: { channel: string }) => {
  switch (channel) {
    case 'ASTRO_GO':
      return 'Astro Go';
    case 'DISNEY_PLUS_HOTSTAR':
      return 'Disney+ Hotstar';
    case 'HBO_GO':
      return 'HBO Go';
    case 'BBC_PLAYER':
      return 'BBC Player';
    case 'MOVIES_PACK':
      return 'Movies Pack';
    case 'BASE':
      return 'Base';
    case 'MOVIES_PACK':
      return 'Movies Pack';
    case 'ASIAN_FAVOURITES':
      return 'Asian Favourites';
    case 'VARIETY':
      return 'Variety';
    case 'KIDS':
      return 'Kids';
    default:
      return 'Base';
  }
}