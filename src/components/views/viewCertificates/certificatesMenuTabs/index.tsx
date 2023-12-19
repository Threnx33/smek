import { ViewBadgesEarners } from "../viewCertificatesEarners";
import { ViewBadgesRecommendations } from "../viewCertificatesRecommendations";
import { ViewBadgesCollections } from "../viewCertificatesCollections";
import { ViewBadgesIssue } from "../viewCertificatesIssue";
import { ViewCertificatesTemplates } from "../viewCertificatesTemplates";

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
    component: <ViewCertificatesTemplates />,
  },
  {
    to: "/certificates/earners",
    label: "Earners",
    component: <ViewBadgesEarners />,
  },
  {
    to: "/certificates/recommendations",
    label: "Recommendations",
    component: <ViewBadgesRecommendations />,
  },
  {
    to: "/certificates/collections",
    label: "Collections",
    component: <ViewBadgesCollections />,
  },
  {
    to: "/certificates/issue",
    label: "Issue",
    component: <ViewBadgesIssue />,
  },
];
