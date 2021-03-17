import { Button, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import { useStyles } from "./QuizBoxStyle";

const TestYourself = () => {
  const {
    container,
    containerGrid_QuizBoz,
    basicStyle_QuizItem,
    word,
  } = useStyles();
  return (
    <Container className={container}>
      <Grid container className={containerGrid_QuizBoz}>
        <Grid item container xs={6}>
          <Grid item xs={12}>
            <Button variant="contained" className={basicStyle_QuizItem}>
              De
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" className={basicStyle_QuizItem}>
              Het
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Paper className={`${basicStyle_QuizItem} ${word}`}>word</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TestYourself;
