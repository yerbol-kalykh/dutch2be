import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
// context
import { AppContext } from "../../providers/AppContext";
// hooks
import { useHttpClient } from "../../hooks/http-hook";
// form validation
import { validationSchema } from "./FormValidation";
// style
import { useStyles } from "./InputFormStyle";

const InputForm = () => {
  const { word, setWord } = useContext(AppContext);
  const { sendRequest } = useHttpClient();

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    console.log(word);
    setWord(values.word);

    setSubmitting(false);
    console.log(values);

    try {
      const fetchArticle = await sendRequest(
        `https://dutch2beapi.azurewebsites.net/api/words/${values.word}`,
        "POST"
      );

      console.log(fetchArticle);

      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const { input, submitBtn, inputDiv, form, errMsg } = useStyles();

  return (
    <Formik
      initialValues={{
        word: word,
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => {
        // console.log(props);
        return (
          <Form className={form}>
            <ErrorMessage
              name="word"
              render={(msg) => <div className={errMsg}>{msg}</div>}
            />

            <div className={inputDiv}>
              <Field
                name="word"
                value={props.values.word}
                required
                as={TextField}
                variant="outlined"
                color="primary"
                size="medium"
                label="woord"
                className={input}
                onBlur={props.handleBlur}
              />
            </div>

            <Button
              type="submit"
              disabled={!props.isValid || props.isSubmitting}
              className={submitBtn}
              variant="contained"
            >
              Submit
            </Button>

            {/* <h1>
              <pre>{JSON.stringify(word, null, 2)}</pre>
            </h1> */}
          </Form>
        );
      }}
    </Formik>
  );
};

export default InputForm;
