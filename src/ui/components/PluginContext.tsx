import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState
  } from "react";

type PluginContextProviderProps = {
  test: string;
  setTest: Dispatch<SetStateAction<string>>;
};

const PluginContext = createContext<PluginContextProviderProps>(null!);
  
export const PluginContextProvider = ({ children }: any) => {
    const [test, setTest] = useState<string>(null!);

    const sharedState = {
      test,
      setTest,
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