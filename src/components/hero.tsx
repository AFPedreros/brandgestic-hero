import { HeroCTAButton } from "@/components/hero-cta-button";
import { HomeContent } from "@/types";
import { PriceTag } from "./price-tag";

type HeroProps = {
  homeContent?: HomeContent;
};

export function Hero({ homeContent }: HeroProps) {
  return (
    <div className="grid w-full flex-1 grid-cols-2 p-6 md:px-12">
      {homeContent && (
        <div className="col-span-2 flex animate-fade-right flex-col items-center justify-center gap-8 md:col-span-1 md:items-start md:gap-12 md:pr-12">
          <div className="flex md:hidden">
            <PriceTag />
          </div>
          <h1
            className="text-wrap text-center text-4xl md:text-left md:text-6xl"
            dangerouslySetInnerHTML={{ __html: homeContent["header-title"] }}
          />
          <HeroCTAButton cta={homeContent["header-cta"]} />
        </div>
      )}
    </div>
  );
}
