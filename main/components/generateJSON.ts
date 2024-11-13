import { IVariables } from "../code";

export function generateJSON(variables: IVariables): string {
    console.log(variables)
    const json = JSON.stringify(variables);
    
  return json;
}