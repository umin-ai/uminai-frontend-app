'use client';
import { useEffect, useState } from "react";
import styled from "styled-components";

const HovContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px); /* Responsive columns */
  // padding: 0 84px 0 339px;
  gap: 5px; /* Spacing between blocks */
  width: 100vw; /* Full width of the viewport */
  height: 100vh; /* Full height of the viewport */
  margin: 0;
  pointer-events: all;
  z-index: 1;
  position: absolute;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 100px);
    // padding: 0 20px 0 100px;
    justify-content: end;
  }
`;

const HovBlock = styled.div`
  display: flex;
    width: 150px; /* Fixed width */
  height: 45px; /* Fixed height */
  justify-content: center;

  align-items: center;
  border: 1px solid #333;
  background: linear-gradient(to right, #E7AE35 0%, #E7AE35 50%, #575757 50%, #575757 100%);
  background-size: 200%; /* Double the size for smooth animation */
  background-position: 100% 0%; /* Initial position */
  transition: background-position 0.5s ease, color 0.5s ease;
  // cursor: pointer;
  font-weight: 600;
  color: #707070;
  &:hover {
    background-position: 0% 0%; /* Move background to the right */
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 30px;
    font-size: 14px;
  }
`;

const Repeater = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [divs, setDivs] = useState<number[]>([]);

  useEffect(() => {
    // Calculate the number of divs based on screen size
    const calculateDivs = () => {
      const divWidth = 100; // Width of each block
      const divHeight = 45; // Height of each block
      const cols = Math.floor(window.innerWidth / divWidth); // Number of columns
      const rows = Math.ceil(window.innerHeight / divHeight); // Number of rows needed
      const totalRequired = cols * rows;
      console.log('cols', cols);
      console.log('totalRequired', totalRequired);
      setDivs(Array(totalRequired).fill(0)); // Fill with placeholder divs
    };

    // Initial calculation
    calculateDivs();

    // Recalculate on window resize
    window.addEventListener("resize", calculateDivs);
    return () => {
      window.removeEventListener("resize", calculateDivs);
    };
  }, []);
  return (
    <>
    <HovContainer>
      {divs.map((_, index) => (
        <HovBlock key={index} className="block">HODL100K</HovBlock>
      ))}
    </HovContainer>
    {children}
    </>
  );
}

export default Repeater;