import { NavItems } from "@/configs/constans";
import useRouteChange from "@/hooks/useRoutechange";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Navbar = () => {
  const { activeRoute, setActiveRoute } = useRouteChange();
  const pathName = usePathname();

  useEffect(() => {
    if (pathName.startsWith("/docs/components")) {
      setActiveRoute("/docs/components/button");
    } else if (pathName.startsWith("/docs")) {
      setActiveRoute("/docs/introduction"); 
    } else {
      setActiveRoute(pathName);
    }
  }, [pathName, setActiveRoute]);

  return (
    <div className="hidden md:flex gap-4 items-center text-lg">
      {NavItems.map((i: NavItemsType, index: number) => (
        <Link href={i.href} key={index} >
          <button
            className={`${
              i.href === activeRoute ? "text-white " : "text-zinc-400"
            } hover:text-white`}
          >
            {i.title}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
