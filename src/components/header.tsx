import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavItem } from "@/components/nav-item";

export function Header() {
  return (
    <header className="z-40 flex h-20 w-full items-center justify-between px-12 text-foreground">
      <nav className="flex items-center gap-12">
        <a href="#">
          <Logo className="h-8" />
        </a>

        <NavItem href="#">Our offerings</NavItem>
      </nav>

      <div className="flex items-center gap-4">
        <Button size="lg" variant="ghost">
          Log in
        </Button>
        <Button size="lg">Get a quote</Button>
      </div>
    </header>
  );
}
