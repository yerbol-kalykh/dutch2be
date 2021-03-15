import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
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
