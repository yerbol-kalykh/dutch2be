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
    fetchedQuizArr,
    setFetchedQuizArr,
    quizWord,
    setQuizWord,
    quizWordCounter,
    setQuizWordCounter,
    correctScore,
    setCorrectScore,
    incorrectScore,
    setIncorrectScore,
  } = useContext(AppContext);
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

  const fetchQuizArr = useCallback(async () => {
    try {
      const fetchedArr = await sendRequest(`/api/words`, "GET", null, {
        "Content-Type": "json/application",
      });
      return fetchedArr;
    } catch (error) {
      console.log(error);
    }
  }, [sendRequest]);

  const start = useCallback(async () => {
    setIsStarted(true);
    setQuizWordCounter(0);
    setCorrectScore(0);
    setIncorrectScore(0);
    const arr = await fetchQuizArr();

    setFetchedQuizArr(arr);
    console.log(arr);
    setQuizWord(arr[quizWordCounter]?.value);
    console.log(quizWord);
  }, [
    setIsStarted,
    setFetchedQuizArr,
    setQuizWord,
    quizWordCounter,
    fetchQuizArr,
    setCorrectScore,
    setIncorrectScore,
    setQuizWordCounter,
    quizWord,
  ]);

  const displayWordsCount = useCallback(() => {
    return `${isStarted ? quizWordCounter + 1 : quizWordCounter} / ${
      fetchedQuizArr?.length
    }`;
  }, [quizWordCounter, fetchedQuizArr, isStarted]);

  // useEffect(() => {
  //   console.log(fetchedQuizArr);
  // }, [fetchedQuizArr]);

  useEffect(() => {
    isStarted && start();
  }, [isStarted]);

  return (
    <Container className={mainContainer}>
      <IntroText content="Select the correct answer according to the displayed word" />
      <div className={startWrap}>
        <Button className={startBtn} onClick={start}>
          {!isStarted ? "Start Quiz" : "Restart"}
        </Button>
        <Paper className={count}>{displayWordsCount()}</Paper>
      </div>

      <QuizBox />

      <Grid container className={resultsContainer}>
        <Grid xs={3} item>
          Results
        </Grid>
        <Grid item container xs={9}>
          <Grid item xs={5} className={clsx(resultsColumn, correct)}>
            Correct <span className={res}> {correctScore} </span>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={5} className={clsx(resultsColumn, incorrect)}>
            Incorrect <span className={res}> {incorrectScore} </span>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TestYourself;
