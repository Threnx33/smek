import { ViewBadgesTemplates } from "@/components/views/viewBadges/viewBadgesTemplates";
import { ViewCertificatesTemplates } from "@/components/views/viewCertificates/viewCertificatesTemplates";
import { ViewDashboard } from "@/components/views/viewDashboard";
import { ViewIssuer } from "@/components/views/viewIssuer";
import { Category2, ColorsSquare, Settings, Shapes } from "iconsax-react";

export const DESIGNER_DRAWER_LIST_ITEMS = [
  {
    icon: <Category2 />,
    to: "templates",
    component: <ViewDashboard />,
  },
  {
    icon: <Shapes />,
    to: "elements",
    component: <ViewIssuer />,
  },
  {
    icon: <ColorsSquare />,
    to: "edit",
    component: <ViewBadgesTemplates />,
  },
  {
    icon: <Settings />,
    to: "settings",
    component: <ViewCertificatesTemplates />,
  },
];
