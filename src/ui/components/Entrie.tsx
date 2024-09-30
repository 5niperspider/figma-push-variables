import React from "react";
import "./Entrie.css";
import { IVariable, usePluginContext } from "./PluginContext";

export const Entrie = (props: {variable: IVariable}) => {
    const variable = props.variable;
    const pluginContext = usePluginContext();

    const selectVar = (selected: boolean) => {
        const vars = [...pluginContext.variables]
        vars[vars.findIndex(n => n.id == variable.id)].selected = selected
        pluginContext.setVariables(vars)
      };

    return (
        <div className="entrie">
            <input type="checkbox" defaultChecked={false} onChange={(value) => selectVar(value.target.checked)}/>
            <p className="name">{variable.name}</p>
            <p className="type">{variable.type}</p>
            {variable?
                <p className="values">{variable.values.toString()}</p>            
                :
                <p className="values"></p>
            }
        </div>
    )
}