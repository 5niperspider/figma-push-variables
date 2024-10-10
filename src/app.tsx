import { useEffect, useState} from "react";
import "./app.sass";
import { Box, Button } from "@mui/material";
import { usePluginContext } from "./Context/PluginContext";
import { DownloadButtons } from "./components/DownloadButtons/DownloadButtons";
import { PlattformSelect } from "./components/PlattformSelect";
import { GenerateView } from "./components/View/GenerateView";
import { UploadView } from "./components/View/UploadView";

export const styles: any = {
  main: {
    backgroundColor: "white",
    height: "100%",
    display: "flex",
    padding: "16px 24px",
    boxSizing: `border-box`,
    flex: 1,
  },
  mb3: {
    mb: 3,
  },
  box: {
    fontSize: 16,
    mb: 3,
    flex: 1,
    display: "flex",
    fontFamily: "Inter",
  },
  inter: {
    fontSize: 16,
    fontFamily: "Inter",
    marginBottom: 12,
  },
  between: {
    justifyContent: "space-between",
    alignItems: "center",
    justifyItems: "space-between",
  },
  stack: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  themePanel: {
    padding: 0,
  },
  viewPanel: {
    flex: 1,
    padding: 0,
    width: "100%",
  },
};

function App() {
  const pluginContext = usePluginContext();

  useEffect(() => {}, []);

  const onClick = () => {
    parent.postMessage({pluginMessage: {type: pluginContext.platform}}, '*')
  }

  return (
    <main style={styles.main}>
      {pluginContext.view == false ?
        <GenerateView />
        :
        <UploadView />
      }
    </main>
  );
}

export default App;