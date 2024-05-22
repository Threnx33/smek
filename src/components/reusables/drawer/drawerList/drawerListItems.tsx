import { Activity } from "@/pages/activity";
import { AnalyticsCertificates } from "@/pages/analytics/analyticsCertificates";
import { BadgesTemplates } from "@/pages/badges/badgesTemplates";
import { CertificatesTemplates } from "@/pages/certificates/certificatesTemplates";
import { Dashboard } from "@/pages/dashboard";
import Designer from "@/pages/designer/designerTemplates";
import { ApiKeys } from "@/pages/developer/apiKeys";
import { Issuer } from "@/pages/issuer";
import { PlanAndBilling } from "@/pages/planAndBilling";
import { Preferences } from "@/pages/preferences/preferences";
import { Schema } from "@/pages/schema";
import { Support } from "@/pages/support";
import { Verification } from "@/pages/verification";

export const DRAWER_LIST_ITEMS = [
  {
    iconName: "dashboard",
    label: "Dashboard",
    to: "/dashboard",
    component: <Dashboard />,
  },
  {
    iconName: "issuerProfiles",
    label: "Issuer Profiles",
    to: "/issuer-profiles",
    component: <Issuer />,
  },
  {
    iconName: "badges",
    label: "Badges",
    to: "/badges/templates",
    component: <BadgesTemplates />,
  },
  {
    iconName: "certificates",
    label: "Certificates",
    to: "/certificates",
    component: <CertificatesTemplates />,
  },
  {
    iconName: "designer",
    label: "Designer",
    to: "/designer/templates",
    component: <Designer />,
  },
  {
    iconName: "verification",
    label: "Verification",
    to: "/verification",
    component: <Verification />,
  },
  {
    iconName: "jobBoard",
    label: "Job Board",
    to: "/job-board",
    component: <BadgesTemplates />,
  },
  {
    iconName: "academy",
    label: "Academy",
    to: "/academy",
    component: <BadgesTemplates />,
  },
  {
    iconName: "analytics",
    label: "Analytics",
    to: "/analytics/certificates",
    component: <AnalyticsCertificates />,
  },
  {
    iconName: "planAndBilling",
    label: "Plan & Billing",
    to: "/plan-and-billing",
    component: <PlanAndBilling />,
  },
  {
    iconName: "developer",
    label: "Developer",
    to: "/developer/api-keys",
    component: <ApiKeys />,
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
    component: <Activity />,
  },
  {
    iconName: "preferences",
    label: "Preferences",
    to: "/preferences",
    component: <Preferences />,
  },
  {
    iconName: "support",
    label: "Support",
    to: "/support",
    component: <Support />,
  },
  {
    iconName: "certificates",
    label: "Schema",
    to: "/schema",
    component: <Schema />,
  },
];
