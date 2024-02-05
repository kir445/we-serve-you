import React from "react";
import { Link } from "react-router-dom";
import man from "../Images/man.png";
const ContactDeets = (props) => {
   const {name,email}=props.state.contact;
  return (
    <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={man} alt="image of man"/>
            </div>
        </div>
        <div className="content">
          <div className="header"></div>
          <div className="description"></div>
        </div>
        <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
      </div>
      

    
    
  );
};

export default ContactDeets;