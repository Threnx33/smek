import { Separator } from "@/components/ui/separator";
import {
  TabType,
  TabsType,
} from "@/components/views/viewBadges/badgesMenuTabs";
import { Link } from "react-router-dom";

type TabsChipProps = {
  tabs: TabsType;
  currentTab: TabType;
  setCurrentTab: React.Dispatch<React.SetStateAction<TabType>>;
};

export function TabsChip({ tabs, currentTab, setCurrentTab }: TabsChipProps) {
  return (
    <div className="mb-4">
      <div className="flex flex-row gap-7 mb-3 ">
        {tabs.map((item) => (
          <Link key={item.label} to={item.to}>
            <span
              className={`text-sm font-semibold cursor-pointer select-none ${
                currentTab.label === item.label
                  ? "text-main  underline-offset-[1.1rem] underline decoration-2 "
                  : ""
              }`}
              onClick={() => setCurrentTab(item)}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
      <Separator />
    </div>
  );
}
