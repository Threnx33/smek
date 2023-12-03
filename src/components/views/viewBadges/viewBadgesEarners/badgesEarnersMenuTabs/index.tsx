import { TabsType } from "../../badgesMenuTabs";
import { ViewBadgesEarnersDetails } from "../viewBadgesEarnersDetails";
import { ViewBadgesEarnersHistory } from "../viewBadgesEarnersHistory";

export const BADGES_EARNERS_MENU_TABS: TabsType = [
  {
    to: "/badges/earners/details",
    label: "Details",
    component: <ViewBadgesEarnersDetails />,
  },
  {
    to: "/badges/earners/history",
    label: "History",
    component: <ViewBadgesEarnersHistory />,
  },
];
