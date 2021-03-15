import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import InputForm from "../components/form/InputForm";

const useStyles = makeStyles((theme) =>
  createStyles({
    rootBody: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    gridItem: {
      // background: "red",
      // border: "1px solid black",
      minWidth: "40vw",
    },
    text: {
      margin: "10vh auto ",
    },
  })
);

const Body = () => {
  const { rootBody, gridItem, text } = useStyles();

  return (
    <main>
      <Grid container className={rootBody}>
        {/* <Grid item className={gridItem}>
          <Skeleton variant="rect" width={480} height={400} />
        </Grid> */}
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
