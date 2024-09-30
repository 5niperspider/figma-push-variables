import { messageHandler } from "./components/messageHandler";

figma.showUI(__html__, { themeColors: true, height: 500, width:500 });

figma.ui.onmessage = (msg) => {
  messageHandler(msg)
};
