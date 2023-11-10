import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ViewLogin } from "@/components/views/viewLogin";
import { ViewRegister } from "./components/views/viewRegister";
import { ViewPasswordReset } from "./components/views/viewPasswordReset";
import { drawerListItems } from "./components/uiComponents/drawer/drawerList/drawerListItems";

function App() {
  const drawerRoutes = drawerListItems.map((item) => (
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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
