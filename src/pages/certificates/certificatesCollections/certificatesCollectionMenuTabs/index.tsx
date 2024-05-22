import { TabsType } from "../../certificatesMenuTabs";
import { CertificatesCollectionsDetails } from "../certificatesCollectionsDetails";
import { CertificatesCollectionsHistory } from "../certificatesCollectionsHistory";

export const CERTIFICATES_COLLECTION_MENU_TABS: TabsType = [
  {
    to: "/certificates/collections/details",
    label: "Details",
    component: <CertificatesCollectionsDetails />,
  },
  {
    to: "/certificates/collections/history",
    label: "History",
    component: <CertificatesCollectionsHistory />,
  },
];
