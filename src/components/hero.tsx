import { HeroCTAButton } from "@/components/hero-cta-button";
import { HomeContent } from "@/types";

type HeroProps = {
  homeContent?: HomeContent;
};

export function Hero({ homeContent }: HeroProps) {
  return (
    <div className="grid w-full flex-1 grid-cols-2 px-12">
      {homeContent && (
        <div className="col-span-1 flex animate-fade-right flex-col items-start justify-center gap-12 pr-12">
          <h1
            className="text-wrap text-6xl"
            dangerouslySetInnerHTML={{ __html: homeContent["header-title"] }}
          />
          <HeroCTAButton cta={homeContent["header-cta"]} />
        </div>
      )}
    </div>
  );
}
