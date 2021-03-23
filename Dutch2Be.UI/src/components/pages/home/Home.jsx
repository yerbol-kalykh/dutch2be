import { Container, Grid, Paper } from "@material-ui/core";
import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../../../providers/AppContext";
import InputForm from "../../form/InputForm";
import IntroText from "../../intro-text/InrtoText";
import { useStyles } from "./HomeStyle";

const Home = () => {
  const { article, word } = useContext(AppContext);
  const {
    mainContainer,
    boxContainer,
    respondingArticle,
    center,
    waitingResponse,
    de,
    het,
    inputContainer,
  } = useStyles();

  const articleBox = useCallback(() => {
    return (
      <Grid item xs={6}>
        <Paper
          className={`${center} ${respondingArticle} ${
            true ? waitingResponse : true ? de : het
          }`}
        >
          {article ? article + " " + word : "?"}
        </Paper>
      </Grid>
    );
  }, [article, waitingResponse, de, het, respondingArticle, center, word]);

  // useEffect(() => {
  //   articleBox();
  // }, [articleBox, article]);

  useEffect(() => {
    console.log(`word: ${word}\narticle: ${article}`);
  }, [word, article]);

  return (
    <Container className={mainContainer}>
      <IntroText content="Type a word (Noun) and submit to know whether it takes (De | Het)" />

      <Grid container className={boxContainer}>
        {articleBox()}

        <Grid item xs={6} className={inputContainer}>
          <InputForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
