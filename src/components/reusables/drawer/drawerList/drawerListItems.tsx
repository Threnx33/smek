import { ViewActivity } from "@/components/views/viewActivity";
import { ViewAnalyticsCertificates } from "@/components/views/viewAnalytics/viewAnalyticsCredentials";
import { ViewBadgesTemplates } from "@/components/views/viewBadges/viewBadgesTemplates";
import { ViewCertificatesTemplates } from "@/components/views/viewCertificates/viewCertificatesTemplates";
import { ViewDashboard } from "@/components/views/viewDashboard";
import { ViewIssuer } from "@/components/views/viewIssuer";
import { ViewPlanAndBilling } from "@/components/views/viewPlanAndBilling";
import { ViewSupport } from "@/components/views/viewSupport";
import { ViewVerification } from "@/components/views/viewVerification";

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
    component: <ViewCertificatesTemplates />,
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
    component: <ViewVerification />,
  },
  {
    iconName: "jobBoard",
    label: "Job Board",
    to: "/job-board",
    component: <ViewBadgesTemplates />,
  },
  {
    iconName: "academy",
    label: "Academy",
    to: "/academy",
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
    iconName: "planAndBilling",
    label: "Plan & Billing",
    to: "/plan-and-billing",
    component: <ViewPlanAndBilling />,
  },
  {
    iconName: "developer",
    label: "Developer",
    to: "/developer",
    component: <ViewBadgesTemplates />,
  },

  {
    iconName: "activity",
    label: "Activity",
    to: "/activity",
    component: <ViewActivity />,
  },
  {
    iconName: "support",
    label: "Support",
    to: "/support",
    component: <ViewSupport />,
  },
];
