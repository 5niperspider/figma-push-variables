import { ISorted } from "../code";

export function generateCSS(cssVariables: ISorted) {
    console.log(cssVariables)
    let cssCode = ':root {\n';
  
  
    for (const mode in cssVariables) {
      for (const variable in cssVariables[mode]) {
        const varName = variable.split("/").map((string) => string.replace(/\W+/g, "")).join('-')
        cssCode += `--${mode}-${varName}: ${cssVariables[mode][variable].value};\n`;
      }
    }
    
    cssCode += '}\n';
    return cssCode;
  }