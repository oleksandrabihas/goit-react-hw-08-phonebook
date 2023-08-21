import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();

  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="email" name="email" />
      </label>
      <label>
        <input type="password" name="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};
