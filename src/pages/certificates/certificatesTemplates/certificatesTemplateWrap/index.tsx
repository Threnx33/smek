import { TabsChip } from "@/components/reusables/tabsChip";
import { TabType } from "@/pages/certificates/certificatesMenuTabs";
import { CERTIFICATES_TEMPLATE_MENU_TABS } from "@/pages/certificates/certificatesTemplates/certificatesTemplateMenuTabs";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MainWrap } from "../../../../components/reusables/mainWrap";
import { TEMPLATES } from "../data";

type CertificatesTemplateWrapProps = {
  children?: React.ReactNode;
};

export function CertificatesTemplateWrap({
  children,
}: CertificatesTemplateWrapProps) {
  const id = useLocation().pathname.split("/").pop();
  const updatedCertificatesTemplateMenuTabs =
    CERTIFICATES_TEMPLATE_MENU_TABS.map((tab) => {
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
    const newTab = updatedCertificatesTemplateMenuTabs.find(
      (tab) => tab.to === location.pathname
    );
    if (newTab) {
      return newTab;
    }
    return updatedCertificatesTemplateMenuTabs[0];
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
        <span className="text-xs"> {template?.templateName}</span>
      </div>
      <div className="mb-5 select-none text-2xl font-semibold">
        {template?.templateName}
      </div>
      <TabsChip
        tabs={updatedCertificatesTemplateMenuTabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        {children}
      </div>
    </MainWrap>
  );
}
