import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { Container, Heading } from '@chakra-ui/react';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Heading
        as="h1"
        fontSize="2xl"
        fontWeight="400"
        textAlign="center"
        mb="5"
      >
        Phonebook
      </Heading>
      <ContactForm />
      <Heading
        as="h2"
        fontSize="2xl"
        fontWeight="400"
        textAlign="center"
        mb="5"
      >
        Contacts:
      </Heading>
      <Filter />
      <ContactList />
    </Container>
  );
}
