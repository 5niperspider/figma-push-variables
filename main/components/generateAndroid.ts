export function generateCSS(cssVariables: any) {
    console.log(cssVariables)
    let cssCode = ':root {\n';
  
  
    for (const mode in cssVariables) {
      for (const variable in cssVariables[mode]) {
        cssCode += `--${mode}-${variable}: ${cssVariables[mode][variable]};\n`;
      }
    }
    
    cssCode += '}\n';
    return cssCode;
  }