import { activeNav } from "@/configs/constans";
import { useAtom } from "jotai";

const useRouteChange = () => {
  const [activeRoute, setActiveRoute] = useAtom(activeNav);
  return { activeRoute, setActiveRoute };
};
export default useRouteChange;
