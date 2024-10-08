import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { SnackbarProvider } from "notistack";
import { MessageHandler } from "./components/MessageHandler";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
          <SnackbarProvider maxSnack={5} autoHideDuration={3000}>
            <MessageHandler />
            <App />
          </SnackbarProvider>
  </React.StrictMode>,
);
