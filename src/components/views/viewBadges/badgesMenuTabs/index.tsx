import { EARNERS, EARNERS_COLUMNS } from "../viewBadgesEarners/data";
import { TEMPLATES_COLUMNS, TEMPLATES } from "../viewBadgesTemplates/data";
import { ViewBadgesTemplates } from "../viewBadgesTemplates";
import { ViewBadgesEarners } from "../viewBadgesEarners";
import { ViewBadgesRecommendations } from "../viewBadgesRecommendations";
import {
  RECOMMENDATIONS,
  RECOMMENDATIONS_COLUMNS,
} from "../viewBadgesRecommendations/data";
import { ViewBadgesCollections } from "../viewBadgesCollections";
import {
  COLLECTIONS,
  COLLECTIONS_COLUMNS,
} from "../viewBadgesCollections/data";
import { ViewBadgesIssue } from "../viewBadgesIssue";

export type TabType = {
  to: string;
  label: string;
  component: React.ReactNode;
};

export type TabsType = TabType[];

export const BADGE_MENU_TABS: TabsType = [
  {
    to: "/badges/templates",
    label: "Templates",
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
  {
    to: "/badges/earners",
    label: "Earners",
    component: <ViewBadgesEarners columns={EARNERS_COLUMNS} data={EARNERS} />,
  },
  {
    to: "/badges/recommendations",
    label: "Recommendations",
    component: (
      <ViewBadgesRecommendations
        columns={RECOMMENDATIONS_COLUMNS}
        data={RECOMMENDATIONS}
      />
    ),
  },
  {
    to: "/badges/collections",
    label: "Collections",
    component: (
      <ViewBadgesCollections columns={COLLECTIONS_COLUMNS} data={COLLECTIONS} />
    ),
  },
  {
    to: "/badges/issue",
    label: "Issue",
    component: <ViewBadgesIssue />,
  },
];
