import React from 'react';
import '../App.css';

export default function Login() {
  return (
    <div>
      <form>
        {/* <img src='Loginimage.png'> */}
        <h1>Welcome Back</h1>
        <label for="email">Email / Username:</label>
        <input type='text' id='email' name='email'></input>
        <label for="password">Password:</label>
        <input type='password' id='password' name='password'/>
        <label for="remember_me">Remember me
          <input type="checkbox" id="remember_me" name="remember_me"/> 
        </label>
        <label for="forget-password">
        </label>
        <button type="submit">Sign In</button>
        <h3>Don't have an account ? Register Now</h3>
      </form>
    </div>
  )
}

