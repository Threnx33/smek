import { TabsChip } from "@/components/reusables/tabsChip";
import { BADGES_EARNERS_MENU_TABS } from "@/pages/badges/badgesEarners/badgesEarnersMenuTabs";
import { TabType } from "@/pages/badges/badgesMenuTabs";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MainWrap } from "../../../../components/reusables/mainWrap";
import { EARNERS } from "../data";

type BadgesEarnerWrapProps = {
  children?: React.ReactNode;
};

export function BadgesEarnerWrap({ children }: BadgesEarnerWrapProps) {
  const id = useLocation().pathname.split("/").pop();
  const earner = useMemo(() => EARNERS.find((earner) => earner.id === id), []);
  const updatedBadgesEarnersMenuTabs = BADGES_EARNERS_MENU_TABS.map((tab) => {
    return { ...tab, to: tab.to.replace(":id", id!) };
  });
  const [currentTab, setCurrentTab] = useState<TabType>(getInitialTab);

  function getInitialTab() {
    const newTab = updatedBadgesEarnersMenuTabs.find(
      (tab) => tab.to === location.pathname
    );
    if (newTab) {
      return newTab;
    }
    return updatedBadgesEarnersMenuTabs[0];
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
        <Link to="/badges/earners">
          <span className="cursor-pointer text-xs text-cMediumGrey">
            Earners
          </span>
        </Link>
        <span className="text-xs text-cMediumGrey ">
          &nbsp;&nbsp;{">"}&nbsp;&nbsp;
        </span>
        <span className="text-xs"> {earner?.badgeName}</span>
      </div>

      <div className="mb-5 select-none text-2xl font-semibold">
        {earner?.name} - {earner?.badgeName}
      </div>
      <TabsChip
        tabs={updatedBadgesEarnersMenuTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        {children}
      </div>
    </MainWrap>
  );
}
