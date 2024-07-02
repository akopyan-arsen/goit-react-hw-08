import { startTransition, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/Loader/Loader";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";

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
      <ContactForm />
      {isLoading && <Loader />}
      <ContactList />
    </>
  );
};
export default ContactsPage;
