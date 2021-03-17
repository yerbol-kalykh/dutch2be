import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: "10vh 10vw",
    },

    containerGrid_QuizBoz: {
      minHeight: "30vh",
      minWidth: "400px",
    },

    center: { height: "100%", display: "flex", justifyContent: "center" },

    inputContainer: {
      display: "flex",
      border: "1px solid silver",
    },

    inputWord: {
      height: "70%",
      width: "100%",
      flexGrow: 1,
    },

    respondingArticle: {
      alignItems: "center",
      fontSize: "3rem",
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
