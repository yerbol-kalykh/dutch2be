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

  const styleArticle = useCallback(() => {
    switch (article) {
      case "de":
        return de;
      case "het":
        return het;
      case "_":
        return noArticle;
      case "no such word!":
        return wrongArticle;
      default:
        return waitingResponse;
    }
  }, [article, de, het, noArticle, wrongArticle, waitingResponse]);

  const displayArticleBox = useCallback(() => {
    return (
      <Grid item xs={6}>
        <Paper className={clsx(flexCenter, respondingArticle, styleArticle())}>
          {article ? article + " " + word : "?"}
        </Paper>
      </Grid>
    );
  }, [word, article, flexCenter, styleArticle, respondingArticle]);

  // useEffect(() => {
  //   articleBox();
  // }, [articleBox, article]);

  useEffect(() => {
    // console.log(`word: ${word}\narticle: ${article}`);
    styleArticle();
  }, [styleArticle]);

  return (
    <Container className={mainContainer}>
      <IntroText content="Type a word (Noun) and submit to know whether it takes (De | Het)" />

      <Grid container className={boxContainer}>
        {displayArticleBox()}

        <Grid item xs={6} className={inputContainer}>
          <InputForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
