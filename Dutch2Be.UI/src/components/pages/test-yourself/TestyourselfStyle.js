import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      padding: "10vh 10vw",
      minHeight: "80vh",
      textAlign: "center",
      // border: "1px solid blue",
    },

    startWrap: {
      minWidth: "400px",
    },
    startBtn: {
      border: "1px dashed #000",
      width: "100%",
      background: "cornflowerBlue",
      color: "#000",
      transition: "letterSpacing 1sec",
      "&:hover": {
        background: "linear-gradient(45deg, blue 30%, purple 90%)",
        fontWeight: "bold",
        letterSpacing: "1vw",
        color: "#fff",
      },
    },
    count: { background: "#777", padding: "1vh 0", color: "#fff" },

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
