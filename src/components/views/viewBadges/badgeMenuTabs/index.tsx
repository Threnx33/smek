import { BadgeEarners } from "../badgeEarners";
import { BadgeTemplates } from "../badgeTemplates";
import { COLUMNS, TEMPLATES } from "../badgeTemplates/data";

export type TabType = {
  label: string;
  component: React.ReactNode;
};

export type TabsType = TabType[];

export const BADGE_MENU_TABS: TabsType = [
  {
    label: "Templates",
    component: <BadgeTemplates columns={COLUMNS} data={TEMPLATES} />,
  },
  {
    label: "Earners",
    component: <BadgeEarners columns={COLUMNS} data={TEMPLATES} />,
  },
  {
    label: "Recommendations",
    component: <BadgeTemplates columns={COLUMNS} data={TEMPLATES} />,
  },
  {
    label: "Collections",
    component: <BadgeTemplates columns={COLUMNS} data={TEMPLATES} />,
  },
  {
    label: "Issue",
    component: <BadgeTemplates columns={COLUMNS} data={TEMPLATES} />,
  },
  {
    label: "Drafts",
    component: <BadgeTemplates columns={COLUMNS} data={TEMPLATES} />,
  },
];
