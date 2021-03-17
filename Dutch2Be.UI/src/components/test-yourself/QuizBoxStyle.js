import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: "10vh 10vw",
    },
    containerGrid_QuizBoz: {
      minHeight: "30vh",
    },
    basicStyle_QuizItem: {
      width: "100%",
      height: "100%",
      fontSize: "3rem",
    },
    word: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
