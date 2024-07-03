import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { selectUserLoading } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const isLoading = useSelector(selectUserLoading);

  const handleSubmit = (values, actions) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(15, "Password must be no more than 15 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .required("Password is required"),
  });

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className={css.form}>
          <div className={css.inputWrapper}>
            <label htmlFor={emailFieldId} className={css.label}>
              Email
            </label>
            <Field
              type="email"
              name="email"
              id={emailFieldId}
              className={css.input}
            />
            <ErrorMessage
              className={css.ErrorMessage}
              name="email"
              component="span"
            />
          </div>

          <div className={css.inputWrapper}>
            <label htmlFor={passwordFieldId} className={css.label}>
              Password
            </label>
            <Field
              type="password"
              name="password"
              id={passwordFieldId}
              className={css.input}
            />
            <ErrorMessage
              className={css.ErrorMessage}
              name="password"
              component="span"
            />
          </div>

          <button type="submit" className={css.button}>
            Log In
          </button>
        </Form>
      </Formik>
      {isLoading && <Loader />}
    </>
  );
};

export default LoginForm;
