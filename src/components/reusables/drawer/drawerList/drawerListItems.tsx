import { ViewBadgesTemplates } from "@/components/views/viewBadges/viewBadgesTemplates";
import {
  TEMPLATES,
  TEMPLATES_COLUMNS,
} from "@/components/views/viewBadges/viewBadgesTemplates/data";

export const DRAWER_LIST_ITEMS = [
  {
    iconName: "dashboard",
    label: "Dashboard",
    to: "/dashboard",
    component: <ViewBadgesTemplates />,
  },
  {
    iconName: "issuerProfiles",
    label: "Issuer Profiles",
    to: "/issuer-profiles",
    component: <ViewBadgesTemplates />,
  },
  {
    iconName: "badges",
    label: "Badges",
    to: "/badges/templates",
    component: <ViewBadgesTemplates />,
  },
  {
    iconName: "certificates",
    label: "Certificates",
    to: "/certificates",
    component: <ViewBadgesTemplates />,
  },
  {
    iconName: "designer",
    label: "Designer",
    to: "/designer",
    component: <ViewBadgesTemplates />,
  },
  {
    iconName: "verification",
    label: "Verification",
    to: "/verification",
    component: <ViewBadgesTemplates />,
  },
  {
    iconName: "analytics",
    label: "Analytics",
    to: "/analytics",
    component: <ViewBadgesTemplates />,
  },
  {
    iconName: "preferences",
    label: "Preferences",
    to: "/preferences",
    component: <ViewBadgesTemplates />,
  },
  {
    iconName: "support",
    label: "Support",
    to: "/support",
    component: <ViewBadgesTemplates />,
  },
];
