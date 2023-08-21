import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/selectors';

export const Navigation = () => {
    const isAuth = useSelector(selectIsAuth)
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isAuth ? (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          <UserMenu />
        </>
      ) : (
        <>
          <NavLink to="/signUp">Sign up</NavLink>
          <NavLink to="/logIn">Log in</NavLink>
        </>
      )}
    </nav>
  );
};
