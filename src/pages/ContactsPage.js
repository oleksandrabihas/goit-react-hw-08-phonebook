import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper } from 'components/App.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

export default function ContactsPage() {
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
    </Wrapper>
  );
}
