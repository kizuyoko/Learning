import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage"

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contactsData, setContactsData] = useState([]);
 const [appointmentsData, setAppointmentsData] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  useEffect(() => {
    console.log(`Updated contact data: ${contactsData}`);
    if (contactsData.length > 0) {
      console.log(`The first contact is: ${contactsData[0].name}`)
    }
  }, [contactsData]); // Log contactsData whenever it changes

  function addNewContactHandler(contact) {
    const newContact = {
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
    }
    console.log(`New Contact is ${newContact.name}`);
    setContactsData([...contactsData, newContact]);
  }

  function addNewAppointmentHandler(appointment) {
    const newAppointment = {
      title: appointment.title,
      contact: appointment.contact,
      date: appointment.date,
      time: appointment.time,
    }
    console.log('new a-c: ' + newAppointment.contact);
    setAppointmentsData([...appointmentsData, newAppointment]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route 
        path={ROUTES.CONTACTS} 
        element={ <ContactsPage 
          contacts={contactsData}
          addContact={addNewContactHandler} 
        /> /* Add props to ContactsPage */ }/>
      <Route 
        path={ROUTES.APPOINTMENTS} 
        element={ <AppointmentsPage 
          appointments={appointmentsData} 
          contacts={contactsData}
          addAppointment={addNewAppointmentHandler}
        /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
