import { TabsType } from "../../badgesMenuTabs";
import { BadgesTemplatesDetails } from "../badgesTemplatesDetails";
import { BadgesTemplatesHistory } from "../badgesTemplatesHistory";
import { BadgesTemplatesInsights } from "../badgesTemplatesInsights";
import { BadgesTemplateSettings } from "../badgesTemplatesSettings";

export const BADGES_TEMPLATE_MENU_TABS: TabsType = [
  {
    to: "/badges/templates/details/:id",
    label: "Details",
    component: <BadgesTemplatesDetails />,
  },
  {
    to: "/badges/templates/insights/:id",
    label: "Insights",
    component: <BadgesTemplatesInsights />,
  },
  {
    to: "/badges/templates/settings/:id",
    label: "Settings",
    component: <BadgesTemplateSettings />,
  },
  {
    to: "/badges/templates/history/:id",
    label: "History",
    component: <BadgesTemplatesHistory />,
  },
];
