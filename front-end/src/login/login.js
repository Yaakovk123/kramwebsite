
import { set } from 'express/lib/application';
import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useUser, useUpdate } from '../Context.js';
import './login.css';



 function Login() {
   const navigate = useNavigate();
   const websiteUser = useUser();
   const updateWebsiteUser = useUpdate();
   const [loginInfo, setLoginInfo] = useState({
     name:'',
     password: '',
     check:'off'
   })
   const handleLoginChange = (e)=>{
      const newLoginInfo = {...loginInfo}
      newLoginInfo[e.target.id] = e.target.value;
      setLoginInfo(newLoginInfo);
   }
   const [wrongLoginError, setWrongLoginError] = useState(false)
   const handleLoginSubmit = (e)=>{
     e.preventDefault();
    fetch('http://localhost:4000/login/login')
      .then((data)=>{
        return data.json();
      }).then((response)=>{
        console.log(response)
        const result = response.some((item)=>{
          return item.name == loginInfo.name && item.password == loginInfo.password
        })
        if(!result){
          setWrongLoginError(true);
        } else{
            setWrongLoginError(false);
            console.log('Correct Sign In');
            updateWebsiteUser(loginInfo.name, loginInfo.password);
            navigate('/home');
        }
      })

     
   }

    const [info, setInfo] = useState({
      name:'',
      password:'',
      repeatPassword:'',
      email: ''
  });
      const [nameError, setNameError] = useState(false);
      const [passwordError, setPasswordError] = useState(false);
      const [repeatPasswordError, setRepeatPasswordError] = useState(false);
      const [emailError, setEmailError] = useState(false);
      const [oldUser, setOldUser] = useState(false);

      
      const checkIfAlreadyUser = ()=>{
        fetch('http://localhost:4000/login/login')
          .then((data)=>{
            return data.json();
          }).then((data)=>{
            let oldUser = data.some((item)=> item.name == info.name);
            if(oldUser){
              setOldUser(true)
            } else{
              setEmailError(false);
              setOldUser(false);
              fetchData();
              updateWebsiteUser(info.name, info.password);
              navigate('/home');
            }
          })
      }

      const nameChecker = ()=>{
        if(info.name.length <= 4){
          setNameError(true);
        }else{
          setNameError(false);
          passwordChecker();
        }
      }

      const passwordChecker = ()=>{
        let regex = /[\w\d < !`~^%\*&\$#@]{7,}/ig;
        if(!regex.test(info.password)){
          setPasswordError(true);
        }else{
          setPasswordError(false);
          repeatPasswordChecker();
        }
      }

      const repeatPasswordChecker = ()=>{
        if(info.password !== info.repeatPassword && passwordError === false){
          setRepeatPasswordError(true);
        } else{
          setRepeatPasswordError(false);
          emailChecker();
        }
      }

      const emailChecker = ()=>{
        const regex = /\w{3,}(@gmail\.com|@yahoo\.com)/
        if(!regex.test(info.email)){
          setEmailError(true);
        } else{
            checkIfAlreadyUser();
        }
      }

      

      const fetchData = ()=>{
        fetch('http://localhost:4000/login/signUp', {
          method:'POST',
          credentials: 'same-origin',
          mode: "no-cors",
          body : JSON.stringify(info),
          cache: 'no-cache'
        })
        console.log('data added')
      }


      const handleChange = (e)=>{
        let newData = {...info};
        newData[e.target.id] = e.target.value;
        setInfo(newData);
    }


    const handleSubmit = (e)=>{
     e.preventDefault();
     nameChecker();
      //  passwordChecker();
      //  emailChecker();
      //  repeatPasswordChecker(); 
      //chaining functions so it doesent fetch with input errors
    
    }
    

  return (
    <>
          <div className="login-wrap">
            <div className="login-html">
              <input id="tab-1" type="radio" name="tab" className="sign-in" /><label for="tab-1" className="tab">Sign In</label>
              <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
              <div className="login-form">
                <div className="sign-in-htm">
                  <form id = "login-form" onChange = { handleLoginChange } onSubmit = { handleLoginSubmit }>
                      <div className="group">
                        <label for="user" className="label">Username</label>
                        <input id="name" type="text" className="input"/>
                      </div>
                      <div className="group">
                        <label for="pass" className="label">Password</label>
                        <input id="password" type="password" className="input" data-type="password"/>
                      </div>
                      <div className="group">
                        <input id="check" type="checkbox" className="check" />
                        <label for="check"><span className="icon"></span> Keep me Signed in</label>
                      </div>
                      <div className="group">
                        <button type="submit" className="button">Submit</button>
                      </div>
                  </form>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    <a href="#forgot">Forgot Password?</a>
                    <div className ='wrong-login'>
                        {wrongLoginError && 'Either your username or password'}<br></br><br></br>
                        {wrongLoginError && 'are incorrect'}
                    </div>
                  </div>
                </div>
                <div className="sign-up-htm">
                <form onSubmit = { handleSubmit } id = 'form' >
                  <div className="group">
                    <label for="user" className="label">Username</label>
                    <input onChange ={handleChange} name = 'name' id="name" type="text" className="input"/>
                  </div>
                  <div className="group">
                    <label for="pass" className="label">Password</label>
                    <input onChange ={handleChange} name = 'password' id="password" type="password" className="input" data-type="password"/>
                  </div>
                  <div className="group">
                    <label for="pass" className="label">Repeat Password</label>
                    <input onChange ={handleChange} type="password" name = 'repeatPassword' id="repeatPassword"  className="input" data-type="password"/>
                  </div>
                  <div className="group">
                    <label for="pass" className="label">Email Address</label>
                    <input  onChange ={handleChange} name = 'email' id="email" type="text" className="input"/>
                  </div>
                  <div className="group">
                    <button type="submit" className="button">Submit</button>
                    <div className = 'error'>
                      {nameError && 'Your Username must be at least 5 characters long.  '}
                      {passwordError && 'Your password must be at least 7 characters long.  '}
                      {repeatPasswordError && 'Your two passwords seem to be different.  '}
                      {emailError && 'You entered an invalid email address.  '}
                      {oldUser && 'You Seem to already have an account with us. Try loggin in.'}
                    </div>
                  </div>
                  </form>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    <label for="tab-1"><Link to = '#'>Already Member?</Link></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </>
  )
}

export default Login