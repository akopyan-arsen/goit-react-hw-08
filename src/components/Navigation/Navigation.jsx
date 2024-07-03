import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import { LogoIcon } from "../../images/icons";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.contactlink, isActive && css.active);
  };
  return (
    <nav className={css.nav}>
      <NavLink className={clsx(css.link, css.titleLink)} to="/">
        <div className={css.title}>
          <LogoIcon />
          <h1 className={css.titleText}>Phonebook</h1>
        </div>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
