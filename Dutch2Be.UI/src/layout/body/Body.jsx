import { Grid, Typography } from "@material-ui/core";
import React from "react";
import AnswerBox from "../../components/AnswerBox";
import InputForm from "../../components/form/InputForm";
// style
import { useStyles } from "./BodyStyle";

const Body = () => {
  const { rootBody, gridItem, text } = useStyles();

  return (
    <main>
      <Grid container className={rootBody}>
        <Grid item className={gridItem}>
          <AnswerBox />
        </Grid>
        <Grid item className={gridItem}>
          <Typography variant="h5" className={text}>
            Type a word (Noun) and submit whether to know it takes (De | Het)
          </Typography>

          <InputForm />
        </Grid>
      </Grid>
    </main>
  );
};

export default Body;
