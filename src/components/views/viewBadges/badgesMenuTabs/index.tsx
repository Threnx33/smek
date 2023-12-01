import { ViewBadgesTemplates } from "../viewBadgesTemplates";
import { ViewBadgesEarners } from "../viewBadgesEarners";
import { ViewBadgesRecommendations } from "../viewBadgesRecommendations";
import { ViewBadgesCollections } from "../viewBadgesCollections";
import { ViewBadgesIssue } from "../viewBadgesIssue";

export type TabType = {
  to: string;
  label: string;
  component: React.ReactNode;
};

export type TabsType = TabType[];

export const BADGES_MENU_TABS: TabsType = [
  {
    to: "/badges/templates",
    label: "Templates",
    component: <ViewBadgesTemplates />,
  },
  {
    to: "/badges/earners",
    label: "Earners",
    component: <ViewBadgesEarners />,
  },
  {
    to: "/badges/recommendations",
    label: "Recommendations",
    component: <ViewBadgesRecommendations />,
  },
  {
    to: "/badges/collections",
    label: "Collections",
    component: <ViewBadgesCollections />,
  },
  {
    to: "/badges/issue",
    label: "Issue",
    component: <ViewBadgesIssue />,
  },
];
