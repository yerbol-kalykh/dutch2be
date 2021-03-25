import { Container, Grid } from "@material-ui/core";
import React from "react";
// components
import IntroText from "../../shared/intro-text/IntroText";
import QuizBox from "./quiz-box/QuizBox";
// style
import { useStyles } from "./TestyourselfStyle";
import clsx from "clsx";

const TestYourself = () => {
  const {
    mainContainer,
    resultsContainer,
    resultsColumn,
    correct,
    incorrect,
    res,
  } = useStyles();

  return (
    <Container className={mainContainer}>
      <IntroText content="Select the correct article (De | Het) according to the displayed word:" />

      <QuizBox />

      <Grid container className={resultsContainer}>
        <Grid xs={3} item>
          Results
        </Grid>
        <Grid item container xs={9}>
          <Grid item xs={5} className={clsx(resultsColumn, correct)}>
            Correct <span className={res}>0</span>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5} className={clsx(resultsColumn, incorrect)}>
            Incorrect <span className={res}>0</span>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TestYourself;
