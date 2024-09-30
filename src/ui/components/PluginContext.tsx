import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState
  } from "react";

export interface IVariable{
  id: string,
  name: string,
  type: string,
  collection: string,
  group: string,
  values: any[],
  selected: boolean
};

type PluginContextProviderProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  variables: IVariable[];
  setVariables: Dispatch<SetStateAction<IVariable[]>>;
};

const PluginContext = createContext<PluginContextProviderProps>(null!);
  
export const PluginContextProvider = ({ children }: any) => {
    const [search, setSearch] = useState<string>(null!);
    const [variables, setVariables] = useState<IVariable[]>(null!);

    const sharedState = {
      search,
      setSearch,
      variables,
      setVariables
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