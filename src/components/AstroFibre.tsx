import Image from "next/image";
import styled from "styled-components"
import _50Mbps from '../../public/icons/af-50.svg';
import _100Mbps from '../../public/icons/af-100.svg';
import { Divider } from "@mantine/core";
import TickIcon from '../../public/icons/tick-icon.svg';
const AstroFibreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background-image: linear-gradient(90deg, #FE9752 0%, #E5037E 100%);
  color: white;
  margin-top: 2rem;
`

const Spacer = styled.div`
  height: 120px;
  width: 100%;
  @media (max-width: 768px) {
    height: 95px;
  }
`;

const Headline = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.1rem;
`;



const HeadlineDescription = styled.span`
  font-size: 16px;
  font-weight: semibold;
  margin-bottom: 1rem;
  margin-top: 0.6rem;
  text-align: center;
  padding: 0 1.2rem;
  max-width: 900px;
`;

const PromotionFibre = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  // background-color: #fff;
  // max-width: 900px;
  padding: 0px 1rem;
`

const StarterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  // background-color: #fff;
  // background with opacity
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  max-width: 800px;
  padding: 2rem 2rem 1rem 2rem;
  border-radius: 32px;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.5);

  @media (max-width: 768px) {
    padding: 1rem !important;
    border-radius: 16px;
  }

  color: #000;
`

const CImage = styled(Image)`
  &:hover {
    transform: scale(0.9);
  }

  transition: transform 0.5s;
  cursor: pointer;
`;
export default function AstroFibre() {
  return (
    <AstroFibreWrapper id='astro-fibre'>
      <Headline>Astro Fibre</Headline>
      <HeadlineDescription>Enjoy the best of both worlds with Astro Fibre Broadband. Get the fastest internet speeds at home and the best entertainment on Astro TV. Sign up now to experience WiFi Kencang!</HeadlineDescription>

      <PromotionFibre>
        <StarterCard>
          <CImage src='/images/astro-fibre.png' alt='astro_fibre' width={1200} height={0} />
        </StarterCard>
      </PromotionFibre>

      <PromotedPack />
    </AstroFibreWrapper>
  )
}

const BigText = styled.span`
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 0.1rem;
  // font color D50B94 and 991FCC gradient
  background-image: linear-gradient(135deg, #D50B94 0%, #991FCC 100%);
  color: transparent;
  background-clip: text;
`;

const YoutubeIframe = styled.iframe`
  width: 100%;
  max-width: 700px;
  height: 380px;
  max-height: 600px;
  border-radius: 26px;
  border: 3px solid #D50B94;
  // glowy
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.5);

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ClickHereButton = styled.button`
  width: 80%;
  padding: 8px;
  border-radius: 12px;
  background-image: linear-gradient(135deg,#e6007d,#e72f3b);
  color: white;
  cursor: pointer;
  max-width: 490.19px;
  
`;
const PromotedPack = () => {
  return (
    <PromotionFibre className="mt-5">
      <StarterCard>
        <BigText>SPECIAL DEALS</BigText>
        <span className="text-2xl font-bold text-center">500 Mbps for only RM90/month</span>
        <span>Valid from 24 Nov 2023 to 30 Nov 2024</span>
        {/* Youtube video */}
        <YoutubeIframe className="mt-2" width="1028" src="https://www.youtube.com/embed/Wo6Sgw_tP-E" title="Astro Fibre: Seisi keluarga meriah sebab rumah dikuasakan WiFi Kencang! (90s)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        <ClickHereButton className="mt-5 mb-2"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=60128800015&text=Hello,+I+am+interested+with+Astro+Fibre+RM90+Promotion&type=phone_number', '_blank')}
          >Subscribe Now!</ClickHereButton>
      </StarterCard>
      <AllOtherFibrePacks />
    </PromotionFibre>
  )
}

const AllOtherPacksWrapper = styled.div`
  width: 100%;
  position: relative;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-content: center;
    grid-gap: rem;
  }
  
`;

const FibrePackCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background-color: #fff;
  width: 100%;
  max-width: 400px;
  padding: 2rem 2rem 1rem 2rem;
  border-radius: 32px;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.5);
  margin: 1rem;
  color: #000;

  align-self: center;
  justify-self: center;
  @media (max-width: 768px) {
    padding: 1rem !important;
    margin: unset;
    border-radius: 16px;
  }
  z-index: 1;
`;

const SvgImg = styled(Image)`
`;

const fibrePacksBestSeller = [{
  title: '50 Mbps + Primary Pack',
  icon: _50Mbps,
  price: 139.99,
  originalPrice: 159.99,
  free: 'FREE speed upgrade to 100Mbps for 24 months',
  speed: '50 Mbps',
  tv: 'Primary Pack',
}, {
  title: '100 Mbps + Primary Pack',
  icon: _100Mbps,
  price: 149.99,
  originalPrice: 188.99,
  free: 'FREE speed upgrade to 500Mbps for 24 months',
  speed: '100 Mbps',
  tv: 'Primary Pack',
}, {
  title: '100 Mbps + Sports Pack',
  icon: _100Mbps,
  price: 199.99,
  originalPrice: 228.99,
  free: 'FREE speed upgrade to 500Mbps for 24 months',
  speed: '100 Mbps',
  tv: 'Sports Pack',
}];

const GridItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  span {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const GridItemsV2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 16px;
  span {
    font-size: 1rem;
    font-weight: regular;
  }
`;

const AbsouluteImage = styled.div`
  position: absolute;
  width: 100%;
  top: -170px;
  left: -40px;
  z-index: 0;
  @media (max-width: 768px) {
    display: none;
  }
`

const ImageWow = styled(Image)`
  width: 200px;
`
const AllOtherFibrePacks = () => {
  return (
    <>
      <Headline className="mt-6">Best Selling Bundles!</Headline>
      <AllOtherPacksWrapper>
        <AbsouluteImage>
          <ImageWow src='/images/wow_img.png' alt='wow' width={300} height={0} />
        </AbsouluteImage>
        {fibrePacksBestSeller.map((f, idx) => (
          <FibrePackCard key={idx}>
            <GridItems>
              <SvgImg src={f.icon} alt={`astro_${f.speed}`} width={30} height={0} />
              <span>{f.title}</span>
            </GridItems>
            <div className="font-extrabold mt-4">
              <span className="text-2xl">RM{f.price}</span>
              <span>/month</span>
              {f.originalPrice > 0 && (
              <span className="ml-1.5 text-sm font-normal text-neutral-400">
                <s>RM{f.originalPrice}</s>
              </span>
              )}
            </div>
            <Divider className="my-2" color="red" w={'100%'}/>
            <GridItemsV2 className="mt-2">
              <SvgImg src={TickIcon} alt="tick_icon" width={20} height={0} />
              <span>{f.free}</span>
            </GridItemsV2>
            <GridItemsV2 className="mt-2">
              <SvgImg src={TickIcon} alt="tick_icon" width={20} height={0} />
              <span>{f.tv} TV Package</span>
            </GridItemsV2>
            <GridItemsV2 className="mt-2 mb-0">
              <SvgImg src={f.icon} alt="tick_icon" width={20} height={0} />
              <span>{f.speed} Internet Speed</span>
            </GridItemsV2>
            <ClickHereButton className="mt-5 mb-2"
              onClick={() => window.open(`https://api.whatsapp.com/send/?phone=60128800015&text=Hello,+I+am+interested+with+${f.title}&type=phone_number`, '_blank')}
            >Subscribe Now!</ClickHereButton>
          </FibrePackCard>
        ))}
      </AllOtherPacksWrapper>
    </>
  )
}