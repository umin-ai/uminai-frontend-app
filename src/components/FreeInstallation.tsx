import { Divider } from "@mantine/core";
import Image from "next/image"
import styled from "styled-components"

const FreeInstallationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 2rem 0;
  background-color: #fff;
`

const InternalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background-color: #fff;
  max-width: 900px;
  padding: 0px 1rem;
`

const CImage = styled(Image)`
  width: 100%;
`;

const BigTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.6rem;
`;

const SmallTitle = styled.span`
  font-size: 1.2rem;
  font-weight: semibold;
  margin-bottom: 1rem;
  margin-top: 0.6rem;
`;
export default function FreeInstallation() {
  return (
    <FreeInstallationWrapper className="mt-6" id='ultra_box'>

      <InternalWrapper>
        <BigTitle>All Astro TV Packages Include</BigTitle>
        <Divider color="#E60279" className="w-full"/>
        <SmallTitle>No satellite dish, No Problem!</SmallTitle>
        <CImage src='/images/ultra-box.png' alt='astro_ultra_box' width={1200} height={0} />
      </InternalWrapper>
    </FreeInstallationWrapper>
  )
}