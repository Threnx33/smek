import { TabsChip } from "@/components/reusables/tabsChip";
import { BADGES_COLLECTION_MENU_TABS } from "@/pages/badges/badgesCollections/badgesCollectionMenuTabs";
import { TabType } from "@/pages/badges/badgesMenuTabs";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MainWrap } from "../../../../components/reusables/mainWrap";
import { COLLECTIONS } from "../data";

type BadgesCollectionWrapProps = {
  children?: React.ReactNode;
};

export function BadgesCollectionWrap({ children }: BadgesCollectionWrapProps) {
  const id = useLocation().pathname.split("/").pop();
  const updatedBadgesCollectionMenuTabs = BADGES_COLLECTION_MENU_TABS.map(
    (tab) => {
      return {
        ...tab,
        to: tab.to.replace(":id", id!),
      };
    }
  );

  const collection = useMemo(
    () => COLLECTIONS.find((collection) => collection.id === id),
    []
  );

  const [currentTab, setCurrentTab] = useState<TabType>(getInitialTab);

  function getInitialTab() {
    const newTab = updatedBadgesCollectionMenuTabs.find(
      (tab) => tab.to === location.pathname
    );
    if (newTab) {
      return newTab;
    }
    return updatedBadgesCollectionMenuTabs[0];
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
        <Link to="/badges/collections">
          <span className="cursor-pointer text-xs text-cMediumGrey">
            Collections
          </span>
        </Link>
        <span className="text-xs text-cMediumGrey ">
          &nbsp;&nbsp;{">"}&nbsp;&nbsp;
        </span>
        <span className="text-xs"> {collection?.collection}</span>
      </div>

      <div className="mb-5 select-none text-2xl font-semibold">
        {collection?.collection}
      </div>
      <TabsChip
        tabs={updatedBadgesCollectionMenuTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        {children}
      </div>
    </MainWrap>
  );
}
