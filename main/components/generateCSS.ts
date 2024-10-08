import { ISorted } from "../code";

export function generateCSS(cssVariables: ISorted) {
    console.log(cssVariables)
    let cssCode = ':root {\n';
  
  
    for (const mode in cssVariables) {
      for (const variable in cssVariables[mode]) {
        cssCode += `--${mode}-${variable}: ${cssVariables[mode][variable].value};\n`;
      }
    }
    
    cssCode += '}\n';
    return cssCode;
  }