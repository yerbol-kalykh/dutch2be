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

    respondingArticle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "7vw",
      height: "100%",
    },

    inputContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      // border: "1px solid silver",
    },

    waitingResponse: {
      background: "grey",
    },

    de: {
      background: "green",
    },

    het: {
      background: "purple",
    },
  })
);
