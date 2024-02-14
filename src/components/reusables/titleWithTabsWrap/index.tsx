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
      <div className="mb-5 select-none text-2xl font-semibold">{title}</div>
      <TabsChip
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        {children}
      </div>
    </MainWrap>
  );
}
