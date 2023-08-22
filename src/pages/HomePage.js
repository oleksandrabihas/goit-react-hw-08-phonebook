import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/selectors';

export default function HomePage() {
  const isAuth = useSelector(selectIsAuth);
  return (
    <section>
      <h1>It is your own contacts library</h1>
      <p>
        Let's {' '}
        {isAuth ? (
          <NavLink to="/contacts"> go to my contacts</NavLink>
        ) : (
          <NavLink to="/logIn"> login</NavLink>
        )}
      </p>
    </section>
  );
}
