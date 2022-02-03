//import React, { Component } from "react";
import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";

import { TitleForm } from "./Components/ContactForm/ContactForm.styled";
import { TitleContacts } from "./Components/Contact/Contact.styled";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
////////////////////////////
export default function App() {
  //const [contacts, setContacts] = useState(initialContacts);
  const [contacts, setContacts] = useState(() => {
    const userContacts = JSON.parse(localStorage.getItem("contacts"));
    return userContacts ? userContacts : initialContacts;
  });
  const [filter, setFilter] = useState("");
  //const [name, setName] = useState("");
  // const [number, setNumber] = useState("");

  const checkContact = (name) => {
    //const { contacts } = this.state;
    const normilizedName = name.toLowerCase();
    return contacts.find(
      (contact) => normilizedName === contact.name.toLowerCase()
    );
  };

  const formSubmitHandler = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };

    if (checkContact(name)) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts((prevContacts) => [contact, ...prevContacts]);
    }
  };

  const getContactList = () => {
    //const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLocaleLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normilizedFilter)
    );
  };

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const onDeleteContact = (idContact) => {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== idContact)
    );
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <TitleForm>Phonebook</TitleForm>
      <ContactForm onSubmit={formSubmitHandler} />

      <TitleContacts>Contacts</TitleContacts>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        getContactList={getContactList()}
        onDeleteContact={onDeleteContact}
      ></ContactList>
    </>
  );
}

////////////////////////////
// class App extends Component {
//   state = {
//     contacts: initialContacts,
//     filter: "",
//     name: "",
//     number: "",
//   };

//   checkContact = (name) => {
//     const { contacts } = this.state;
//     const normilizedName = name.toLowerCase();
//     return contacts.find(
//       (contact) => normilizedName === contact.name.toLowerCase()
//     );
//   };

//   formSubmitHandler = ({ name, number }) => {
//     const contact = { id: nanoid(), name, number };

//     if (this.checkContact(name)) {
//       alert(`${name} is already in contacts.`);
//     } else {
//       this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
//     }
//   };

//   getContactList = () => {
//     const { contacts, filter } = this.state;
//     const normilizedFilter = filter.toLocaleLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLocaleLowerCase().includes(normilizedFilter)
//     );
//   };

//   changeFilter = (event) => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   onDeleteContact = (idContact) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== idContact
//       ),
//     }));
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     return (
//       <>
//         <TitleForm>Phonebook</TitleForm>
//         <ContactForm onSubmit={this.formSubmitHandler} />

//         <TitleContacts>Contacts</TitleContacts>
//         <Filter value={this.state.filter} onChange={this.changeFilter} />
//         <ContactList
//           getContactList={this.getContactList()}
//           onDeleteContact={this.onDeleteContact}
//         ></ContactList>
//       </>
//     );
//   }
// }

// export default App;
