import React from 'react';
import '../App.css';

function ArtistRegister() {
    return (
        <div>
            <form>
                <h3>Artist Register</h3>
            <label htmlFor="email">Email / Username:</label>
            <input type='text' id='email' name='email' />

            <label htmlFor="password">Password:</label>
            <input type='password' id='password' name='password' />

            <label htmlFor="artistType">Artist Type:</label>
            <input type='text' id='artistType' name='artistType' />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type='text' id='phoneNumber' name='phoneNumber' />

            <label htmlFor="artistFiles">Artist Files Uploads:</label>
            <input type='text' id='artistFiles' name='artistFiles' />

            <label htmlFor="shortBio">Short Bio:</label>
            <input type='text' id='shortBio' name='shortBio' />

            <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default ArtistRegister;
