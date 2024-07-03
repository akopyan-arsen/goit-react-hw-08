import { NavLink } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";
import { LogoIcon } from "../../images/icons";

const RegistrationPage = () => {
  return (
    <>
      <NavLink className={css.titleLink} to="/">
        <div className={css.title}>
          <LogoIcon />
          <h1 className={css.titleText}>Phonebook</h1>
        </div>
      </NavLink>
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;
