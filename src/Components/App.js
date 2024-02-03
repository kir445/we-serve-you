import React, { useEffect, useState } from 'react'; //hooks 
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';

//use state is a hook used to manipulate state when some data is being fetched from a server
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [Contacts, setContacts] = useState([])//variable on component whose state is changed -"Contacts"
  
  const addContactHandler = (contact) => {
    setContacts(Contacts=> {
      const newContacts = [...Contacts, {id:uuid(),...contact}];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContacts));
      return newContacts;
    });
  }

  const removeContactHandler=(id)=>{
    console.log(id)
      const newContactList=Contacts.filter((contact)=>{
        return contact.id!==id;
      });
      setContacts(newContactList);
    };
  //use effect is used to keep the content intact on the screen even after refresh
  useEffect(() => {
    const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log('retrieve', retrieveContact);
    if (retrieveContact) { setContacts(retrieveContact) }
  }, [])
  //add the dependency to keep the content on local storage

  return (
    <div className='ui container'>
      <Router>
      <Header />
      <Routes>
      <Route path='/add' Component={AddContact}/>
      <Route path='/' Component={ContactList}/>
      </Routes>
      

      {/*<AddContact addContactHandler={addContactHandler} />*/}{/*Here the content from child is called into parent*/}
      {/*<ContactList contacts={Contacts} getContactId={removeContactHandler} />*/}{/*here the state is being changed and transfered from parent to child*/}
      {/*The props i.e, property of ContactList*/}

      </Router>
      

    </div>
  );
}

export default App;
