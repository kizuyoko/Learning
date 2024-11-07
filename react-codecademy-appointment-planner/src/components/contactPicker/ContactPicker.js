import React from "react";

export const ContactPicker = (props) => {
  
  return (
    <select onChange={props.onChange}>
      <option value="" default>No Contact Selected</option>
      {
        props.contacts.map((contact, index) => {
          return (
            <option 
              key={index} 
              value={contact.name}
            >{contact.name}</option>
          );
        })
      }
    </select>
  );
};
