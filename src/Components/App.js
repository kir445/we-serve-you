import React, { useEffect, useState } from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
//use state is a hook used to manipulate state when some data is being fetched from a server
function App() {
  const LOCAL_STORAGE_KEY = "Contacts"
  const [Contacts, setContacts] = useState([])//variable on component whose state is changed -"Contacts"
  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...Contacts,contact]);
    // localStorage.setItem(LxOCAL_STORAGE_KEY,JSON.stringify(Contacts));
  }
  useEffect(() => {
    const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log('kick',retrieveContact);
    if (retrieveContact != null && retrieveContact!= undefined) { setContacts(retrieveContact) }
  }, [])
  //add the dependency to keep the content on local storage

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contacts))//convrt into string
  },
    //add the dependency to keep the content on local storage
    [Contacts]
  );
  return (
    <div className='ui container'>
      <Header />
      <h1>jgjhgj</h1>
      <AddContact addContactHandler={addContactHandler} />{/*Here the content from child is called into parent*/}
      <ContactList contacts={Contacts} />{/*here the state is being changed and transfered from parent to child*/}
      {/*The props i.e, property of ContactList*/}

    </div>
  );
}

export default App;
