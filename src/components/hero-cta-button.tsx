import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function HeroCTAButton() {
  return (
    <Button
      size="lg"
      className="w-fit h-14 bg-[#EAFF6C] px-6 py-2 text-black shadow-[4px_4px_0px_#D2ABE4] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-[#EAFF6C] hover:shadow-none"
    >
      <Avatar className="size-9 mr-4">
        <AvatarImage src="/images/avatar.jpg" />
      </Avatar>
      Talk to an agent today!
    </Button>
  );
}
