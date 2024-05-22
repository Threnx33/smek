import { CERTIFICATES_COLLECTION_MENU_TABS } from "@/pages/certificates/certificatesCollections/certificatesCollectionMenuTabs";
import { CERTIFICATES_EARNERS_MENU_TABS } from "@/pages/certificates/certificatesEarners/certificatesEarnersMenuTabs";
import { CERTIFICATES_MENU_TABS } from "@/pages/certificates/certificatesMenuTabs";
import { CERTIFICATES_TEMPLATE_MENU_TABS } from "@/pages/certificates/certificatesTemplates/certificatesTemplateMenuTabs";
import { CreateCertificateTemplate } from "@/pages/certificates/certificatesTemplates/createCertificatesTemplate";
import { Login } from "@/pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DESIGNER_DRAWER_LIST_ITEMS } from "../components/reusables/designerDrawer/designerDrawerList/designerDrawerListItems";
import { DRAWER_LIST_ITEMS } from "../components/reusables/drawer/drawerList/drawerListItems";
import { ANALYTICS_MENU_TABS } from "../pages/analytics/sections/analyticsMenuTabs";
import { BADGES_COLLECTION_MENU_TABS } from "../pages/badges/badgesCollections/badgesCollectionMenuTabs";
import { BADGES_EARNERS_MENU_TABS } from "../pages/badges/badgesEarners/badgesEarnersMenuTabs";
import { BADGES_MENU_TABS } from "../pages/badges/badgesMenuTabs";
import { BADGES_TEMPLATE_MENU_TABS } from "../pages/badges/badgesTemplates/badgesTemplateMenuTabs";
import { CreateBadgeTemplate } from "../pages/badges/badgesTemplates/createBadgeTemplate";
import { Documentation } from "../pages/developer/documentation";
import { WebHooks } from "../pages/developer/webHooks";
import { PasswordReset } from "../pages/passwordReset";
import { TeamPreferences } from "../pages/preferences/teamPreferences";
import { Register } from "../pages/register";
import { SchemaCreate } from "../pages/schema/schemaCreate/schemaCreatePage";
import { SchemaTabs } from "../pages/schema/schemaTabs";

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

    ...DESIGNER_DRAWER_LIST_ITEMS,
  ];

  const routes = routesItems.map((item) => (
    <Route key={item.to} path={item.to} element={item.component} />
  ));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-reset" element={<PasswordReset />} />

        {routes}

        <Route
          path="/badges/templates/create"
          element={<CreateBadgeTemplate />}
        />
        <Route
          path="/certificates/templates/create"
          element={<CreateCertificateTemplate />}
        />
        <Route
          path="/preferences/team-preferences"
          element={<TeamPreferences />}
        />
        <Route path="/developer/web-hooks" element={<WebHooks />} />
        <Route path="/developer/documentation" element={<Documentation />} />
        <Route path="/schema/create" element={<SchemaCreate />} />
        <Route path="/schema/tabs" element={<SchemaTabs />} />
      </Routes>
    </BrowserRouter>
  );
}
