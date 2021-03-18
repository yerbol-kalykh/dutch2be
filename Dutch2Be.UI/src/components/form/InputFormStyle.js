import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    form: {
      // border: "1px solid red",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },

    input: {
      width: "100%",
      marginTop: "auto",
    },

    submitBtn: {
      width: "90%",
      height: "40%",
    },

    errMsg: {
      color: "red",
      fontSize: "1.5rem",
      background: "#444",
      padding: "2vh 1vw",
      textAlign: "center",
      width: "90%",
      borderRadius: "10px",
    },

    inputDiv: {
      width: "90%",
      height: "60%",
      // border: "1px solid red",
      display: "flex",
    },
  })
);
