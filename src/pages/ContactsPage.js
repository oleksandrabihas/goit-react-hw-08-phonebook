import { useSelector } from "react-redux";
import { selectContacts } from "redux/contacts/selectors";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { ErrorNotification } from "components/Error/Error";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { Wrapper } from "components/App.styled";

export default function ContactsPage () {
  const { isLoading, error } = useSelector(selectContacts);
  return (
    <Wrapper>
      <Loader isLoading={isLoading} />
      <h1>Phonebook</h1>
      <ContactForm />
      {error ? (
        <ErrorNotification error={error} />
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </Wrapper>
  );
};
