import React,{useState} from 'react';
import axios from 'axios';

import '../Styles/SignUpForm.css';

function SignUpForm (){
  const [postUser, setPostUser] = useState({
    firstName: '', lastName : '',mail : '', pwd : ''
  });
 

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`http://localhost:4000/api/v2/users/auth/signup/`,{firstName: postUser.firstName,lastName: postUser.lastName,mail: postUser.mail,pwd: postUser.pwd}).then(res=>{
      console.log(res);
      console.log(res.data)
    })
  }
    
    
      return (
          <div className = "form-container">
              
              <form onSubmit = {handleSubmit}>
                  <h1>SAFE COURIER SIGN UP</h1>
                  <label>
                  <p>First Name:</p>
                <input type='text' name='firstName'
                label='firstName'
                value = {postUser.firstName}
                onChange = {(e) => setPostUser({...postUser,firstName: e.target.value})}/>
                </label>

                <label>
                <p>Last Name:</p>
                <input type='text' name='lastName'
                label='lastName'
                value = {postUser.lastName}
                onChange = {(e) => setPostUser({...postUser,lastName: e.target.value})}/>
                  </label>
                  
                  <label>
                  <p>Age:</p>
                <input type='text' name='age'/>
                  </label>
                  
                  <label>
                  <p>Username:</p>
                <input type='text' name='username'/>
                  </label>
                
                <label>
                <p>Current location:</p>
                <input type='text' name='residence' placeholder = "Current place of residence"/>
                </label>

                <label>
                <p>Email address</p>
                <input type='email' name='mail'
                label='mail'
                value = {postUser.mail}
                onChange = {(e) => setPostUser({...postUser,mail: e.target.value})}
                />
                </label>

                <label>
                <p>Password</p>
                <input type='password' name='pwd'
                label='pwd'
                value = {postUser.pwd}
                onChange = {(e) => setPostUser({...postUser,pwd: e.target.value})}/>
                </label> 

                <button type = "submit">SIGN UP</button>       
        </form>
          </div>
        
      );
    
  }

export default SignUpForm

