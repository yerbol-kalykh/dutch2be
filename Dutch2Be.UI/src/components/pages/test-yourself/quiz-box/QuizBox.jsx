import { Button, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { useStyles } from "./QuizBoxStyle";

const QuizBox = () => {
  const {
    boxContainer,
    answer,
    articleBtn,
    answerBtnsGrid,
    wordGrid,
  } = useStyles();

  return (
    <Grid container className={boxContainer}>
      <Grid item container xs={12} className={wordGrid}>
        <Paper className={answer}>word</Paper>
      </Grid>

      <Grid item container xs={12}>
        <Grid item xs={3} className={answerBtnsGrid}>
          <Button variant="contained" className={articleBtn}>
            De
          </Button>
        </Grid>
        <Grid item xs={3} className={answerBtnsGrid}>
          <Button variant="contained" className={articleBtn}>
            Het
          </Button>
        </Grid>
        <Grid item xs={3} className={answerBtnsGrid}>
          <Button variant="contained" className={articleBtn}>
            None
          </Button>
        </Grid>
        <Grid item xs={3} className={answerBtnsGrid}>
          <Button variant="contained" className={articleBtn}>
            Not a Dutch word!
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuizBox;
