import { TabsType } from "../../badgesMenuTabs";
import { ViewBadgesTemplatesDetails } from "../viewBadgesTemplatesDetails";
import { ViewBadgesTemplatesHistory } from "../viewBadgesTemplatesHistory";
import { ViewBadgesTemplatesInsights } from "../viewBadgesTemplatesInsights";
import { BadgesTemplateSettings } from "../viewBadgesTemplatesSettings";

export const BADGES_TEMPLATE_MENU_TABS: TabsType = [
  {
    to: "/badges/templates/details",
    label: "Details",
    component: <ViewBadgesTemplatesDetails />,
  },
  {
    to: "/badges/templates/insights",
    label: "Insights",
    component: <ViewBadgesTemplatesInsights />,
  },
  {
    to: "/badges/templates/settings",
    label: "Settings",
    component: <BadgesTemplateSettings />,
  },
  {
    to: "/badges/templates/history",
    label: "History",
    component: <ViewBadgesTemplatesHistory />,
  },
];
