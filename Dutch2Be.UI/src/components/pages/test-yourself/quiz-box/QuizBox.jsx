import { Button, Container, Grid, Paper } from "@material-ui/core";
import React, { useCallback, useContext, useEffect } from "react";
import { useStyles } from "./QuizBoxStyle";
import clsx from "clsx";
import { useHttpClient } from "../../../../hooks/http-hook";
import { AppContext } from "../../../../providers/AppContext";

const QuizBox = () => {
  // style
  const {
    boxContainer,
    display,
    articleBtn,
    answerBtnsGrid,
    displayGrid,
    de,
    het,
    noArticle,
    wrongArticle,
  } = useStyles();

  // context
  const {
    isStarted,
    setIsStarted,
    setFetchedQuizArr,
    quizWord,
    setQuizWord,
    fetchedQuizArr,
    quizWordCounter,
    setQuizWordCounter,
    isCorrect,
    setIsCorrect,
    correctScore,
    setCorrectScore,
    incorrectScore,
    setIncorrectScore,
  } = useContext(AppContext);

  // hooks
  const { sendRequest } = useHttpClient();

  const clickAnswerBtn = useCallback(
    async (e) => {
      const clickedArticle = e.target.innerText || e.target.textContent;

      // check answer update score
      if (fetchedQuizArr[quizWordCounter].article === clickedArticle) {
        setCorrectScore((pre) => pre + 1);
      } else {
        setIncorrectScore((pre) => pre + 1);
      }

      // update counter
      setQuizWordCounter((pre) => pre + 1);

      // update quiz word
      setQuizWord(
        quizWordCounter < 9
          ? fetchedQuizArr[quizWordCounter + 1].value
          : "Wanna play more? start again :D"
      );

      // alert the answer status
      // end quiz
      if (quizWordCounter >= 9) {
        setIsStarted(false);
      }
    },
    [
      fetchedQuizArr,
      quizWordCounter,
      setCorrectScore,
      setIncorrectScore,
      setIsStarted,
      setQuizWord,
      setQuizWordCounter,
    ]
  );

  const displayQuizWord = useCallback(() => {
    return quizWord || "Click Start to play";
  }, [quizWord]);

  return (
    <Grid container className={boxContainer}>
      <Grid item container xs={12} className={displayGrid}>
        <Paper elevation={0} className={display}>
          {displayQuizWord()}
        </Paper>
      </Grid>

      <Grid item container xs={12} className={answerBtnsGrid}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={clsx(articleBtn, de)}
            onClick={(e) => clickAnswerBtn(e)}
            disabled={!isStarted || quizWordCounter > 9}
          >
            De
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={clsx(articleBtn, het)}
            onClick={(e) => clickAnswerBtn(e)}
            disabled={!isStarted || quizWordCounter > 9}
          >
            Het
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={clsx(articleBtn, noArticle)}
            onClick={(e) => clickAnswerBtn(e)}
            disabled={!isStarted || quizWordCounter > 9}
          >
            None
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={clsx(articleBtn, wrongArticle)}
            onClick={(e) => clickAnswerBtn(e)}
            disabled={!isStarted || quizWordCounter > 9}
          >
            Not a Dutch word!
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuizBox;
