import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from "react";

export interface INode {
  id: string;
  name: string;
  parent: { id: string };
  type: string;
}

export interface IUser {
  color?: string;
  id: string;
  name: string;
  photoUrl?: string;
  sessionId: number;
}

type PluginContextProviderProps = {
  test: string;
  setTest: Dispatch<SetStateAction<string>>;
};

const PluginContext = createContext<PluginContextProviderProps>(null!);

export const PluginContextProvider = ({ children }: any) => {
  const [test,setTest] = useState<string>(null!);

  const sharedState: any = {
    test,
    setTest
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