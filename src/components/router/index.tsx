import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ViewLogin } from "@/components/views/viewLogin";
import { DRAWER_LIST_ITEMS } from "../reusables/drawer/drawerList/drawerListItems";
import { BADGES_MENU_TABS } from "../views/viewBadges/badgesMenuTabs";
import { BADGES_TEMPLATE_MENU_TABS } from "../views/viewBadges/viewBadgesTemplates/badgesTemplateMenuTabs";
import { ViewRegister } from "../views/viewRegister";
import { ViewPasswordReset } from "../views/viewPasswordReset";
import { ViewCreateBadgeTemplate } from "../views/viewBadges/viewBadgesTemplates/viewCreateBadgeTemplate";

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
        <Route
          path="/badges/templates/create"
          element={<ViewCreateBadgeTemplate />}
        />
      </Routes>
    </BrowserRouter>
  );
}