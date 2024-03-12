import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="flex z-40 h-20 w-full items-center justify-between px-12 text-foreground">
      <div className="flex items-center gap-4">
        <Logo className="h-10" />

        <Button variant="link">Our offerings</Button>
        <Button variant="link">Customer stories</Button>
      </div>

      <div className="flex items-center gap-4">
        <Button size="lg" variant="ghost">
          Log in
        </Button>
        <Button size="lg">Get a quote</Button>
      </div>
    </header>
  );
}
