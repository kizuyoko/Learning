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
          name={name} // Pass name state
          setName={setName} // Pass setName function
          phone={phone} // Pass phone state
          setPhone={setPhone} // Pass setPhone function
          email={email} // Pass email state
          setEmail={setEmail} // Pass setEmail function
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
