import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HeroImage } from "@/components/hero-image";
import { HeroFooter } from "@/components/hero-footer";
import { PriceTag } from "@/components/price-tag";

import { useFetchData } from "@/hooks/useFetchData";

function App() {
  const { data } = useFetchData();

  return (
    <div className="relative flex h-screen w-full flex-col">
      <HeroImage />

      {data?.nav && <Header navItems={data?.nav} />}

      <div className="absolute left-1/2 top-20 z-30 hidden -translate-x-[33px] md:flex">
        <PriceTag />
      </div>

      <Hero homeContent={data?.home} />

      <HeroFooter />
    </div>
  );
}

export default App;
