import { Grid, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React, { useContext } from "react";
import InputForm from "../../components/form/InputForm";
// style
import { useStyles } from "./BodyStyle";
// context
import { AppContext } from "../../context/AppContext";

const Body = () => {
  const { word } = useContext(AppContext);
  const { rootBody, gridItem, text } = useStyles();

  return (
    <main>
      <Grid container className={rootBody}>
        <Grid item className={gridItem}>
          {word ? word : <Skeleton variant="rect" width={480} height={400} />}
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
