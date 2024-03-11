import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="flex h-24 text-foreground items-center w-full justify-between px-12">
      <div className="flex gap-4 items-center">
        <Logo className="h-10" />

        <Button variant="link">Our offerings</Button>
        <Button variant="link">Customer stories</Button>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost">Log in</Button>
        <Button>Get a quote</Button>
      </div>
    </header>
  );
}
