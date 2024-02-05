import React from 'react';
//either we create a Functional component or Class Component
class  AddContact extends React.Component{
    state={
        name:"",
        email:""
    };
    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All Fileds are Mandatory");
            return;
        }
        console.log('ddd',this.state)
        this.props.addContactHandler(this.state)
        this.setState({name:"",email:""})//delete the name and email contents
        
    };
    render(){//the new state after null state will be this state which will get rendered on the App component
        return(
            <div className='ui main' >
                <h2>Add Contact</h2>
                <form className='ui form'  >
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' placeholder='name' name='name'   value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='text'placeholder='email'name='Email' value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} />
                    </div>
                    <button className='ui button blue' onClick={this.add}>Add</button>
                    
                </form>
            </div>
        );
    }
}
export default AddContact;