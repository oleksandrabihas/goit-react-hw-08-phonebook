import { StyledForm } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import toast, { Toaster } from 'react-hot-toast';
import { selectContacts } from 'redux/contacts/selectors';
import { Formik, Field } from 'formik';

export const ContactForm = () => {
  const notify = () =>
    toast.success('Contact was successfully added to your contacts list.', {
      duration: 2000,
      position: 'top-right',
    });

  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);

  const handleAddContact = ({ name, number }, { resetForm }) => {
    console.log(name, number);
    const contactExists = items.some(contact => contact.name === name);

    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      dispatch(addContact({ name, number }))
        .unwrap()
        .then(() => {
          notify();
          resetForm();
        });
    }
  };

  return (
    <>
      <Toaster />
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleAddContact}
      >
        <StyledForm>
          <label htmlFor="name">Name</label>
          <Field
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="number">Number</label>
          <Field
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button>Add contact</button>
        </StyledForm>
      </Formik>
    </>
  );
};
