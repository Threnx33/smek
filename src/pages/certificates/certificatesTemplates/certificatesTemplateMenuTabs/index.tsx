import { TabsType } from "../../certificatesMenuTabs";
import { CertificatesTemplatesDetails } from "../certificatesTemplatesDetails";
import { CertificatesTemplatesHistory } from "../certificatesTemplatesHistory";
import { CertificatesTemplatesInsights } from "../certificatesTemplatesInsights";
import { CertificatesTemplateSettings } from "../certificatesTemplatesSettings";

export const CERTIFICATES_TEMPLATE_MENU_TABS: TabsType = [
  {
    to: "/certificates/templates/details/:id",
    label: "Details",
    component: <CertificatesTemplatesDetails />,
  },
  {
    to: "/certificates/templates/insights/:id",
    label: "Insights",
    component: <CertificatesTemplatesInsights />,
  },
  {
    to: "/certificates/templates/settings/:id",
    label: "Settings",
    component: <CertificatesTemplateSettings />,
  },
  {
    to: "/certificates/templates/history/:id",
    label: "History",
    component: <CertificatesTemplatesHistory />,
  },
];
