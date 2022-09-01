import React from 'react';
import './account.css';

function Account() {
  return (
    <div class = 'container'>
      <div class = 'box'>
        <div class = 'header-container'>
          <h1 class = 'header'>Account</h1>
        </div>
        <div class = 'content'>
          <div class = 'flex'>
            <label class = 'labels' id = 'name-label' for = 'name'>Name:</label><br/><br/>
            <p id = 'name' class = 'name'>Yanky</p>
          </div>
          <div class = 'flex'>
            <label for = 'password' class = 'labels' id ='password-label'>Password:</label><br/><br/>
            <p id = 'password'>Yaakovkk123</p>
          </div>
          <div class = 'flex'>
            <label for = 'email' class = 'labels' id = 'email-label'>Email:</label><br/><br/>
          <p id = 'email'>yankyk123@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account