import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    boxContainer: {
      minHeight: "30vh",
      minWidth: "400px",
      border: "1px dashed #333",
      borderRadius: "4px",
    },

    wordGrid: {
      height: "20vh",
      // border: "1px dashed #333",
    },

    answer: {
      // border: "1px dashed #333",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "3vw",
      width: "100%",
    },

    articleBtn: {
      width: "100%",
      height: "100%",
      transition: "background .5s, color .5s",
      transform: "toLowerCase",
      textTransform: "none",
      "&:hover": {
        background: "green",
        fontSize: "1rem",
        color: "#fff",
      },
    },

    answerBtnsGrid: {
      height: "10vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px dashed #000",
    },
  })
);
