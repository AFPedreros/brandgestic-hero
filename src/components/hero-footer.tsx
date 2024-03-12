import { WallStreetJournalLogo } from "@/components/wall-street-journal-logo";
import { TechCrunchLogo } from "@/components/tech-crunch-logo";
import { ForbesLogo } from "@/components/forbes-logo";

export function HeroFooter() {
  return (
    <div className="flex flex-col w-full bg-[#F6FCD5]">
      <div className="grid grid-cols-3 h-14 w-1/2">
        <div className="col-span-1 h-full justify-center flex items-center bg-[#D2ABE4]">
          <p className="font-bold">As seen on!</p>
        </div>
      </div>
      <div className="grid grid-cols-3 h-14 w-1/2">
        <div className="col-span-1 h-full justify-center flex items-center">
          <TechCrunchLogo className="h-4" />
        </div>
        <div className="col-span-1 h-full justify-center flex items-center">
          <ForbesLogo className="h-4" />
        </div>
        <div className="col-span-1 h-full justify-center flex items-center">
          <WallStreetJournalLogo className="h-4" />
        </div>
      </div>
    </div>
  );
}
