import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";
import InputForm from "../../components/form/InputForm";
import IntroText from "../../components/intro-text/InrtoText";
import { useStyles } from "./HomeStyle";

const Home = () => {
  const {
    mainContainer,
    boxContainer,
    respondingArticle,
    center,
    waitingResponse,
    de,
    het,
    inputContainer,
  } = useStyles();

  return (
    <Container className={mainContainer}>
      <IntroText content="Type a word (Noun) and submit to know whether it takes (De | Het)" />

      <Grid container className={boxContainer}>
        <Grid item xs={6}>
          <Paper
            className={`${center} ${respondingArticle} ${
              true ? waitingResponse : true ? de : het
            }`}
          >
            {true ? "?" : "De"}
          </Paper>
        </Grid>

        <Grid item xs={6} className={inputContainer}>
          <InputForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
