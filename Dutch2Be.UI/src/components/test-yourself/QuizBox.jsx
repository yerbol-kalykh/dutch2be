import { Button, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { useStyles } from "./QuizBoxStyle";

const QuizBox = () => {
  const {
    boxContainer,
    inputContainer,
    respondingArticle,
    articleBtn,
  } = useStyles();

  return (
    <Grid container className={boxContainer}>
      <Grid item container xs={6} className={inputContainer}>
        <Button variant="contained" className={articleBtn}>
          De
        </Button>
        <Button variant="contained" className={articleBtn}>
          Het
        </Button>
      </Grid>

      <Grid item xs={6}>
        <Paper className={respondingArticle}>word</Paper>
      </Grid>
    </Grid>
  );
};

export default QuizBox;
