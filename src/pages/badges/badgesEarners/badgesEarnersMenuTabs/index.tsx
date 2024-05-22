import { TabsType } from "../../badgesMenuTabs";
import { BadgesEarnersDetails } from "../badgesEarnersDetails";
import { BadgesEarnersHistory } from "../badgesEarnersHistory";

export const BADGES_EARNERS_MENU_TABS: TabsType = [
  {
    to: "/badges/earners/details/:id",
    label: "Details",
    component: <BadgesEarnersDetails />,
  },
  {
    to: "/badges/earners/history/:id",
    label: "History",
    component: <BadgesEarnersHistory />,
  },
];
