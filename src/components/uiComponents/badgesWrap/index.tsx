import { useState } from "react";
import { MainWrap } from "../MainWrap";
import { TabsChip } from "@/components/reusables/tabsChip";
import {
  BADGE_MENU_TABS,
  TabType,
} from "@/components/views/viewBadges/badgesMenuTabs";

type BadgesWrapProps = {
  children?: React.ReactNode;
};

export function BadgesWrap({ children }: BadgesWrapProps) {
  const [currentTab, setCurrentTab] = useState<TabType>(BADGE_MENU_TABS[0]);

  return (
    <MainWrap>
      <div className="text-2xl font-bold mb-5 select-none">Badges</div>
      <TabsChip
        tabs={BADGE_MENU_TABS}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="bg-white p-5 rounded">{children}</div>
    </MainWrap>
  );
}
