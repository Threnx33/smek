import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ViewLogin } from "@/components/views/viewLogin";
import { ViewRegister } from "./components/views/viewRegister";
import { ViewPasswordReset } from "./components/views/viewPasswordReset";
import { drawerListItems } from "./components/uiComponents/drawer/drawerList/drawerListItems";
import { ViewCreateBadgeTemplate } from "./components/views/viewCreateBadgeTemplate";
import { BADGE_MENU_TABS } from "./components/views/viewBadges/badgeMenuTabs";

function App() {
  const drawerRoutes = drawerListItems.map((item) => (
    <Route key={item.to} path={item.to} element={item.component} />
  ));
  const badgesMenuTabsRoutes = BADGE_MENU_TABS.map((item) => (
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
          <Route
            path="/badges/create-badge-template"
            element={<ViewCreateBadgeTemplate />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
