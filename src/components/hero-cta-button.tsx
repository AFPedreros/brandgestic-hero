import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function HeroCTAButton() {
  return (
    <Button
      size="lg"
      className="h-14 w-fit bg-primary px-6 py-2 text-primary-foreground shadow-[4px_4px_0px_#D2ABE4] transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-primary hover:shadow-none"
    >
      <Avatar className="mr-4 size-9">
        <AvatarImage src="/images/avatar.jpg" />
      </Avatar>
      Talk to an agent today!
    </Button>
  );
}
