import React from 'react';
import user from '../Images/user.jpeg';
const ContactCard=(props)=>{// destructuring
    const {id,name,email}=props.contact;
    return(
          
        <div className="item">
        <div className="content">
            <img  style={{width:"100px"}} src={user} alt='user'/>
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <i className="trash alternate outline icon" style={{color:'red',margin:'7px',position:"fixed"}} onClick={()=>{
            props.clickHandler(id)}}></i>
    </div>
    )
}
export default ContactCard;