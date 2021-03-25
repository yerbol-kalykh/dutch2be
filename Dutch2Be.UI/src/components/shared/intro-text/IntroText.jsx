import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./IntroTextStyle";

const IntroText = ({ content }) => {
  const { text } = useStyles();

  return (
    <Typography variant="h5" className={text}>
      {content}
    </Typography>
  );
};

export default IntroText;
