import { Button, Container, Grid, Paper } from "@material-ui/core";
import React, { useCallback, useContext, useEffect, useState } from "react";
// components
import IntroText from "../../shared/intro-text/IntroText";
import QuizBox from "./quiz-box/QuizBox";
// style
import { useStyles } from "./TestyourselfStyle";
import clsx from "clsx";
import { AppContext } from "../../../providers/AppContext";
import { useHttpClient } from "../../../hooks/http-hook";

const TestYourself = () => {
  // context
  const {
    isStarted,
    setIsStarted,
    setFetchedQuizArr,
    fetchedArr,
    quizWord,
    setQuizWord,
  } = useContext(AppContext);
  const [wordCounter, setWordCounter] = useState(0);
  // hook
  const { sendRequest } = useHttpClient();

  const {
    mainContainer,
    resultsContainer,
    resultsColumn,
    correct,
    incorrect,
    res,
    startBtn,
    startWrap,
    count,
  } = useStyles();

  const start = useCallback(async () => {
    setIsStarted(!isStarted);

    try {
      const fetchedArr = await sendRequest(`/api/words`, "GET", null, {
        "Content-Type": "json/application",
      });
      setFetchedQuizArr(fetchedArr);
      setQuizWord(fetchedArr[wordCounter].value);
      setWordCounter((pre) => pre + 1);

      console.log(fetchedArr);
    } catch (error) {
      console.log(error);
    }
  }, [
    setIsStarted,
    isStarted,
    setFetchedQuizArr,
    sendRequest,
    setQuizWord,
    wordCounter,
  ]);

  // useEffect(() => {}, []);

  return (
    <Container className={mainContainer}>
      <IntroText content="Select the correct answer according to the displayed word" />
      <div className={startWrap}>
        <Button className={startBtn} onClick={start}>
          {!isStarted ? "Start Quiz" : "Restart"}
        </Button>
        <Paper className={count}>
          {1} / {fetchedArr ? fetchedArr.length : 0}
        </Paper>
      </div>

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
