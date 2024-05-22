import { TabsType } from "../../badgesMenuTabs";
import { BadgesCollectionsDetails } from "../badgesCollectionsDetails";
import { BadgesCollectionsHistory } from "../badgesCollectionsHistory";

export const BADGES_COLLECTION_MENU_TABS: TabsType = [
  {
    to: "/badges/collections/details/:id",
    label: "Details",
    component: <BadgesCollectionsDetails />,
  },
  {
    to: "/badges/collections/history/:id",
    label: "History",
    component: <BadgesCollectionsHistory />,
  },
];
