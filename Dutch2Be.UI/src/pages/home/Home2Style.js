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
    basicStyle_QuizItem: {
      width: "100%",
      height: "100%",
      fontSize: "3rem",
    },
    inputWord: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      border: "1px solid silver",
      padding: "0 3vw",
    },
  })
);
