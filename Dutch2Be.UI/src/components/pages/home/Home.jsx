import { Container, Grid } from "@material-ui/core";
import React from "react";
import ArticleBox from "./article-box/ArticleBox";
import InputForm from "./input-form/InputForm";
import IntroText from "../../shared/intro-text/IntroText";
import { useStyles } from "./HomeStyle";
import clsx from "clsx";

const Home = () => {
  const {
    mainContainer,
    boxContainer,
    inputContainer,
    typesContainer,
    resultType,
    de,
    het,
    noArticle,
    wrongArticle,
  } = useStyles();

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

      <Grid container className={typesContainer}>
        <Grid xs={2} item>
          Result Type
        </Grid>

        <Grid item container xs={10}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2} className={clsx(resultType, de)}>
            De
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={2} className={clsx(resultType, het)}>
            Het
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={2} className={clsx(resultType, noArticle)}>
            None
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={2} className={clsx(resultType, wrongArticle)}>
            No such a word!
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
