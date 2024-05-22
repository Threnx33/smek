import { CertificatesCollections } from "../certificatesCollections";
import { CertificatesEarners } from "../certificatesEarners";
import { CertificatesIssue } from "../certificatesIssue";
import { CertificatesRecommendations } from "../certificatesRecommendations";
import { CertificatesTemplates } from "../certificatesTemplates";

export type TabType = {
  to: string;
  label: string;
  component: React.ReactNode;
};

export type TabsType = TabType[];

export const CERTIFICATES_MENU_TABS: TabsType = [
  {
    to: "/certificates/templates",
    label: "Templates",
    component: <CertificatesTemplates />,
  },
  {
    to: "/certificates/earners",
    label: "Earners",
    component: <CertificatesEarners />,
  },
  {
    to: "/certificates/recommendations",
    label: "Recommendations",
    component: <CertificatesRecommendations />,
  },
  {
    to: "/certificates/collections",
    label: "Collections",
    component: <CertificatesCollections />,
  },
  {
    to: "/certificates/issue",
    label: "Issue",
    component: <CertificatesIssue />,
  },
];
