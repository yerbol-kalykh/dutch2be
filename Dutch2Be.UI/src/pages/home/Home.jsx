import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";
import IntroText from "../../components/intro-text/InrtoText";
import { useStyles } from "./HomeStyle";

const Home = () => {
  const {
    mainContainer,
    boxContainer,
    inputDiv,
    respondingArticle,
    center,
    waitingResponse,
    de,
    het,
    inputContainer,
    submitBtn,
    input,
  } = useStyles();

  return (
    <Container className={mainContainer}>
      <IntroText content="Type a word (Noun) and submit whether to know it takes (De | Het)" />

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
          <div className={inputDiv}>
            <TextField
              required
              multiline={true}
              // variant="outlined"
              color="primary"
              size="medium"
              label="woord"
              className={input}
            />
          </div>

          <Button className={submitBtn} variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
