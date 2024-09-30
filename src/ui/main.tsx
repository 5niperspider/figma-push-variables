import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { usePluginContext} from "./components/PluginContext";
import "./ui.css";
import { Search } from "./components/Search";
import { ButtoGenerate } from "./components/ButtonGenerate";
import { Entrie } from "./components/Entrie";

declare function require(path: string): any;


const testVariable = {
    id: "id",
    name: "name",
    type: "type",
    collection: "coll",
    group: "grp",
    values: ["eins","zwei"],
    selected: false
}

export const Main = () => {
    const pluginContext = usePluginContext();

    pluginContext.setVariables([testVariable])

  const onCreate = () => {
    parent.postMessage(
      { pluginMessage: { type: "search", searchString: pluginContext.search } },
      "*"
    );
  };

  const CheckAll = (selected: boolean) => {
    console.log("check all: ", selected)
  };

  return (
    <main>
        <header>
            <Search />
        </header>
        <body className="content">
            <input type="checkbox" defaultChecked={false} onChange={(value) => CheckAll(value.target.checked)}/>
            <Entrie variable={testVariable}/>
        </body>
        <footer>
            <select name="selectOutput">
                <option value="json">.JSON</option>
                <option value="ios">iOS</option>
                <option value="android">Android</option>
                <option value="js">JS</option>
            </select>
            <ButtoGenerate />
        </footer>
    </main>
  );
}
