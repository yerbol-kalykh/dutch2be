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

    inputDiv: {
      width: "90%",
      height: "60%",
      // border: "1px solid red",
      display: "flex",
    },

    input: {
      width: "100%",
      marginTop: "auto",
    },

    submitBtn: {
      width: "90%",
      height: "40%",
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
