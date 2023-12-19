import { TabsType } from "../../certificatesMenuTabs";
import { ViewBadgesTemplatesDetails } from "../viewBadgesTemplatesDetails";
import { ViewBadgesTemplatesHistory } from "../viewBadgesTemplatesHistory";
import { ViewBadgesTemplatesInsights } from "../viewBadgesTemplatesInsights";
import { BadgesTemplateSettings } from "../viewBadgesTemplatesSettings";

export const CERTIFICATES_TEMPLATE_MENU_TABS: TabsType = [
  {
    to: "/certificates/templates/details",
    label: "Details",
    component: <ViewBadgesTemplatesDetails />,
  },
  {
    to: "/certificates/templates/insights",
    label: "Insights",
    component: <ViewBadgesTemplatesInsights />,
  },
  {
    to: "/certificates/templates/settings",
    label: "Settings",
    component: <BadgesTemplateSettings />,
  },
  {
    to: "/certificates/templates/history",
    label: "History",
    component: <ViewBadgesTemplatesHistory />,
  },
];
