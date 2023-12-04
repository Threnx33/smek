import { ThemeProvider } from "@/components/theme-provider";
import { Router } from "./components/router";
import { Provider } from "react-redux";
import { REDUX_STORE, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Provider store={REDUX_STORE}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Router />
          <Toaster />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
