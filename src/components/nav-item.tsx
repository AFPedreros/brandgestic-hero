import React from "react";

type NavItemProps = {
  children: React.ReactNode;
  href: string;
};

export function NavItem({ children, href }: NavItemProps) {
  return (
    <a
      className="group font-bold transition-all duration-300 ease-in-out"
      href={href}
    >
      <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-300 ease-out group-hover:bg-[length:100%_2px]">
        {children}
      </span>
    </a>
  );
}
