import { ViewLogin } from "@/components/views/viewLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DRAWER_LIST_ITEMS } from "../reusables/drawer/drawerList/drawerListItems";
import { ANALYTICS_MENU_TABS } from "../views/viewAnalytics/sections/analyticsMenuTabs";
import { BADGES_MENU_TABS } from "../views/viewBadges/badgesMenuTabs";
import { BADGES_COLLECTION_MENU_TABS } from "../views/viewBadges/viewBadgesCollections/badgesCollectionMenuTabs";
import { BADGES_EARNERS_MENU_TABS } from "../views/viewBadges/viewBadgesEarners/badgesEarnersMenuTabs";
import { BADGES_TEMPLATE_MENU_TABS } from "../views/viewBadges/viewBadgesTemplates/badgesTemplateMenuTabs";
import { ViewCreateBadgeTemplate } from "../views/viewBadges/viewBadgesTemplates/viewCreateBadgeTemplate";
import { CERTIFICATES_MENU_TABS } from "../views/viewCertificates/certificatesMenuTabs";
import { CERTIFICATES_COLLECTION_MENU_TABS } from "../views/viewCertificates/viewCertificatesCollections/certificatesCollectionMenuTabs";
import { CERTIFICATES_EARNERS_MENU_TABS } from "../views/viewCertificates/viewCertificatesEarners/badgesEarnersMenuTabs";
import { CERTIFICATES_TEMPLATE_MENU_TABS } from "../views/viewCertificates/viewCertificatesTemplates/badgesTemplateMenuTabs";
import { ViewCreateCertificateTemplate } from "../views/viewCertificates/viewCertificatesTemplates/viewCreateBadgeTemplate";
import { ViewDocumentation } from "../views/viewDeveloper/documentation";
import { ViewWebHooks } from "../views/viewDeveloper/webHooks";
import { ViewPasswordReset } from "../views/viewPasswordReset";
import { ViewTeamPreferences } from "../views/viewPreferences/teamPreferences";
import { ViewRegister } from "../views/viewRegister";
import { ViewSchemaCreate } from "../views/viewSchema/schemaCreate/schemaCreatePage";
import { ViewSelectSchema } from "../views/viewSchema/schemaTabs/selectSchema";
import { ViewSelectDesign } from "../views/viewSchema/schemaTabs/selectSchemaDesign";
import { ViewSchemaAddReceipt } from "../views/viewSchema/schemaTabs/addReceipt";
import { ViewSchemaTabs } from "../views/viewSchema/schemaTabs";
import { DESIGNER_DRAWER_LIST_ITEMS } from "../reusables/designerDrawer/designerDrawerList/designerDrawerListItems";

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
        <Route path="/developer/web-hooks" element={<ViewWebHooks />} />
        <Route
          path="/developer/documentation"
          element={<ViewDocumentation />}
        />
        <Route path="/schema/create" element={<ViewSchemaCreate />} />
        <Route path="/schema/tabs" element={<ViewSchemaTabs />} />
      </Routes>
    </BrowserRouter>
  );
}
