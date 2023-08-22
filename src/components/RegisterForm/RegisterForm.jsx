import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const SignUpSchema = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().required('Required'),
  password: yup.string().required('Required').min(7),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={SignUpSchema}
    >
      <Form>
        <label htmlFor="nameSignUp">Username </label>
        <Field id="nameSignUp" type="text" name="name" required />
        <label htmlFor="emailSignUp">Email </label>
        <Field id="emailSignUp" type="email" name="email" required />

        <label htmlFor="passwordSignUp">Password </label>
        <Field
          id="passwordSignUp"
          type="password"
          name="password"
          pattern=".{7,}"
          title="Password must be at least 7 characters long"
          required
        />
        <button>Sign up</button>
      </Form>
    </Formik>
  );
};
