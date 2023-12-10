import { cn } from "@/lib/utils";
import { useState } from "react";

export const ANALYTICS_DATE_MENU_TABS = [
  "12 months",
  "6 months",
  "3 months",
  "This month",
  "Past year",
  "All time",
];

export function AnalyticsDateTabsChip() {
  const [currentTab, setCurrentTab] = useState(ANALYTICS_DATE_MENU_TABS[0]);

  return (
    <div className="flex ">
      {ANALYTICS_DATE_MENU_TABS.map((item, i) => (
        <div
          key={item}
          className={cn(
            "flex items-center px-3 py-2 border cursor-pointer",
            currentTab === item
              ? "bg-main text-white hover:bg-main-accent"
              : "hover:bg-accent",
            i === 0 && "rounded-l-lg",
            i === ANALYTICS_DATE_MENU_TABS.length - 1 && "rounded-r-lg"
          )}
          onClick={() => setCurrentTab(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
