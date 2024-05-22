import { TabsChip } from "@/components/reusables/tabsChip";
import { CERTIFICATES_COLLECTION_MENU_TABS } from "@/pages/certificates/certificatesCollections/certificatesCollectionMenuTabs";
import { TabType } from "@/pages/certificates/certificatesMenuTabs";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MainWrap } from "../../../../components/reusables/mainWrap";
import { COLLECTIONS } from "../data";

type CertificatesCollectionWrapProps = {
  children?: React.ReactNode;
};

export function CertificatesCollectionWrap({
  children,
}: CertificatesCollectionWrapProps) {
  const id = useLocation().pathname.split("/").pop();
  const updatedCertificatesCollectionMenuTabs =
    CERTIFICATES_COLLECTION_MENU_TABS.map((tab) => {
      return {
        ...tab,
        to: tab.to.replace(":id", id!),
      };
    });

  const collection = useMemo(
    () => COLLECTIONS.find((collection) => collection.id === id),
    []
  );

  const [currentTab, setCurrentTab] = useState<TabType>(getInitialTab);

  function getInitialTab() {
    const newTab = updatedCertificatesCollectionMenuTabs.find(
      (tab) => tab.to === location.pathname
    );
    if (newTab) {
      return newTab;
    }
    return updatedCertificatesCollectionMenuTabs[0];
  }

  return (
    <MainWrap>
      <div className="mb-5 flex items-center leading-none">
        <Link to="/certificates/templates">
          <span className="cursor-pointer text-xs text-cMediumGrey">
            Certificates
          </span>
        </Link>
        <span className="text-xs text-cMediumGrey ">
          &nbsp;&nbsp;{">"}&nbsp;&nbsp;
        </span>
        <Link to="/certificates/collections">
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
        tabs={updatedCertificatesCollectionMenuTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        {children}
      </div>
    </MainWrap>
  );
}
