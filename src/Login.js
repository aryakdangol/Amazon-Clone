import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import "./Login.css"

function Login() {
    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=> {
            history.push('/')
        })
        
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            if(auth)
            {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))


    }


    return (
        <div className= "login">
            <Link to = "/">
                <img className = "login-logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" 
                alt="" />  
            </Link>

            <div className="login-container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value = {email} onChange = {e => setEmail(e.target.value)} type="text" />

                    <h5>Password</h5>
                    <input type="password" valie = {password} onChange = {e => setPassword(e.target.value)} />
                    <button type = "submit" onClick = {signIn} className = "login-signInButton">Sign In</button>

            </form>
            <p>By signing-in you agree to the Amazon Clome Conditions of Use 
                & Sale. Please see our Privacy Noticem our Cookies Notice and our 
                 Internet-Based ads Notice.
            </p>
            <button onClick = {register} className = "login-registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
