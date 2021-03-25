import { Container, Grid } from "@material-ui/core";
import React from "react";
import ArticleBox from "./article-box/ArticleBox";
import InputForm from "../../input-form/InputForm";
import IntroText from "../../shared/intro-text/IntroText";
import { useStyles } from "./HomeStyle";

const Home = () => {
  const { mainContainer, boxContainer, inputContainer } = useStyles();

  return (
    <Container className={mainContainer}>
      <IntroText content="Type a word (a Noun in single form) and submit to know whether it takes (De, Het or None)" />

      <Grid container className={boxContainer}>
        <Grid item xs={12} md={6}>
          <ArticleBox />
        </Grid>

        <Grid item xs={12} md={6} className={inputContainer}>
          <InputForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
