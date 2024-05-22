import { TabsChip } from "@/components/reusables/tabsChip";
import { CERTIFICATES_EARNERS_MENU_TABS } from "@/pages/certificates/certificatesEarners/certificatesEarnersMenuTabs";
import { TabType } from "@/pages/certificates/certificatesMenuTabs";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MainWrap } from "../../../../components/reusables/mainWrap";
import { EARNERS } from "../data";

type CertificatesEarnerWrapProps = {
  children?: React.ReactNode;
};

export function CertificatesEarnerWrap({
  children,
}: CertificatesEarnerWrapProps) {
  const id = useLocation().pathname.split("/").pop();
  const earner = useMemo(() => EARNERS.find((earner) => earner.id === id), []);
  const updatedCertificatesEarnersMenuTabs = CERTIFICATES_EARNERS_MENU_TABS.map(
    (tab) => {
      return { ...tab, to: tab.to.replace(":id", id!) };
    }
  );
  const [currentTab, setCurrentTab] = useState<TabType>(getInitialTab);

  function getInitialTab() {
    const newTab = updatedCertificatesEarnersMenuTabs.find(
      (tab) => tab.to === location.pathname
    );
    if (newTab) {
      return newTab;
    }
    return updatedCertificatesEarnersMenuTabs[0];
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
        <Link to="/certificates/earners">
          <span className="cursor-pointer text-xs text-cMediumGrey">
            Earners
          </span>
        </Link>
        <span className="text-xs text-cMediumGrey ">
          &nbsp;&nbsp;{">"}&nbsp;&nbsp;
        </span>
        <span className="text-xs"> {earner?.certificateName}</span>
      </div>

      <div className="mb-5 select-none text-2xl font-semibold">
        {earner?.name} - {earner?.certificateName}
      </div>
      <TabsChip
        tabs={updatedCertificatesEarnersMenuTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        {children}
      </div>
    </MainWrap>
  );
}
