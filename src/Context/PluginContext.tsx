import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from "react";

type PluginContextProviderProps = {
  data: string;
  setData: Dispatch<SetStateAction<string>>;
  type: string;
  setType: Dispatch<SetStateAction<string>>;
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
  platform: string;
  setPlatform: Dispatch<SetStateAction<string>>;
};

const PluginContext = createContext<PluginContextProviderProps>(null!);

export const PluginContextProvider = ({ children }: any) => {
  const [data, setData] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [view, setView] = useState<boolean>(false);
  const [platform, setPlatform] = useState<string>("");

  const sharedState: any = {
    data,
    setData,
    type,
    setType,
    view,
    setView,
    platform,
    setPlatform
  };

  return (
    <PluginContext.Provider value={sharedState}>
      {children}
    </PluginContext.Provider>
  );
};

export const usePluginContext = () => {
  return useContext(PluginContext);
}