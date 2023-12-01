import { useState } from "react";
import { MainWrap } from "../mainWrap";
import { TabsChip } from "@/components/reusables/tabsChip";
import { TabType } from "@/components/views/viewBadges/badgesMenuTabs";
import { BADGES_TEMPLATE_MENU_TABS } from "@/components/views/viewBadges/viewBadgesTemplates/badgesTemplateMenuTabs";

type BadgesTemplateWrapProps = {
  children?: React.ReactNode;
};

export function BadgesTemplateWrap({ children }: BadgesTemplateWrapProps) {
  const [currentTab, setCurrentTab] = useState<TabType>(getInitialTab);

  function getInitialTab() {
    const newTab = BADGES_TEMPLATE_MENU_TABS.find(
      (tab) => tab.to === location.pathname
    );
    if (newTab) {
      return newTab;
    }
    return BADGES_TEMPLATE_MENU_TABS[0];
  }

  return (
    <MainWrap>
      <div className="text-2xl font-bold mb-5 select-none">Badges</div>
      <TabsChip
        tabs={BADGES_TEMPLATE_MENU_TABS}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="bg-white flex flex-col flex-grow p-5 rounded">
        {children}
      </div>
    </MainWrap>
  );
}
