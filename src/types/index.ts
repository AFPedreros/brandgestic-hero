export type ApiResponse = {
  nav: NavItem[];
  home: HomeContent;
};

export type NavItem = {
  title: string;
  link: string;
};

export type HomeContent = {
  "header-title": string;
  "header-cta": string;
};
