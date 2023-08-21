export const Contact = ({ contacts, handleDeleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => handleDeleteContact(id)}>
          Delete
        </button>
      </li>
    );
  });
};