import { ViewAnalyticsCertificates } from "..";

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
    component: <ViewAnalyticsCertificates />,
  },
  {
    to: "/analytics/templates",
    label: "Templates",
    component: <ViewAnalyticsCertificates />,
  },
];
