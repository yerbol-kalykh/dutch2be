import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    input: {
      width: "100%",
    },
    submitBtn: {
      width: "100%",
      marginTop: "1vh",
      padding: "3vh 0",
    },
    errMsg: {
      color: "red",
      background: "#333",
      padding: "1vh 0",
      textAlign: "center",
    },
  })
);
