import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik, Field, Form, ErrorMessage } from 'formik';
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
      {({ errors, touched }) => (
        <Form>
          <label>
            Username
            <Field type="text" name="name" />
          </label>
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
          </label>
          <ErrorMessage name='password'
          component='div'/>
          <button type="submit">Sign up</button>
        </Form>
      )}
    </Formik>
  );
};
