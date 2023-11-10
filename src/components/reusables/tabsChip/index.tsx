import { Separator } from "@/components/ui/separator";
import { TabType, TabsType } from "@/components/views/viewBadges/badgeMenuTabs";

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
          <span
            key={item.label}
            className={`text-sm font-semibold border-offse cursor-pointer select-none ${
              currentTab.label === item.label
                ? "text-main  underline-offset-[1rem] underline decoration-2 "
                : ""
            }`}
            onClick={() => setCurrentTab(item)}
          >
            {item.label}
          </span>
        ))}
      </div>
      <Separator />
    </div>
  );
}
