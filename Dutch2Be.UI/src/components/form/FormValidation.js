import * as yup from "yup";

export const validationSchema = yup.object({
  word: yup.string().required("Required!, type a word"),
});
