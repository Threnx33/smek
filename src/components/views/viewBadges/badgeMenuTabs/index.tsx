import { BadgeEarners } from "../badgeEarners";
import { EARNERS, EARNERS_COLUMNS } from "../badgeEarners/data";
import { BadgeTemplates } from "../badgeTemplates";
import { TEMPLATES_COLUMNS, TEMPLATES } from "../badgeTemplates/data";

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
    component: <BadgeTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />,
  },
  {
    to: "/badges/earners",
    label: "Earners",
    component: <BadgeEarners columns={EARNERS_COLUMNS} data={EARNERS} />,
  },
  {
    to: "/badges/templates",
    label: "Recommendations",
    component: <BadgeTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />,
  },
  {
    to: "/badges/templates",
    label: "Collections",
    component: <BadgeTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />,
  },
  {
    to: "/badges/templates",
    label: "Issue",
    component: <BadgeTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />,
  },
  {
    to: "/badges/templates",
    label: "Drafts",
    component: <BadgeTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />,
  },
];
