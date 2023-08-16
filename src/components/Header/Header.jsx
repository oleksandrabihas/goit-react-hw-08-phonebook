import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/signUp">Sign up</NavLink>
        <NavLink to="/logIn">Log in</NavLink>
      </nav>
    </header>
  );
};
