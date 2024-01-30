import { useState } from "react";
import { TabsChip } from "@/components/reusables/tabsChip";
import {
  TabType,
  TabsType,
} from "@/components/views/viewBadges/badgesMenuTabs";
import { MainWrap } from "../mainWrap";

type TitleWithTabsWrapProps = {
  children?: React.ReactNode;
  title: string;
  tabs: TabsType;
};

export function TitleWithTabsWrap({
  children,
  title,
  tabs,
}: TitleWithTabsWrapProps) {
  const [currentTab, setCurrentTab] = useState<TabType>(getInitialTab);

  function getInitialTab() {
    const newTab = tabs.find((tab) => tab.to === location.pathname);
    if (newTab) {
      return newTab;
    }
    return tabs[0];
  }

  return (
    <MainWrap>
      <div className="text-2xl font-semibold mb-5 select-none">{title}</div>
      <TabsChip
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="bg-white flex flex-col flex-grow p-6 rounded">
        {children}
      </div>
    </MainWrap>
  );
}
