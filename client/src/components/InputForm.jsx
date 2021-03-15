import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const InputForm = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const validationSchema = yup.object({
    word: yup.string().required("Required!"),
  });

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
          />
          <ErrorMessage name="word" />

          <Button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default InputForm;
