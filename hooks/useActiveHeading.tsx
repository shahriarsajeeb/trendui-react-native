import { sideBarRightActive } from "@/configs/constans";
import { useAtom } from "jotai";

const useActiveHeading = () => {
  const [activeSection, setActiveSection] = useAtom<string | null>(
    sideBarRightActive,
  );
  return { activeSection, setActiveSection };
};

export default useActiveHeading;
