import { IVariables } from "../code";

export function generateCSS(variables: IVariables): string {
    console.log(variables)
    let cssCode = ':root {\n';
  
  for(const collection in variables){
    for (const mode in variables) {
      for (const variable in variables[mode]) {
        const varName = variable.split("/").map((string) => string.replace(/\W+/g, "")).join('-')
        cssCode += `--${collection}-${mode}-${varName}: ${variables[collection][mode][variable].value};\n`;
      }
    }
  }
    
    cssCode += '}\n';
  return cssCode;
}