import { useState } from "react";
import { MainWrap } from "../../../../reusables/mainWrap";
import { TabsChip } from "@/components/reusables/tabsChip";
import { TabType } from "@/components/views/viewBadges/badgesMenuTabs";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";
import { BADGES_EARNERS_MENU_TABS } from "@/components/views/viewBadges/viewBadgesEarners/badgesEarnersMenuTabs";

type BadgesEarnerWrapProps = {
  children?: React.ReactNode;
};

export function BadgesEarnerWrap({ children }: BadgesEarnerWrapProps) {
  const [currentTab, setCurrentTab] = useState<TabType>(getInitialTab);
  const earner = useSelector((state: RootState) => state.page.earner);

  function getInitialTab() {
    const newTab = BADGES_EARNERS_MENU_TABS.find(
      (tab) => tab.to === location.pathname,
    );
    if (newTab) {
      return newTab;
    }
    return BADGES_EARNERS_MENU_TABS[0];
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
        tabs={BADGES_EARNERS_MENU_TABS}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        {children}
      </div>
    </MainWrap>
  );
}
