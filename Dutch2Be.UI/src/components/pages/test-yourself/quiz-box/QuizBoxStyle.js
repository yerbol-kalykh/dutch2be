import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    boxContainer: {
      minHeight: "30vh",
      minWidth: "400px",
      borderRadius: "4px",
      background: "#fff",
      // border: "1px dashed #333",
    },

    displayGrid: {
      height: "20vh",
      // border: "1px dashed #333",
    },

    display: {
      // border: "1px dashed #333",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "3vw",
      width: "100%",
    },

    answerBtnsGrid: {
      height: "10vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // border: "1px dashed #000",
    },

    articleBtn: {
      minWidth: "90%",
      minHeight: "8vh",
      transition: "background .5s, color .5s",
      textTransform: "none",
      borderRadius: "50%",
      "&:hover": {
        color: "#fff",
      },
    },

    de: {
      "&:hover": {
        background: "green",
      },
    },

    het: {
      "&:hover": {
        background: "purple",
      },
    },

    noArticle: {
      "&:hover": {
        background: "#777",
      },
    },

    wrongArticle: {
      "&:hover": {
        background: "orange",
      },
    },
  })
);
