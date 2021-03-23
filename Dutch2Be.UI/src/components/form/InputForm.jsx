import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useEffect } from "react";
// context
import { AppContext } from "../../providers/AppContext";
// hooks
import { useHttpClient } from "../../hooks/http-hook";
// form validation
import { validationSchema } from "./FormValidation";
// style
import { useStyles } from "./InputFormStyle";
// mocked
import { data } from "../../mocked-data";

const InputForm = () => {
  const { word, article, setWord, setArticle } = useContext(AppContext);
  // const { sendRequest } = useHttpClient();

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    console.log(data);
    setWord(values.word);

    const word = values.word;
    const inputWord = data.find((obj) => obj.value === word);
    setArticle(inputWord ? inputWord.article : "wrong word!");

    // try {
    //   const fetchArticle = await sendRequest(
    //     `/api/words/${values.word}`,
    //     "POST",
    //     // JSON.stringify(values.word),
    //     { "Content-Type": "json/application" }
    //   );

    //   console.log(fetchArticle);

    // setSubmitting(false);
    resetForm();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const { input, submitBtn, inputDiv, form, errMsg } = useStyles();

  // useEffect(() => {
  //   console.log(`word: ${word}\narticle: ${article}`);
  // }, [word, article]);

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
