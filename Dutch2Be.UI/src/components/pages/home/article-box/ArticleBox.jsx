import { Paper } from "@material-ui/core";
import clsx from "clsx";
import React, { useCallback, useContext } from "react";
import { AppContext } from "../../../../providers/AppContext";
import { useStyles } from "./ArticleBoxStyle";

const ArticleBox = () => {
  const { article, word } = useContext(AppContext);
  const {
    respondingArticle,
    waitingResponse,
    de,
    het,
    flexCenter,
    noArticle,
    wrongArticle,
  } = useStyles();

  const styleArticleBox = useCallback(() => {
    switch (article) {
      case "De":
        return de;
      case "Het":
        return het;
      case "None":
        return noArticle;
      case "no such word!":
        return wrongArticle;
      default:
        return waitingResponse;
    }
  }, [article, de, het, noArticle, wrongArticle, waitingResponse]);

  return (
    <Paper className={clsx(flexCenter, respondingArticle, styleArticleBox())}>
      {article ? article + " " + word : "?"}
    </Paper>
  );
};

export default ArticleBox;
