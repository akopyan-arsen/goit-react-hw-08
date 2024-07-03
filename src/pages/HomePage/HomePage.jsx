import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";
import { LogoIcon } from "../../images/icons";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import clsx from "clsx";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {!isLoggedIn && (
        <NavLink className={css.titleLink} to="/">
          <div className={css.title}>
            <LogoIcon />
            <h1 className={clsx(css.titleText, css.mainTitleText)}>
              Phonebook
            </h1>
          </div>
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className={css.titleLink} to="/contacts">
          <div className={css.title}>
            <LogoIcon />
            <h1 className={css.titleText}>Contacts</h1>
          </div>
        </NavLink>
      )}
      <div className={css.wrapper}>
        <h2 className={css.heroTitle}>
          All Your Contacts in One Convenient Place
        </h2>
      </div>
    </>
  );
};

export default HomePage;
