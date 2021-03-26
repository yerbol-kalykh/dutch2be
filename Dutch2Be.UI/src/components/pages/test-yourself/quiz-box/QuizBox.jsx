import { Button, Container, Grid, Paper } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
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
    correctCounter,
    setCorrectCounter,
    incorrectCounter,
    setIncorrectCounter,
  } = useContext(AppContext);

  // hooks
  const { sendRequest } = useHttpClient();

  const clickAnswerBtn = async (e) => {
    const clickedArticle = e.target.innerText || e.target.textContent;
    // check answer

    if (fetchedQuizArr[quizWordCounter].article === clickedArticle) {
      setCorrectCounter((pre) => pre + 1);
    } else {
      setIncorrectCounter((pre) => pre + 1);
    }
    console.log(fetchedQuizArr[quizWordCounter].article);
    setIsCorrect(fetchedQuizArr[quizWordCounter].article === clickedArticle);

    // update counter
    // update quiz word

    // reset
  };

  // useEffect(() => {
  //   console.log(isCorrect);
  //   // reset
  // }, [isCorrect]);

  // useEffect(() => {}, []);

  return (
    <Grid container className={boxContainer}>
      <Grid item container xs={12} className={displayGrid}>
        <Paper elevation={0} className={display}>
          {(fetchedQuizArr && fetchedQuizArr[0] && fetchedQuizArr[0].value) ||
            "Please click start"}
        </Paper>
      </Grid>

      <Grid item container xs={12} className={answerBtnsGrid}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={clsx(articleBtn, de)}
            onClick={(e) => clickAnswerBtn(e)}
            disabled={!isStarted}
          >
            De
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={clsx(articleBtn, het)}
            onClick={(e) => clickAnswerBtn(e)}
            disabled={!isStarted}
          >
            Het
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={clsx(articleBtn, noArticle)}
            onClick={(e) => clickAnswerBtn(e)}
            disabled={!isStarted}
          >
            None
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={clsx(articleBtn, wrongArticle)}
            onClick={(e) => clickAnswerBtn(e)}
            disabled={!isStarted}
          >
            Not a Dutch word!
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuizBox;
