import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { PluginContextProvider} from "./components/PluginContext";
import "./ui.css";

declare function require(path: string): any;

function App() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onCreate = () => {
    const count = Number(inputRef.current?.value || 0);
    parent.postMessage(
      { pluginMessage: { type: "create-rectangles", count } },
      "*"
    );
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  return (
    <PluginContextProvider>
      <p>hi</p>
    </PluginContextProvider>
  );
}

ReactDOM.createRoot(document.getElementById("react-page")).render(<App />);
