import PropTypes from "prop-types";

import Contact from "../Contact/Contact";

export default function ContactList({ getContactList, onDeleteContact }) {
  return (
    <ul>
      {getContactList.map(({ id, name, number }) => (
        <Contact
          name={name}
          number={number}
          idContact={id}
          key={id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

Contact.propTypes = {
  getContactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
