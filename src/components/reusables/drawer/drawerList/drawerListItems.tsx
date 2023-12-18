import { ViewAnalyticsCertificates } from "@/components/views/viewAnalytics/viewAnalyticsCredentials";
import { ViewBadgesTemplates } from "@/components/views/viewBadges/viewBadgesTemplates";
import { ViewDashboard } from "@/components/views/viewDashboard";
import { ViewIssuer } from "@/components/views/viewIssuer";

export const DRAWER_LIST_ITEMS = [
  {
    iconName: "dashboard",
    label: "Dashboard",
    to: "/dashboard",
    component: <ViewDashboard />,
  },
  {
    iconName: "issuerProfiles",
    label: "Issuer Profiles",
    to: "/issuer-profiles",
    component: <ViewIssuer />,
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
    to: "/analytics/certificates",
    component: <ViewAnalyticsCertificates />,
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
