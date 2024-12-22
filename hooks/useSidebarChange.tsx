import { sideBarActive } from "@/configs/constans";
import { useAtom } from "jotai";

const useSidebarChange = () => {
  const [activeRoute, setActiveRoute] = useAtom(sideBarActive);
  return { activeRoute, setActiveRoute };
};
export default useSidebarChange;
