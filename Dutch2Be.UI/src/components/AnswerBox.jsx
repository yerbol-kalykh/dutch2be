import Skeleton from "@material-ui/lab/Skeleton";
import React, { useContext } from "react";
// context
import { AppContext } from "../providers/AppContext";

const AnswerBox = () => {
  const { word } = useContext(AppContext);
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "40px",
        minWidth: "40vw",
        minHeight: "40vh",
        marginTop: "10vh",
        boxShadow: "0 10px 10px  grey",
        background: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3rem",
        fontWeight: "bold",
        textShadow: "4px 2px #777",
        letterSpacing: "3px",
        padding: "0 3vw",
      }}
      onClick={() => console.log("show examples")}
    >
      DeHet {` `}
      {word ? word : <Skeleton variant="rect" width={480} height={400} />}
    </div>
  );
};

export default AnswerBox;
