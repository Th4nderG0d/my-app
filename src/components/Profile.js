import React from 'react';
import authService from '../services/authService'
import {Link} from 'react-router-dom'
import './Profile.css'



function Profile() {
    const currentUser=authService.getCurrentUser();

    return (
        <div id="profile">
        {/* <Link className="links" to="/login">
            <button className="profileBtn" onClick={authService.logout}>Logout</button>
          </Link> */}
             <header >
        <h3 className="txt">
         Profile: <strong className="txt">{currentUser.email}</strong> 
        </h3>
      </header>
      {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p> */}
      <p className="txt">
        <strong >Id:</strong> {currentUser.id}
      </p>
      <p className="txt">
        <strong >Email:</strong> {currentUser.email}
      </p>
      <strong className="txt">Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>


        </div>
    )
}

export default Profile
