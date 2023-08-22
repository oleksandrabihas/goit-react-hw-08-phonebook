import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const LoginSchema = yup.object({
  email: yup.string().required('Required'),
  password: yup.string().required('Required').min(7),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(
      login({
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        resetForm();
      });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form>
        <label htmlFor="emailLogin">Email* </label>
        <Field id="emailLogin" type="email" name="email" required />
        <ErrorMessage name="email" />
        <label htmlFor='passwordLogin'>Password*</label>
        <Field
          id="passwordLogin"
          type="password"
          name="password"
          pattern=".{7,}"
          title="Password must be at least 7 characters long"
          required
        />
        <button>Log in</button>
      </Form>
    </Formik>
  );
};
