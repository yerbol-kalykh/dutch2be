import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
// mocked
import { data } from "../../mocked-data";
// context
import { AppContext } from "../../providers/AppContext";
// form validation
import { validationSchema } from "./FormValidation";
// style
import { useStyles } from "./InputFormStyle";

const InputForm = () => {
  const { word, setWord, setArticle } = useContext(AppContext);
  // const { sendRequest } = useHttpClient();

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    console.log(data);
    setWord(values.word);

    const word = values.word;
    const inputWord = data.find((obj) => obj.value === word);
    setArticle(inputWord ? inputWord.article : `no such word!`);

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
        console.log(props);
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
              // disabled={props.isSubmitting}
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
