import React, {useState } from 'react';
import { FaAlignRight, FaFacebook } from 'react-icons/fa';

import {Link} from 'react-router-dom'

import '../Styles/Header.css';
import {FaTwitter} from "react-icons/fa"
import Form from './Form';

export default function Navbar() {
    const [toggle,setToggle] = useState(true);
    const [showForm,setShowForm] = useState(false);

    const Toggle = () => {
        setToggle(!toggle)
    }
    const ShowForm = () => {
        setShowForm(!showForm)
    }
    const mySubmitHandler = (event) => {
        event.preventDefault();
    }


        return (
          <>
              <div className="navBar">
                    <button className = "toggle-btn" onClick={Toggle}>
                        <FaAlignRight />
                    </button>
                    <div className={toggle ? "nav-links show-nav" : "nav-links"}>
                    <Link to = "/"><h1>COURIER SERVICES</h1></Link>
                    
                     <div class = "home_links">
                    <p><FaTwitter /></p>
                    <p><FaFacebook/></p>
                    <i class="fas fa-envelope"></i>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <div>
                    <p onClick={ShowForm} style = {{cursor:"pointer"}}>Log in / Sign Up</p>
                    <Form trigger = {showForm} setTrigger = {ShowForm}>
                    <form className = "form_details">
                        <label>
                        <h3>Email Address</h3>
                        <input type = "email"/>
                        </label>
                        <label>
                        <h3>Password</h3>
                        <input type = "password"/>
                        </label>
                        <div>
                        <button onClick = {mySubmitHandler}>Login</button>
                        
                        <button onClick = {mySubmitHandler}><Link to= "/signup" >Create Account</Link></button>
                        <div>
                        <small>Already have an account?</small>
                        </div>
                    
                        </div>
                        
                    </form>
                    </Form>
                    </div>
                    
                    </div>
                        
                    </div>
              </div>
          </>
        );
    }
