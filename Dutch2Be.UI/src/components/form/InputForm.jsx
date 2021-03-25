import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { useHttpClient } from "../../hooks/http-hook";
// context
import { AppContext } from "../../providers/AppContext";
// form validation
import { validationSchema } from "./FormValidation";
// style
import { useStyles } from "./InputFormStyle";

const InputForm = () => {
  const { setWord, setArticle } = useContext(AppContext);
  const { sendRequest } = useHttpClient();

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    setWord(values.word);

    try {
      const fetchArticle = await sendRequest(
        `/api/words/${values.word}`,
        "GET",
        null,
        {
          "Content-Type": "json/application",
        }
      );

      setArticle(fetchArticle ? `${fetchArticle.article}` : `no such word!`);

      // console.log(fetchArticle);

      setSubmitting(false);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const { input, submitBtn, inputDiv, form, errMsg } = useStyles();

  return (
    <Formik
      initialValues={{
        word: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => {
        // console.log(props);
        const getFieldProps = (props) => {
          return {
            ...props,
            onBlur: (...args) => {
              props.handleBlur(...args);
              props.onBlur && props.onBlur(...args);
            },
            // ... other props
          };
        };
        return (
          <Form className={form}>
            <ErrorMessage
              name="word"
              render={(msg) => {
                console.log(msg);
                return <div className={errMsg}>{msg}</div>;
              }}
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default InputForm;
