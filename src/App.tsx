import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HeroImage } from "@/components/hero-image";
import { HeroFooter } from "@/components/hero-footer";
import { PriceTag } from "@/components/price-tag";

function App() {
  return (
    <div className="relative flex-col flex h-screen w-full">
      <HeroImage />

      <div className="absolute top-20 left-1/2 -translate-x-[33px] z-30">
        <PriceTag />
      </div>

      <Header />

      <Hero />

      <HeroFooter />
    </div>
  );
}

export default App;
