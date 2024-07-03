import { startTransition, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/Loader/Loader";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { NavLink } from "react-router-dom";
import css from "./ContactPage.module.css";
import { LogoIcon } from "../../images/icons";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    startTransition(() => {
      dispatch(fetchContacts());
    });
  }, [dispatch]);

  return (
    <>
      <NavLink className={css.titleLink} to="/">
        <div className={css.title}>
          <LogoIcon />
          <h1 className={css.titleText}>Phonebook</h1>
        </div>
      </NavLink>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      <ContactList />
    </>
  );
};
export default ContactsPage;
