import React from "react";
import { usePluginContext } from "./PluginContext";

export const MessageHandler = () => {
    const pluginContext = usePluginContext();
  
  window.onmessage = msg => {
    let message = msg.data.pluginMessage;
    console.log('UI got message', message);

    switch (message.type) {
      case 'errors': {
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