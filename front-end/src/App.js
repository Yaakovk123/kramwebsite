//import react and hooks
import React, { useState, useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


//import components
import Login from './login/login.js'
import Context from './Context.js'
import Home from './home/home.js';
import Account from './account/Account.js'

function App() {
  return (
    <Context>
      <Router>
        <Routes>
          <Route path = '/' element = {<Login />} />
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/account' element = {<Account/>} />
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
