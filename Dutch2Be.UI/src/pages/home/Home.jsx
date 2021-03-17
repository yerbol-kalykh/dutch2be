import { Grid, Typography } from "@material-ui/core";
import React from "react";
import AnswerBox from "../../components/AnswerBox";
import InputForm from "../../components/form/InputForm";
import Home2 from "./Home2";
import { useStyles } from "./HomeStyle";

const Home = () => {
  const { rootBody, gridItem, text } = useStyles();

  return (
    // <Grid container className={rootBody}>
    //   <Grid item className={gridItem}>
    //     <AnswerBox />
    //   </Grid>
    //   <Grid item className={gridItem}>
    //     <Typography variant="h5" className={text}>
    //       Type a word (Noun) and submit whether to know it takes (De | Het)
    //     </Typography>

    //     <InputForm />
    //   </Grid>
    // </Grid>
    <Home2 />
  );
};

export default Home;
