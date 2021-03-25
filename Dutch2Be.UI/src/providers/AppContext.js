import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [word, setWord] = useState("ei");
  const [article, setArticle] = useState("Het");
  const value = { word, setWord, article, setArticle };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
