import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      padding: "10vh 10vw",
      minHeight: "80vh",
      textAlign: "center",
      // border: "1px solid blue",
    },

    resultsContainer: {
      fontWeight: "bold",
      margin: "1vh 0 0",
      padding: "3vh 1vw",
      background: "#333",
      color: "#bbb",
      borderRadius: "4px",
      fontSize: "3vw",
      minWidth: "400px",
    },

    resultsColumn: {
      border: "1px dashed red",
      padding: "1vh 1vw",
      textAlign: "left",
      borderRadius: "4px",
      fontSize: "2vw",
    },

    correct: {
      background: "green",
    },

    incorrect: {
      background: "maroon",
    },

    res: {
      color: "#000",
      // border: "1px dashed #000",
      marginLeft: "3vw",
      padding: ".5vh 1vw",
      fontWeight: "bold",
      background: "#aaa",
      borderRadius: "10px",
    },
  })
);
