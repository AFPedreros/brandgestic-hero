import { HeroCTAButton } from "@/components/hero-cta-button";

export function Hero() {
  return (
    <div className="flex-1 grid grid-cols-2 w-full px-12">
      <div className="col-span-1 flex flex-col gap-12 items-start justify-center">
        <h1 className="text-7xl text-wrap">
          No run-around, <span className="title-accent">just</span> affordable
          life insurance
        </h1>
        <HeroCTAButton />
      </div>
    </div>
  );
}
