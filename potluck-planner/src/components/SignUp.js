import React, {useState} from 'react';

const Form = (props) => {
  const[member, setMember] = useState({username: "", email: "", password: ""});
  
  const changeHandler = (e) => {
    console.log(e.target.value);
    setMember({...member, [e.target.username]: e.target.value});
  };
  
  const submitForm = (e) => {
    e.preventDefault();
    const newMember = {
      ...member,
      id: Date.now()
    };
    props.addNewMember(newMember);
    setMember({username: "", email: "", password: ""});
  };
  
  return (
    <form onSubmit = {submitForm}>
      <label htmlFor="username">Member username</label>
      <input 
        type="text" 
        name="username" 
        placeholder="Enter username here:" 
        value={member.username}
        onChange={changeHandler} 
      />
      <label htmlFor="email">Member email</label> 
      <input 
        type="email" 
        name="email" 
        placeholder="Enter email here:" 
        value={member.email}
        onChange={changeHandler} 
      />
      <label htmlFor="password">Member password</label> 
      <input 
        type="text" 
        name="password" 
        placeholder="Enter password here:" 
        value={member.role}
        onChange={changeHandler} 
      />
      <button type = "submit">Sign Up</button>
    </form>
  );
};

export default Form;