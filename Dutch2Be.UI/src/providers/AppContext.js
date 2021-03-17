import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const value = { word, setWord };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
