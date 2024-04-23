import React from 'react';
import '../App.css';

export default function UserRegister() {
    return (
        <div>
            <form>
                   {/* <img src="https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style="max-width: 540px; width: 540px; height: 360px; margin: 0px;" alt="Login Background Images Images – Browse 12,062 Stock Photos ..." jsname="kn3ccd" aria-hidden="false"></img> */}
                <h3>User Register</h3>
            <label htmlFor="firstName">First Name:</label>
            <input type='text' id='firstName' name='firstName'/>

            <label htmlFor="email">Email / Username:</label>
            <input type='text' id='email' name='email'/>

            <label htmlFor="password">Password:</label>
            <input type='password' id='password' name='password'/>

            {/* <label htmlFor="artistType">Artist Type:</label> */}
            {/* <input type='text' id='artistType' name='artistType'/> */}

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type='text' id='phoneNumber' name='phoneNumber'/>

            {/* <label htmlFor="artistFiles">Artist Files Uploads:</label> */}
            {/* <input type='text' id='artistFiles' name='artistFiles'/> */}

            {/* <label htmlFor="shortBio">Short Bio:</label> */}
            {/* <input type='text' id='shortBio' name='shortBio'/> */}

            <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
