import { messageHandler } from "./components/messagehandler";

figma.showUI(__html__, { themeColors: true, height: 400, width: 600 });

figma.ui.onmessage = (msg) => {
  messageHandler(msg)
};

figma.on("run", async () => {
  const vars = await getFigmaVariables()
  console.log(vars)
  const code = generateCSS(vars)
  console.log(code)
});

async function getFigmaVariables() {
  const variables = await figma.variables.getLocalVariablesAsync(); // Fetch all local variable names
  const cssVariables: any = {};

  for (const variable of variables) {
    const collection = await figma.variables.getVariableCollectionByIdAsync(variable.variableCollectionId)
    if(!collection){return}

    Object.keys(variable.valuesByMode).forEach((modeId) => {
      const modeName = collection.modes[collection.modes.findIndex((m)=>{return m.modeId == modeId})].name.replace(/\W+/g, "")
      if(!cssVariables[modeName]){
        cssVariables[modeName] = {}
      }
      let value: any = variable.valuesByMode[modeId]
      if(variable.resolvedType == 'COLOR'){
        value = rgbaToHex(value)
      }

      const varName = variable.name.split("/").map((string) => string.replace(/\W+/g, "")).join('-')

      cssVariables[modeName][varName] = value;
    })
  }

  return cssVariables;
}

function generateCSS(cssVariables: any) {
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

function rgbaToHex(rgba: any) {
  
  // Convert r, g, b to hex
  const toHex = (c: any) => {
      const hex = Math.round(c*255).toString(16).padStart(2, '0');
      return hex;
  };

  // Get hex values for red, green, and blue
  const hexR = toHex(rgba.r);
  const hexG = toHex(rgba.g);
  const hexB = toHex(rgba.b);

  // If alpha is required, convert it to hex (0-255 range)
  const hexA = rgba.a !== undefined ? Math.round(rgba.a * 255).toString(16).padStart(2, '0') : '';

  // Concatenate to form the final hex color
  return `#${hexR}${hexG}${hexB}${hexA}`;
}