import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { PluginContextProvider} from "./components/PluginContext";
import "./ui.css";
import { Main } from "./main";

declare function require(path: string): any;

function App() {

  return (
    <PluginContextProvider>
      <Main />
    </PluginContextProvider>
  );
}

ReactDOM.createRoot(document.getElementById("react-page")).render(<App />);
