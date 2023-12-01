import { TabsType } from "../../badgesMenuTabs";
import { ViewBadgesTemplatesDetails } from "../viewBadgesTemplatesDetails";

export const BADGES_TEMPLATE_MENU_TABS: TabsType = [
  {
    to: "/badges/templates/details",
    label: "Details",
    component: <ViewBadgesTemplatesDetails />,
  },
  {
    to: "/badges/templates/insights",
    label: "Insights",
    component: <ViewBadgesTemplatesDetails />,
  },
  {
    to: "/badges/templates/settings",
    label: "Settings",
    component: <ViewBadgesTemplatesDetails />,
  },
  {
    to: "/badges/templates/history",
    label: "History",
    component: <ViewBadgesTemplatesDetails />,
  },
];
