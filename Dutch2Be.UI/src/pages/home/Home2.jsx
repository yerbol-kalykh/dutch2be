import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Home2Style";

const Home2 = () => {
  const {
    container,
    containerGrid_QuizBoz,
    basicStyle_QuizItem,
    inputWord,
  } = useStyles();
  return (
    <Container className={container}>
      <Grid
        container
        className={containerGrid_QuizBoz}
        style={{ minWidth: "400px" }}
      >
        <Grid item container xs={6} style={{ minWidth: "400px" }}>
          <Grid item xs={12}>
            <Paper className={basicStyle_QuizItem}>De</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={basicStyle_QuizItem}>Het</Paper>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            multiline={true}
            variant="outlined"
            color="primary"
            size="medium"
            className={inputWord}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home2;
