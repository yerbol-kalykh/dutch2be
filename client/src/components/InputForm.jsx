import { createStyles, makeStyles, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

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

const InputForm = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const validationSchema = yup.object({
    word: yup.string().required("Required!, type a word"),
  });

  const { input, submitBtn, errMsg } = useStyles();

  return (
    <Formik
      initialValues={{
        word: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, isValid, isSubmitting, errors }) => (
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
        </Form>
      )}
    </Formik>
  );
};

export default InputForm;
