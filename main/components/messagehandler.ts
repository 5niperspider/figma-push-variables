import { getFigmaVariables, IVariables } from "../code";
import { generateAndroid } from "./generateAndroid";
import { generateCSS } from "./generateCSS";
import { generateJSON } from "./generateJSON";

export async function messageHandler(msg: any) {

  console.log('Plugin got message', msg);

  switch (msg.type) {
    case ("css"): {
      const vars = await getFigmaVariables()
      if(!vars){
        figma.ui.postMessage({type: 'error', error: "css codegen error"})
        break
      }
      figma.ui.postMessage({type: 'css', data: generateCSS(vars)})
      break
    }
    case ("json"): {
      const vars = await getFigmaVariables()
      if(!vars){
        figma.ui.postMessage({type: 'error', error: "json codegen error"})
        break
      }
      figma.ui.postMessage({type: 'json', data: generateJSON(vars)})
      break
    }
    case ("android"): {
      const vars = await getFigmaVariables()
      if(!vars){
        figma.ui.postMessage({type: 'error', error: "android codegen error"})
        break
      }
      figma.ui.postMessage({type: 'android', data: generateAndroid(vars)})
      break
    }
    default: {
      console.log(`messagetype ${msg.type} not supported`)
      break
    }
  }
}
