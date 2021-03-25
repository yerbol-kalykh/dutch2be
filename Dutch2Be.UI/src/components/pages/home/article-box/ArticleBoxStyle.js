import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
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
