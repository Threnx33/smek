import { ThemeProvider } from "@/components/theme-provider";
import { Router } from "./components/router";
import { Provider } from "react-redux";
import { REDUX_STORE } from "./redux/store";

function App() {
  return (
    <Provider store={REDUX_STORE}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
