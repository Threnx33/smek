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
import { ANALYTICS_MENU_TABS } from "../views/viewAnalytics/analyticsMenuTabs";

export function Router() {
  const drawerRoutes = DRAWER_LIST_ITEMS.map((item) => (
    <Route key={item.to} path={item.to} element={item.component} />
  ));
  const badgesMenuTabsRoutes = BADGES_MENU_TABS.map((item) => (
    <Route key={item.to} path={item.to} element={item.component} />
  ));
  const badgesTemplateMenuTabsRoutes = BADGES_TEMPLATE_MENU_TABS.map((item) => (
    <Route key={item.to} path={item.to} element={item.component} />
  ));
  const badgesEarnersMenuTabsRoutes = BADGES_EARNERS_MENU_TABS.map((item) => (
    <Route key={item.to} path={item.to} element={item.component} />
  ));
  const badgesCollectionsMenuTabsRoutes = BADGES_COLLECTION_MENU_TABS.map(
    (item) => <Route key={item.to} path={item.to} element={item.component} />
  );
  const analyticsMenuTabsRoutes = ANALYTICS_MENU_TABS.map((item) => (
    <Route key={item.to} path={item.to} element={item.component} />
  ));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewLogin />} />
        <Route path="/login" element={<ViewLogin />} />
        <Route path="/register" element={<ViewRegister />} />
        <Route path="/password-reset" element={<ViewPasswordReset />} />
        {drawerRoutes}
        {badgesMenuTabsRoutes}
        {badgesTemplateMenuTabsRoutes}
        {badgesEarnersMenuTabsRoutes}
        {badgesCollectionsMenuTabsRoutes}
        {analyticsMenuTabsRoutes}
        <Route
          path="/badges/templates/create"
          element={<ViewCreateBadgeTemplate />}
        />
      </Routes>
    </BrowserRouter>
  );
}
