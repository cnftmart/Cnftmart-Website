import React from "react";
import { Loading } from "../loadingtype";

const LoadingContext = React.createContext<Loading>({} as Loading); //Create the context in which the useState is contained (Loading state)
const LoadingContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [loading, setLoading] = React.useState<boolean>(false);
    return (
      <LoadingContext.Provider value={{ loading, setLoading }}>
        {children}
      </LoadingContext.Provider>
    );
  };
export {LoadingContextProvider};
export default LoadingContext;