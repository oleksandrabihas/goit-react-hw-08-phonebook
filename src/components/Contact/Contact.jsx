import { Button } from "@chakra-ui/react";

export const Contact = ({ contacts, handleDeleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
        <Button
          colorScheme="red"
          variant="outline"
          type="button"
          onClick={() => handleDeleteContact(id)}
        >
          Delete
        </Button>
      </li>
    );
  });
};