import { createStyles, makeStyles, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import * as yup from "yup";
// context
import { AppContext } from "../context/AppContext";

const useStyles = makeStyles((theme) =>
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

const validationSchema = yup.object({
  word: yup.string().required("Required!, type a word"),
});

const InputForm = () => {
  const { word, setWord } = useContext(AppContext);

  const onSubmit = (values, { resetForm }) => {
    setWord(values.word);
    console.log(word);
    resetForm();
  };

  const { input, submitBtn, errMsg } = useStyles();

  return (
    <Formik
      initialValues={{
        word: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, isValid, isSubmitting }) => (
        <Form>
          <Field
            name="word"
            label="Word"
            placeholder="stool"
            value={values.word}
            as={TextField}
            className={input}
          />

          <ErrorMessage
            name="word"
            render={(msg) => <div className={errMsg}>{msg}</div>}
          />

          <Button
            className={submitBtn}
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            Submit
          </Button>
          <h2>{word}</h2>

          <h1>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </h1>
        </Form>
      )}
    </Formik>
  );
};

export default InputForm;
