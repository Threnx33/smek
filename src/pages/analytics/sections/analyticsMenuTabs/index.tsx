import { AnalyticsCertificates } from "../../analyticsCertificates";
import { AnalyticsTemplates } from "../../analyticsTemplates";

export type TabType = {
  to: string;
  label: string;
  component: React.ReactNode;
};

export type TabsType = TabType[];

export const ANALYTICS_MENU_TABS: TabsType = [
  {
    to: "/analytics/credentials",
    label: "Credentials",
    component: <AnalyticsCertificates />,
  },
  {
    to: "/analytics/templates",
    label: "Templates",
    component: <AnalyticsTemplates />,
  },
];
