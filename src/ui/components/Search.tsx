import React from "react";
import { usePluginContext } from "./PluginContext";

export const Search = () => {
    const pluginContext = usePluginContext();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onInput = () => {
        const searchString = inputRef.current?.value;
        pluginContext.setSearch(searchString)
      };

    return (
      <div>
        <input className="searchInput" id="input" type="string" placeholder="search by name, group, collection,..." ref={inputRef} onInput={onInput}/>
        <button className="brand">Filter</button>
      </div>
    )
}