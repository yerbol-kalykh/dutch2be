import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      padding: "10vh 10vw",
      minHeight: "80vh",
      // border: "1px solid blue",
    },

    boxContainer: {
      minHeight: "40vh",
      minWidth: "400px",
      // border: "1px solid blue",
    },

    inputContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      // border: "1px solid silver",
    },
  })
);
