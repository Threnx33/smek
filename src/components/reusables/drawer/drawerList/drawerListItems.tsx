import { ViewActivity } from "@/components/views/viewActivity";
import { ViewAnalyticsCertificates } from "@/components/views/viewAnalytics/viewAnalyticsCredentials";
import { ViewBadgesTemplates } from "@/components/views/viewBadges/viewBadgesTemplates";
import { ViewCertificatesTemplates } from "@/components/views/viewCertificates/viewCertificatesTemplates";
import { ViewDashboard } from "@/components/views/viewDashboard";
import ViewDesigner from "@/components/views/viewDesigner";
import { ViewApiKeys } from "@/components/views/viewDeveloper/apiKeys";
import { ViewDocumentation } from "@/components/views/viewDeveloper/documentation";
import { ViewWebHooks } from "@/components/views/viewDeveloper/webHooks";
import { ViewIssuer } from "@/components/views/viewIssuer";
import { ViewPlanAndBilling } from "@/components/views/viewPlanAndBilling";
import { ViewPreferences } from "@/components/views/viewPreferences/preferences";
import { ViewSchema } from "@/components/views/viewSchema";
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
    to: "/designer/templates",
    component: <ViewDesigner />,
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
    iconName: "planAndBilling",
    label: "Plan & Billing",
    to: "/plan-and-billing",
    component: <ViewPlanAndBilling />,
  },
  {
    iconName: "developer",
    label: "Developer",
    to: "/developer/api-keys",
    component: <ViewApiKeys />,
    subItems: [
      {
        label: "API Keys",
        to: "/developer/api-keys",
      },
      {
        label: "Web Hooks",
        to: "/developer/web-hooks",
      },
      {
        label: "Documentation",
        to: "/developer/documentation",
      },
    ],
  },
  {
    iconName: "activity",
    label: "Activity",
    to: "/activity",
    component: <ViewActivity />,
  },
  {
    iconName: "preferences",
    label: "Preferences",
    to: "/preferences",
    component: <ViewPreferences />,
  },
  {
    iconName: "support",
    label: "Support",
    to: "/support",
    component: <ViewSupport />,
  },
  {
    iconName: "certificates",
    label: "Schema",
    to: "/schema",
    component: <ViewSchema />,
  },
];
