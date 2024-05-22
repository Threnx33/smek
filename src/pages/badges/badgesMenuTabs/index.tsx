import { BadgesCollections } from "../badgesCollections";
import { BadgesEarners } from "../badgesEarners";
import { BadgesIssue } from "../badgesIssue";
import { BadgesRecommendations } from "../badgesRecommendations";
import { BadgesTemplates } from "../badgesTemplates";

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
    component: <BadgesTemplates />,
  },
  {
    to: "/badges/earners",
    label: "Earners",
    component: <BadgesEarners />,
  },
  {
    to: "/badges/recommendations",
    label: "Recommendations",
    component: <BadgesRecommendations />,
  },
  {
    to: "/badges/collections",
    label: "Collections",
    component: <BadgesCollections />,
  },
  {
    to: "/badges/issue",
    label: "Issue",
    component: <BadgesIssue />,
  },
];
