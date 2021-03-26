import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [word, setWord] = useState("ei");
  const [article, setArticle] = useState("Het");
  // quiz page
  const [fetchedQuizArr, setFetchedQuizArr] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [quizWord, setQuizWord] = useState("");

  const value = {
    word,
    setWord,
    article,
    setArticle,
    fetchedQuizArr,
    setFetchedQuizArr,
    isStarted,
    setIsStarted,
    quizWord,
    setQuizWord,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
