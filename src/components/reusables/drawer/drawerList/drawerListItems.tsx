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
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
  {
    iconName: "issuerProfiles",
    label: "Issuer Profiles",
    to: "/issuer-profiles",
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
  {
    iconName: "badges",
    label: "Badges",
    to: "/badges/templates",
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
  {
    iconName: "certificates",
    label: "Certificates",
    to: "/certificates",
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
  {
    iconName: "designer",
    label: "Designer",
    to: "/designer",
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
  {
    iconName: "verification",
    label: "Verification",
    to: "/verification",
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
  {
    iconName: "analytics",
    label: "Analytics",
    to: "/analytics",
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
  {
    iconName: "preferences",
    label: "Preferences",
    to: "/preferences",
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
  {
    iconName: "support",
    label: "Support",
    to: "/support",
    component: (
      <ViewBadgesTemplates columns={TEMPLATES_COLUMNS} data={TEMPLATES} />
    ),
  },
];
