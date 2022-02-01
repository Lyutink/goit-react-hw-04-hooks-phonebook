import PropTypes from "prop-types";

import { ContactItem, BtnDelete } from "./Contact.styled";

export default function Contact({ name, number, idContact, onDeleteContact }) {
  return (
    <ContactItem>
      {name}: {number}
      <BtnDelete type="button" onClick={() => onDeleteContact(idContact)}>
        {" "}
        Delete{" "}
      </BtnDelete>
    </ContactItem>
  );
}

Contact.propTypes = {
  idContact: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
