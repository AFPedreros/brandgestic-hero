import { NavItem as NavItemType } from "@/types/index";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/menu";

type MobileNavbarProps = {
  navItems?: NavItemType[];
};
export function MobileNavbar({ navItems }: MobileNavbarProps) {
  return (
    <Sheet>
      <SheetTrigger
        className="block transition hover:opacity-75 md:hidden"
        aria-label="Abre el menú"
      >
        <Menu className="size-7" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-background p-0">
        <div className="flex h-full flex-col overflow-y-auto border-r bg-background pt-16 shadow-sm">
          {navItems?.map((item) => (
            <a
              className="border-b py-4 pl-6 underline-offset-1 hover:underline"
              href={item.link}
            >
              {item.title}
            </a>
          ))}

          <div className="flex flex-col items-start gap-4 px-6 py-4">
            <Button size="lg" variant="outline">
              Log in
            </Button>
            <Button size="lg" variant="secondary">
              Get a quote
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
