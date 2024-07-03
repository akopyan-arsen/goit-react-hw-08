import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink className={css.link} to="/register">
        <button type="button" className={css.button}>
          Register
        </button>
      </NavLink>
      <NavLink className={css.link} to="/login">
        <button type="button" className={css.button}>
          Log In
        </button>
      </NavLink>
    </div>
  );
};
