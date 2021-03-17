import { Container } from "@material-ui/core";
import React from "react";
import IntroText from "../../components/intro-text/InrtoText";
import QuizBox from "../../components/test-yourself/QuizBox";

const TestYourself = () => {
  return (
    <Container
      style={{
        padding: "10vh 10vw",
      }}
    >
      <IntroText content="Select the correct article (De | Het) according to the displayed word:" />
      <QuizBox />
    </Container>
  );
};

export default TestYourself;
