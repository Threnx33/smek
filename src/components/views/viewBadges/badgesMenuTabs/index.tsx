import { EARNERS, EARNERS_COLUMNS } from "../viewBadgesEarners/data";
import { TEMPLATES_COLUMNS, TEMPLATES } from "../viewBadgesTemplates/data";
import { ViewBadgesTemplates } from "../viewBadgesTemplates";
import { ViewBadgesEarners } from "../viewBadgesEarners";

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
    to: "/badges/templates",
    label: "Recommendations",
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
  {
    to: "/badges/templates",
    label: "Collections",
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
  {
    to: "/badges/templates",
    label: "Issue",
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
  {
    to: "/badges/templates",
    label: "Drafts",
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
];
