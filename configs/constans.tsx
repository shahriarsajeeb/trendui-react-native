import { atom } from "jotai";

export const activeNav = atom<string>("/");

export const NavItems: NavItemsType[] = [
  {
    title: "Docs",
    href: "/docs/introduction",
  },
  {
    title: "Components",
    href: "/docs/components/button",
  },
  {
    title: "Blog",
    href: "/blogs",
  },
  {
    title: "Roadmap",
    href: "https://trendui.featurebase.app/roadmap",
  },
];

export const sideBarRightActive = atom<string | null>(null);
export const sideBarActive = atom<string>("/docs/introduction");
