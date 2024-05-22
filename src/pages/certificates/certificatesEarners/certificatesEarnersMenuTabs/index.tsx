import { TabsType } from "../../certificatesMenuTabs";
import { CertificatesEarnersDetails } from "../certificatesEarnersDetails";
import { CertificatesEarnersHistory } from "../certificatesEarnersHistory";

export const CERTIFICATES_EARNERS_MENU_TABS: TabsType = [
  {
    to: "/certificates/earners/details/:id",
    label: "Details",
    component: <CertificatesEarnersDetails />,
  },
  {
    to: "/certificates/earners/history/:id",
    label: "History",
    component: <CertificatesEarnersHistory />,
  },
];
