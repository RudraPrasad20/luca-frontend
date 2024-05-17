import { CardHoverEffectDemo } from "@/components/cards";
import Footer from "@/components/footer";
import { BentoGridDemo } from "@/components/grid";
import { HeroHighlightDemo } from "@/components/hero";
import Investors from "@/components/investors";
import { InfiniteMovingCardsDemo } from "@/components/moving-cards";

export default function Home() {
  return (
    <>
    <HeroHighlightDemo/>
    <CardHoverEffectDemo/>
    <InfiniteMovingCardsDemo/>
    <p className="text-neutral-500 max-w-2xl mx-auto text-4xl font-bold  my-10 text-center relative z-10">
    Luca is a platform built for operators
</p>
    <BentoGridDemo/>
    <Investors/>
    <Footer/>
    </>
  );
}
