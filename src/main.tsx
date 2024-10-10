import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { SnackbarProvider } from "notistack";
import { PluginContextProvider } from "./Context/PluginContext";
import { MessageHandler } from "./components/MessageHandler";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PluginContextProvider>
          <SnackbarProvider maxSnack={5} autoHideDuration={3000}>
            <MessageHandler />
            <App />
          </SnackbarProvider>
    </PluginContextProvider>
  </React.StrictMode>,
);
