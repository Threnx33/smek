import { useState } from "react";
import { MainWrap } from "../mainWrap";
import { TabsChip } from "@/components/reusables/tabsChip";
import { TabType } from "@/components/views/viewBadges/badgesMenuTabs";
import { BADGES_TEMPLATE_MENU_TABS } from "@/components/views/viewBadges/viewBadgesTemplates/badgesTemplateMenuTabs";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";

type BadgesTemplateWrapProps = {
  children?: React.ReactNode;
};

export function BadgesTemplateWrap({ children }: BadgesTemplateWrapProps) {
  const [currentTab, setCurrentTab] = useState<TabType>(getInitialTab);
  const template = useSelector((state: RootState) => state.page.template);

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
      <div className="flex mb-5 items-center">
        <Link to="/badges/templates">
          <span className="text-cMediumGrey text-xs cursor-pointer">
            Badges
          </span>
        </Link>
        <span className="text-cMediumGrey text-xs ">
          &nbsp;&nbsp;{">"}&nbsp;&nbsp;
        </span>
        <span className="text-xs"> {template?.templateName}</span>
      </div>
      <div className="text-2xl font-bold mb-5 select-none">
        {template?.templateName}
      </div>
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
