import { Button, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { useStyles } from "./QuizBoxStyle";
import clsx from "clsx";

const QuizBox = () => {
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

  return (
    <Grid container className={boxContainer}>
      <Grid item container xs={12} className={displayGrid}>
        <Paper elevation={0} className={display}>
          word
        </Paper>
      </Grid>

      <Grid item container xs={12} className={answerBtnsGrid}>
        <Grid item xs={2}>
          <Button variant="contained" className={clsx(articleBtn, de)}>
            De
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" className={clsx(articleBtn, het)}>
            Het
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" className={clsx(articleBtn, noArticle)}>
            None
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            className={clsx(articleBtn, wrongArticle)}
          >
            Not a Dutch word!
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuizBox;
