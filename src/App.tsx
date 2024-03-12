import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HeroImage } from "@/components/hero-image";
import { HeroFooter } from "@/components/hero-footer";
import { PriceTag } from "@/components/price-tag";

import { useFetchData } from "@/hooks/useFetchData";

function App() {
  const { data } = useFetchData();

  console.log(data);
  return (
    <div className="relative flex h-screen w-full flex-col">
      <HeroImage />

      <div className="absolute left-1/2 top-20 z-30 -translate-x-[33px]">
        <PriceTag />
      </div>

      {data?.nav && <Header navItems={data?.nav} />}

      <Hero homeContent={data?.home} />

      <HeroFooter />
    </div>
  );
}

export default App;
