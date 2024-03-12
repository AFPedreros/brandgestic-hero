import { HeroCTAButton } from "@/components/hero-cta-button";

export function Hero() {
  return (
    <div className="animate-fade-right grid w-full flex-1 grid-cols-2 px-12">
      <div className="col-span-1 flex flex-col items-start justify-center gap-12 pr-12">
        <h1 className="text-wrap text-6xl">
          No run-around, <span className="title-accent">just</span> affordable
          life insurance
        </h1>
        <HeroCTAButton />
      </div>
    </div>
  );
}
