import React from 'react';
import ContactCard from './ContactCard';

const ContactList=(props)=>{
    const deleteContactHandler=(id)=>{
        props.getContactid(id)

    }
    //To render it to the App Component inside the ContactList component
    const renderContactList=contacts.map((contact)=> {//contact attribute is a list of every single record of array in Contacts 
        return(
          
           <ContactCard contact={contact} clickHandler={deleteContactHandler} />
        )
        
        
    }) 
    
    return(
        <div className='ui celled list'>
         {renderContactList} 
        </div>
    )
}
export default ContactList;