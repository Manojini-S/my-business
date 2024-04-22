import React from 'react';

function Login() {
  return (
    <div>
      <form>
        <label for="email">Email / Username:</label>
        <input type='text' id='email' name='email'></input>
        <label for="password">Password:</label>
        <input type='password' id='password' name='password'>Password</input>
        <label for="remember_me">
          <input type="checkbox" id="remember_me" name="remember_me"> Remember me</input>
        </label>
        <label for="forget-password">
          <input type="checkbox" id="forgetpassword" name="forgetpassword"> forget password</input>
        </label>
        <button type="submit">Sign In</button>
        <h3>Don't have an account ? Register Now</h3>
      </form>
    </div>
  )
}

export default Login();

