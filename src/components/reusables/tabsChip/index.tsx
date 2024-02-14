import { Separator } from "@/components/ui/separator";
import {
  TabType,
  TabsType,
} from "@/components/views/viewBadges/badgesMenuTabs";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type TabsChipProps = {
  tabs: TabsType;
  currentTab: TabType;
  setCurrentTab: React.Dispatch<React.SetStateAction<TabType>>;
};

export function TabsChip({ tabs, currentTab, setCurrentTab }: TabsChipProps) {
  const ref = useRef<HTMLAnchorElement>(null); // Create a ref

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentTab]);

  return (
    <div className="mb-4 overflow-x-auto sm:overflow-x-clip">
      <div className="mb-3 flex flex-row gap-7">
        {tabs.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            ref={currentTab.label === item.label ? ref : null}
          >
            <span
              className={`cursor-pointer select-none text-sm font-medium ${
                currentTab.label === item.label
                  ? "text-main underline decoration-2 underline-offset-[1.1rem] "
                  : ""
              }`}
              onClick={() => setCurrentTab(item)}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
      <Separator className="" />
    </div>
  );
}
