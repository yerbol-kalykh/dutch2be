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

    flexCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // flexWrap: "wrap",
      // border: "1px dashed black",
    },

    respondingArticle: {
      fontSize: "5vw",
      overflow: "auto",
      minHeight: "50vh",
      maxHeight: "50vh",
      minWidth: "30vw",
      overflowWrap: "word-wrap",
      padding: ".5vh 1vw",
      textAlign: "center",
      margin: "0 0 1vh",
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

    noArticle: {
      background: "#777",
    },

    wrongArticle: {
      background: "orange",
    },
  })
);
