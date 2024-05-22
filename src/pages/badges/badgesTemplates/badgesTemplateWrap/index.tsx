import { TabsChip } from "@/components/reusables/tabsChip";
import { TabType } from "@/pages/badges/badgesMenuTabs";
import { BADGES_TEMPLATE_MENU_TABS } from "@/pages/badges/badgesTemplates/badgesTemplateMenuTabs";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MainWrap } from "../../../../components/reusables/mainWrap";
import { TEMPLATES } from "../data";

type BadgesTemplateWrapProps = {
  children?: React.ReactNode;
};

export function BadgesTemplateWrap({ children }: BadgesTemplateWrapProps) {
  const id = useLocation().pathname.split("/").pop();
  const updatedBadgesTemplateMenuTabs = BADGES_TEMPLATE_MENU_TABS.map((tab) => {
    return {
      ...tab,
      to: tab.to.replace(":id", id!),
    };
  });

  const template = useMemo(
    () => TEMPLATES.find((template) => template.id === id),
    []
  );
  const [currentTab, setCurrentTab] = useState<TabType>(getInitialTab);

  function getInitialTab() {
    const newTab = updatedBadgesTemplateMenuTabs.find(
      (tab) => tab.to === location.pathname
    );
    if (newTab) {
      return newTab;
    }
    return updatedBadgesTemplateMenuTabs[0];
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
        tabs={updatedBadgesTemplateMenuTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        {children}
      </div>
    </MainWrap>
  );
}
