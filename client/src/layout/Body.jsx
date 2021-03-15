import {
  createStyles,
  makeStyles,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import InputForm from "../components/InputForm";

const useStyles = makeStyles((theme) =>
  createStyles({
    rootBody: {},
    // title: {
    //   flexGrow: 1,
    // },
  })
);

const Body = () => {
  const { rootBody } = useStyles();

  return (
    <main>
      <Grid container>
        <Grid item>
          <Skeleton variant="rect" width={480} height={400} />
        </Grid>
        <Grid item>
          <InputForm />
        </Grid>
      </Grid>
    </main>
  );
};

export default Body;
