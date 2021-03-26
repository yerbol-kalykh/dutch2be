import { Button, Container, Grid, Paper } from "@material-ui/core";
import React, { useContext } from "react";
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
    fetchedArr,
    quizWord,
    setQuizWord,
    fetchedQuizArr,
  } = useContext(AppContext);

  // hooks
  const { sendRequest } = useHttpClient();

  const clickAnswerBtn = async () => {
    // try {
    //   const fetchedArr = await sendRequest(`/api/words`, "GET", null, {
    //     "Content-Type": "json/application",
    //   });
    //   setFetchedQuizArr(fetchedArr);
    //   console.log(fetchedArr);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Grid container className={boxContainer}>
      <Grid item container xs={12} className={displayGrid}>
        <Paper elevation={0} className={display}>
          {(fetchedQuizArr && fetchedQuizArr[0] && fetchedQuizArr[0].value) ||
            "woord"}
        </Paper>
      </Grid>

      <Grid item container xs={12} className={answerBtnsGrid}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={clsx(articleBtn, de)}
            onClick={clickAnswerBtn}
          >
            De
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={clsx(articleBtn, het)}
            onClick={clickAnswerBtn}
          >
            Het
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={clsx(articleBtn, noArticle)}
            onClick={clickAnswerBtn}
          >
            None
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={clsx(articleBtn, wrongArticle)}
            onClick={clickAnswerBtn}
          >
            Not a Dutch word!
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuizBox;
