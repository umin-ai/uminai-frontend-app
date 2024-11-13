'use client';

import { Divider } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: transparent;
  padding: 16px;
  z-index: 100;
`;

const StyledHeader = styled.div`
  width: 100%;
  position: relative;
  height: 70.02px;
  max-height: 70.02px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1.5fr;
  };
  background-color: #fff;
  border-radius: 26px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  @media (max-width: 768px) {
    overflow: visible;
  }
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
`;

const ImageCustom = styled(Image)`
  border-radius: 8px;
  width: 200px;
  height: auto;
  justify-self: center;
  padding: 16px 0px;

  @media (max-width: 768px) {
    width: 130px;
  }
`;
const ListGoTo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 56px;
  color: #fff;

  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;

  span {
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
  }

  background-image: linear-gradient(135deg,#e6007d,#e72f3b);

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0px 22px;
    gap: 20px;
    span {
      font-size: 16px;
    }
  }
`

const LinkV2 = styled(Link)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuForMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: #fff;
    margin-top: 1.5px;
    span {
      cursor: pointer;
      font-size: 16px;
      font-weight: 700;
    }
  }
`

const MLink = styled(Link)``

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    // Check if window is defined (ensures this is run only on the client side)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      // Set initial screen width
      setScreenWidth(window.innerWidth);

      // Add resize event listener
      window.addEventListener('resize', handleResize);

      // Clean up event listener on unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return screenWidth;
};

const MIcon = styled(Image)`
  width: 20px;
`

const DropDownMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    background-image: linear-gradient(135deg,#e6007d,#e72f3b);
    // background-image with opacity linear gradient
    margin-top: 12px;
    // background-color: #e6007d;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: absolute;
    top: 70px;
    right: 0;
    padding: 12px;
    border-radius: 26px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
    z-index: 101;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    align-items: center;
  }
`
export default function Header() {
  const screenWidth = useScreenWidth();
  // const isMobile = useMemo(() => screenWidth && screenWidth < 768, [screenWidth]);
  const [showMenu, setShowMenu] = useState(false);

  // handle click outside
  useEffect(() => {
    if (showMenu) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.header-wrapper') === null) {
          setShowMenu(false);
        }
      }
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showMenu]);

  return (
    <HeaderWrapper>
      <StyledHeader>
        <ImageCustom src='/images/astro-reseller.png' alt="astro.com.my" width={300} height={0}/>
        <ListGoTo>
          <Link href={'#promotions'}><span>Promotions</span></Link>
          <MenuForMobile onClick={() => setShowMenu(true)}>
            <span>Menu</span>
            <MIcon src='/icons/mobile-menu.svg' alt='menu' width={30} height={0}/>
          </MenuForMobile>
          <LinkV2 href={'#astro-packages'}><span>TV Packages</span></LinkV2>
          <LinkV2 href={'#astro-fibre'}><span>Astro Fibre</span></LinkV2>
          <LinkV2 href={'#contactus'}><span>Contact</span></LinkV2>
        </ListGoTo>
        {showMenu && <DropDownMenu>
          <MLink href={'#astro-packages'}><span>TV Packages</span></MLink>
          <Divider h={1} w={'100%'} color="#ffffffa1" />
          <MLink href={'#astro-fibre'}><span>Astro Fibre</span></MLink>
          <Divider h={1} w={'100%'} color="#ffffffa1" />
          <MLink href={'#contactus'}><span>Contact</span></MLink>
        </DropDownMenu>}
      </StyledHeader>
    </HeaderWrapper>
  )
}