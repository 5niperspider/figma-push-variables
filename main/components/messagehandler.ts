import { getFigmaVariables } from "../code";
import { generateCSS } from "./generateCSS";

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
    default: {
      console.log(`messagetype ${msg.type} not supported`)
      break
    }
  }
}