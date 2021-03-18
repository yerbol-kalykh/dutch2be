import { Container } from "@material-ui/core";
import React from "react";
// components
import IntroText from "../../components/intro-text/InrtoText";
import QuizBox from "../../components/test-yourself/QuizBox";
// style
import { useStyles } from "./TestyourselfStyle";

const TestYourself = () => {
  const { mainContainer } = useStyles();

  return (
    <Container className={mainContainer}>
      <IntroText content="Select the correct article (De | Het) according to the displayed word:" />

      <QuizBox />
    </Container>
  );
};

export default TestYourself;
