import { useState } from "react";
import { MainWrap } from "../../../../reusables/mainWrap";
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
      (tab) => tab.to === location.pathname,
    );
    if (newTab) {
      return newTab;
    }
    return BADGES_TEMPLATE_MENU_TABS[0];
  }

  return (
    <MainWrap>
      <div className="mb-5 flex items-center leading-none">
        <Link to="/badges/templates">
          <span className="cursor-pointer text-xs text-cMediumGrey">
            Badges
          </span>
        </Link>
        <span className="text-xs text-cMediumGrey ">
          &nbsp;&nbsp;{">"}&nbsp;&nbsp;
        </span>
        <span className="text-xs"> {template?.templateName}</span>
      </div>
      <div className="mb-5 select-none text-2xl font-semibold">
        {template?.templateName}
      </div>
      <TabsChip
        tabs={BADGES_TEMPLATE_MENU_TABS}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        {children}
      </div>
    </MainWrap>
  );
}
