import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ViewLogin } from "@/components/views/viewLogin";
import { ViewRegister } from "./components/views/viewRegister";
import { ViewPasswordReset } from "./components/views/viewPasswordReset";
import { ViewCreateBadgeTemplate } from "./components/views/viewBadges/viewBadgesTemplates/viewCreateBadgeTemplate";
import { BADGES_MENU_TABS } from "./components/views/viewBadges/badgesMenuTabs";
import { DRAWER_LIST_ITEMS } from "./components/reusables/drawer/drawerList/drawerListItems";
import { BADGES_TEMPLATE_MENU_TABS } from "./components/views/viewBadges/viewBadgesTemplates/badgesTemplateMenuTabs";

function App() {
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
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewLogin />}></Route>
          <Route path="/login" element={<ViewLogin />}></Route>
          <Route path="/register" element={<ViewRegister />}></Route>
          <Route path="/password-reset" element={<ViewPasswordReset />}></Route>
          {drawerRoutes}
          {badgesMenuTabsRoutes}
          {badgesTemplateMenuTabsRoutes}
          <Route
            path="/badges/templates/create"
            element={<ViewCreateBadgeTemplate />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
