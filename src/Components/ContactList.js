import React from 'react';
import ContactCard from './ContactCard';

const ContactList=(props)=>{
    const deleteContactHandler=(id)=>{
        props.getContactId(id)
    }
   
    //To render it to the App Component inside the ContactList component
    const renderContactList=props.contacts.map((contact)=> {//contact attribute is a list of every single record of array in Contacts 
        return(
          
           <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        )
        
        
    }) 
    
    return(
        <div class="main">
            <h2>Contact List</h2>
            <div className='ui celled list'>
         {renderContactList} 
        </div>
        </div>
        
    )
}
export default ContactList;