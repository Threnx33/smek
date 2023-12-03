import { ThemeProvider } from "@/components/theme-provider";
import { Router } from "./components/router";
import { Provider } from "react-redux";
import { REDUX_STORE, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={REDUX_STORE}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Router />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
