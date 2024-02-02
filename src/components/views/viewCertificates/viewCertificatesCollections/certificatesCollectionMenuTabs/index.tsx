import { TabsType } from "../../certificatesMenuTabs";
import { ViewBadgesCollectionsDetails } from "../viewBadgesCollectionsDetails";
import { ViewBadgesCollectionsHistory } from "../viewBadgesCollectionsHistory";

export const CERTIFICATES_COLLECTION_MENU_TABS: TabsType = [
  {
    to: "/certificates/collections/details",
    label: "Details",
    component: <ViewBadgesCollectionsDetails />,
  },
  {
    to: "/certificates/collections/history",
    label: "History",
    component: <ViewBadgesCollectionsHistory />,
  },
];
