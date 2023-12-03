import { TabsType } from "../../badgesMenuTabs";
import { ViewBadgesCollectionsDetails } from "../viewBadgesCollectionsDetails";
import { ViewBadgesCollectionsHistory } from "../viewBadgesCollectionsHistory";

export const BADGES_COLLECTION_MENU_TABS: TabsType = [
  {
    to: "/badges/collections/details",
    label: "Details",
    component: <ViewBadgesCollectionsDetails />,
  },
  {
    to: "/badges/collections/history",
    label: "History",
    component: <ViewBadgesCollectionsHistory />,
  },
];
