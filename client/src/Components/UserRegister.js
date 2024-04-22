import React from 'react';
function UserRegister() {
    return (
        <div>
             <label for="email">First Name:</label>
            <input type='text' id='email' name='email'></input>
            <label for="email">Email / Username:</label>
            <input type='text' id='email' name='email'></input>
            <label for="password">Password:</label>
            <input type='password' id='password' name='password'>Password</input>
            <lable for="Type">Artist Type</lable>
            <input type='text' id='email' name='email'></input>
            <lable for="Type">Phone Number</lable>
            <input type='text' id='email' name='email'></input>
            <lable for="Type">Artist files upoloads</lable>
            <input type='text' id='email' name='email'></input>
            <lable for="Type">Short Bio    </lable>
            <input type='text' id='email' name='email'></input>
 
            <button type="submit">Sign Up</button>

        </div>
    )
}
export default UserRegister();