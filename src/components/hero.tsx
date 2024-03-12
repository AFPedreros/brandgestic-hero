import { HeroCTAButton } from "@/components/hero-cta-button";

type HeroProps = {
  title: string;
  cta: string;
};

export function Hero({ title, cta }: HeroProps) {
  return (
    <div className="grid w-full flex-1 animate-fade-right grid-cols-2 px-12">
      <div className="col-span-1 flex flex-col items-start justify-center gap-12 pr-12">
        <h1
          className="text-wrap text-6xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <HeroCTAButton cta={cta} />
      </div>
    </div>
  );
}
