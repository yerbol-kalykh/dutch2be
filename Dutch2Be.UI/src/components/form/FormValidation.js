import * as yup from "yup";

export const validationSchema = yup.object({
  word: yup.string().required(
    `Required! - \n\n
  Please type a word`
  ),
});
