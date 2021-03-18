import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    boxContainer: {
      minHeight: "40vh",
      minWidth: "400px",
      // border: "1px solid blue",
    },

    inputContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      border: "1px solid silver",
    },

    articleBtn: {
      width: "100%",
      height: "50%",
    },

    respondingArticle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "3vw",
      height: "100%",
    },
  })
);
