import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      padding: "10vh 10vw",
      minHeight: "80vh",
      textAlign: "center",
      // border: "1px solid blue",
    },

    boxContainer: {
      minHeight: "30vh",
      minWidth: "400px",
      // border: "1px dashed black",
    },

    inputContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      // border: "1px solid silver",
    },

    typesContainer: {
      margin: "1vh 0 0",
      minWidth: "400px",
      background: "#333",
      color: "#bbb",
      borderRadius: "4px",
      fontWeight: "bold",
      padding: "3vh 1vw",
      fontSize: "3vw",
      // display: "flex",
      // justifyContent: "space-between",
    },

    resultType: {
      // border: "1px dashed red",
      padding: "1vh 1vw",
      borderRadius: "4px",
      fontSize: "2vw",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
      color: "#333",
    },
  })
);
