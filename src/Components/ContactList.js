import React from 'react';
import { Link } from "react-router-dom";
import ContactCard from './ContactCard';

const ContactList=(props)=>{
    const deleteContactHandler=(id)=>{
        props.getContactid(id)

    }
    
    //To render it to the App Component inside the ContactList component
    const renderContactList=props.contacts.map((contact)=> {//contact attribute is a list of every single record of array in Contacts 
        return(
          
           <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        )
        
        
    }) 
    
    return(
        <div className="ui main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
        
        
    )
}
export default ContactList;