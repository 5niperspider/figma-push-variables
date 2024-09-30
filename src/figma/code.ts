import { messageHandler } from "./components/messageHandler";

figma.showUI(__html__, { themeColors: true, height: 300 });

figma.ui.onmessage = (msg) => {
  messageHandler(msg)
};
