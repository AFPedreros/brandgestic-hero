import { Button } from "@/components/ui/button";
import { Logo } from "@/components/svgs/logo";
import { NavItem } from "@/components/nav-item";
import { NavItem as NavItemType } from "@/types/index";
import { MobileNavbar } from "@/components/mobile-navbar";

type HeaderProps = {
  navItems?: NavItemType[];
};

export function Header({ navItems }: HeaderProps) {
  return (
    <header className="z-40 flex h-20 w-full items-center justify-between p-6 text-foreground md:px-12">
      <div className="flex items-center gap-12">
        <a href="#">
          <Logo className="h-8" />
        </a>
        <nav className="hidden items-center gap-12 md:flex">
          {navItems?.map((item, index) => (
            <NavItem key={index} href={item.link}>
              {item.title}
            </NavItem>
          ))}
        </nav>
      </div>

      <div className="hidden items-center gap-4 md:flex">
        <Button size="lg" variant="ghost">
          Log in
        </Button>
        <Button size="lg">Get a quote</Button>
      </div>

      <MobileNavbar navItems={navItems} />
    </header>
  );
}
