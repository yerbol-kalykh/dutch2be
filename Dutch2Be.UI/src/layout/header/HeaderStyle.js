import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: "13vh",
      maxWidth: "100vw",
    },
    title: {
      flexGrow: 1,
    },
    testBtn: {
      marginLeft: "2vw",
    },
  })
);
