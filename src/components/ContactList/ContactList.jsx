import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import toast, { Toaster } from 'react-hot-toast';
import { Contact } from 'components/Contact/Contact';
import { ContactsList } from './ContactList.styled';
import {
  selectFilteredContacts,
} from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const notify = () =>
    toast.error('Contact was successfully deleted from your contacts list.', {
      duration: 2000,
      position: 'top-right',
    });

  const handleDeleteContact = id => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
    notify();
      });
  };

  return (
    <ContactsList>
      <Toaster />
      <Contact
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </ContactsList>
  );
};
