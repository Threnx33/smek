import { TabsType } from "../../certificatesMenuTabs";
import { ViewBadgesEarnersDetails } from "../viewBadgesEarnersDetails";
import { ViewBadgesEarnersHistory } from "../viewBadgesEarnersHistory";

export const CERTIFICATES_EARNERS_MENU_TABS: TabsType = [
  {
    to: "/certificates/earners/details",
    label: "Details",
    component: <ViewBadgesEarnersDetails />,
  },
  {
    to: "/certificates/earners/history",
    label: "History",
    component: <ViewBadgesEarnersHistory />,
  },
];
