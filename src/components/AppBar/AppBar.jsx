import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { LogoIcon } from "../../images/icons";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <div className={css.title}>
        <LogoIcon />
        <h1 className={css.titleText}>Phonebook</h1>
      </div>
    </>
  );
};
