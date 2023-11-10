import { MainWrapper } from "@/components/uiComponents/mainWrapper";
import { BADGE_MENU_TABS, TabType } from "./badgeMenuTabs";
import { useState } from "react";
import { TabsChip } from "@/components/reusables/tabsChip";

export function ViewBadges() {
  const [currentTab, setCurrentTab] = useState<TabType>(BADGE_MENU_TABS[0]);

  return (
    <MainWrapper>
      <div className="text-2xl font-bold mb-5 select-none">Badges</div>
      <TabsChip
        tabs={BADGE_MENU_TABS}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="bg-white p-5 rounded">{currentTab.component}</div>
    </MainWrapper>
  );
}
