import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/components/utils/utils";
import { useState } from "react";

export const ANALYTICS_DATE_MENU_TABS = [
  { value: "12Months", label: "12 months" },
  { value: "6Months", label: "6 months" },
  { value: "3Months", label: "3 months" },
  { value: "thisMonth", label: "This month" },
  { value: "pastYear", label: "Past year" },
  { value: "allTime", label: "All time" },
];

export function AnalyticsDateTabsChip() {
  const [currentTab, setCurrentTab] = useState(ANALYTICS_DATE_MENU_TABS[0]);

  return (
    <>
      <div className="flex hidden xl:flex">
        {ANALYTICS_DATE_MENU_TABS.map((item, i) => (
          <div
            key={item.value}
            className={cn(
              "flex cursor-pointer items-center border px-3 py-2",
              currentTab === item
                ? "bg-main text-white hover:bg-main-accent"
                : "hover:bg-accent",
              i === 0 && "rounded-l-lg",
              i === ANALYTICS_DATE_MENU_TABS.length - 1 && "rounded-r-lg"
            )}
            onClick={() => setCurrentTab(item)}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="flex xl:hidden">
        <Select defaultValue="12Months">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {ANALYTICS_DATE_MENU_TABS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
              <SelectItem key="customDate" value="customDate">
                Custom date
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
