import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ViewLogin } from "@/components/views/viewLogin";
import { DRAWER_LIST_ITEMS } from "../reusables/drawer/drawerList/drawerListItems";
import { BADGES_MENU_TABS } from "../views/viewBadges/badgesMenuTabs";
import { BADGES_TEMPLATE_MENU_TABS } from "../views/viewBadges/viewBadgesTemplates/badgesTemplateMenuTabs";
import { ViewRegister } from "../views/viewRegister";
import { ViewPasswordReset } from "../views/viewPasswordReset";
import { ViewCreateBadgeTemplate } from "../views/viewBadges/viewBadgesTemplates/viewCreateBadgeTemplate";
import { BADGES_EARNERS_MENU_TABS } from "../views/viewBadges/viewBadgesEarners/badgesEarnersMenuTabs";
import { BADGES_COLLECTION_MENU_TABS } from "../views/viewBadges/viewBadgesCollections/badgesCollectionMenuTabs";
import { ANALYTICS_MENU_TABS } from "../views/viewAnalytics/sections/analyticsMenuTabs";
import { CERTIFICATES_MENU_TABS } from "../views/viewCertificates/certificatesMenuTabs";
import { CERTIFICATES_TEMPLATE_MENU_TABS } from "../views/viewCertificates/viewCertificatesTemplates/badgesTemplateMenuTabs";
import { CERTIFICATES_EARNERS_MENU_TABS } from "../views/viewCertificates/viewCertificatesEarners/badgesEarnersMenuTabs";
import { CERTIFICATES_COLLECTION_MENU_TABS } from "../views/viewCertificates/viewCertificatesCollections/certificatesCollectionMenuTabs";
import { ViewCreateCertificateTemplate } from "../views/viewCertificates/viewCertificatesTemplates/viewCreateBadgeTemplate";
import { ViewTeamPreferences } from "../views/viewPreferences/teamPreferences";

export function Router() {
  const routesItems = [
    ...DRAWER_LIST_ITEMS,

    ...BADGES_MENU_TABS,
    ...BADGES_TEMPLATE_MENU_TABS,
    ...BADGES_EARNERS_MENU_TABS,
    ...BADGES_COLLECTION_MENU_TABS,

    ...ANALYTICS_MENU_TABS,

    ...CERTIFICATES_MENU_TABS,
    ...CERTIFICATES_TEMPLATE_MENU_TABS,
    ...CERTIFICATES_EARNERS_MENU_TABS,
    ...CERTIFICATES_COLLECTION_MENU_TABS,
  ];

  const routes = routesItems.map((item) => (
    <Route key={item.to} path={item.to} element={item.component} />
  ));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewLogin />} />
        <Route path="/login" element={<ViewLogin />} />
        <Route path="/register" element={<ViewRegister />} />
        <Route path="/password-reset" element={<ViewPasswordReset />} />
        {routes}
        <Route
          path="/badges/templates/create"
          element={<ViewCreateBadgeTemplate />}
        />
        <Route
          path="/certificates/templates/create"
          element={<ViewCreateCertificateTemplate />}
        />
        <Route
          path="/preferences/team-preferences"
          element={<ViewTeamPreferences />}
        />
      </Routes>
    </BrowserRouter>
  );
}
