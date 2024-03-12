import { WallStreetJournalLogo } from "@/components/wall-street-journal-logo";
import { TechCrunchLogo } from "@/components/tech-crunch-logo";
import { ForbesLogo } from "@/components/forbes-logo";

export function HeroFooter() {
  return (
    <div className="flex w-full flex-col bg-accent">
      <div className="grid h-14 w-1/2 grid-cols-3">
        <div className="col-span-1 flex h-full items-center justify-center bg-secondary">
          <p className="font-bold">As seen on!</p>
        </div>
      </div>
      <div className="grid h-14 w-1/2 grid-cols-3">
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
