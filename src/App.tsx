import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "react-redux";
import { Toaster } from "./components/ui/toaster";
import { REDUX_STORE } from "./redux";
import { Router } from "./router";

function App() {
  return (
    <Provider store={REDUX_STORE}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router />
        <Toaster />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
