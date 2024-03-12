import { WallStreetJournalLogo } from "@/components/svgs/wall-street-journal-logo";
import { TechCrunchLogo } from "@/components/svgs/tech-crunch-logo";
import { ForbesLogo } from "@/components/svgs/forbes-logo";

export function HeroFooter() {
  return (
    <div className="flex w-full flex-col bg-accent">
      <div className="grid h-16 w-full grid-cols-3 md:w-1/2">
        <div className="col-span-1 flex h-full items-center justify-center bg-secondary">
          <p className="font-bold text-accent">As seen on!</p>
        </div>

        <div className="relative col-span-1">
          <div
            className="flex h-full w-full -translate-x-[1px] items-center justify-center bg-secondary"
            style={{ clipPath: "polygon(0 0, 0% 100%, 60px 100%)" }}
          />
          <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-secondary" />
        </div>

        <div className="relative col-span-1 flex items-end justify-center">
          <div className="absolute left-0 top-1/2 h-1 w-1/2 -translate-y-1/2 bg-secondary" />

          <div className="absolute left-1/2 top-1/2 h-[calc(50%-4px)] w-1 -translate-x-1/2 -translate-y-0.5 bg-secondary" />
          <div className="h-0 w-0 rotate-180 border-x-8 border-b-[16px] border-x-transparent border-b-secondary" />
        </div>
      </div>

      <div className="grid h-16 w-full grid-cols-3 p-2 md:w-1/2 md:p-0">
        <div className="col-span-1 flex h-full items-center justify-center">
          <TechCrunchLogo className="h-4" />
        </div>
        <div className="col-span-1 flex h-full items-center justify-center">
          <ForbesLogo className="h-4" />
        </div>
        <div className="col-span-1 flex h-full items-center justify-center">
          <WallStreetJournalLogo className="h-4" />
        </div>
      </div>
    </div>
  );
}
