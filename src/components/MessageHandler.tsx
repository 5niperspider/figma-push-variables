import React from "react";
import { usePluginContext } from "../Context/PluginContext";

export const MessageHandler = () => {
    const pluginContext = usePluginContext();
  
  window.onmessage = msg => {
    let message = msg.data.pluginMessage;
    console.log('UI got message', message);

    switch (message.type) {
      case 'css': {
        pluginContext.setType("text/css")
        pluginContext.setData(message.data)
        pluginContext.setView(true)
        break
      }
      case 'android': {
        pluginContext.setType("text/xml")
        pluginContext.setData(message.data)
        pluginContext.setView(true)
        break
      }
      default: {
        console.log(`UI-MessageHandler: messagetype ${msg.type} not supported`)
        break
      }
    }
  }
    return (
        <>
        </>
    )
}