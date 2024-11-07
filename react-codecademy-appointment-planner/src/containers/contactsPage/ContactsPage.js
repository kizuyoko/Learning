import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [djuplicateName, setDjuplicateName] = useState(false);
  /*
  Define state variables for 
  contact info and duplicate check
  */

  useEffect(() => {
    const isDjuplicate = props.contacts.some(contact => contact.name === name);
    setDjuplicateName(isDjuplicate);
  }, [name, props.contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if (!djuplicateName) {
      props.addContact({
        name: name, 
        phone: phone,
        email: email,
      });
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          handleSubmit={handleSubmit} 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={props.contacts} />
      </section>
    </div>
  );
};
