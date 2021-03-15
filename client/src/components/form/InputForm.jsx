import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
// context
import { AppContext } from "../../context/AppContext";
// form validation
import { validationSchema } from "./FormValidation";
// style
import { useStyles } from "./InputFormStyle";

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
