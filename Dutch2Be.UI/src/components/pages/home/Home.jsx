import { Container, Grid, Paper } from "@material-ui/core";
import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../../../providers/AppContext";
import InputForm from "../../form/InputForm";
import IntroText from "../../intro-text/InrtoText";
import { useStyles } from "./HomeStyle";
import clsx from "clsx";

const Home = () => {
  const { article, word } = useContext(AppContext);
  const {
    mainContainer,
    boxContainer,
    respondingArticle,
    waitingResponse,
    de,
    het,
    inputContainer,
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

  const displayArticleBox = useCallback(() => {
    return (
      <Grid item xs={12} md={6}>
        <Paper
          className={clsx(flexCenter, respondingArticle, styleArticleBox())}
        >
          {article ? article + " " + word : "?"}
        </Paper>
      </Grid>
    );
  }, [word, article, flexCenter, styleArticleBox, respondingArticle]);

  useEffect(() => {
    styleArticleBox();
  }, [styleArticleBox]);

  return (
    <Container className={mainContainer}>
      <IntroText content="Type a word (a Noun in single form) and submit to know whether it takes (De, Het or None)" />

      <Grid container className={boxContainer}>
        {displayArticleBox()}

        <Grid item xs={12} md={6} className={inputContainer}>
          <InputForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
