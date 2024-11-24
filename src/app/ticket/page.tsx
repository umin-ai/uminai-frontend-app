'use client';
import { Siders } from "@ap/components/FixedSiders";
import { MidCard } from "@ap/components/MidCard";
import { MidCardTest } from "@ap/components/MidCardTest";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-[100vh]">
      <Siders />
      <MidCardTest />
    </div>
  )
}