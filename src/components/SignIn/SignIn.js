import React from 'react';
import './SignIn.css'
const SignIn = () => {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
             <form className="loginForm">
                 <label>Email</label>
                 <input type="text" className="loginInput" placeholder="Email"/>
                 <label>Password</label>
                 <input type="password" className='loginInput' placeholder="Enter your Password"/>
                 <button className="loginButton">Sign In</button>
             </form>
        </div>
    );
};

export default SignIn;