import React from 'react'
import './login.css'
import pic from './../assets/mlelogo.png'
import button from 'bootstrap'

function Login() {
  return (
    <div className='dialoguebox-wrapper'>
        <div className='dialoguebox'>
        <div className='label'>
        <img src={pic}/>
        <h4 className='dialoguebox-label'>Employee Portal Login</h4>
        </div>
        
        <div class="input-icons">
            <i class="fa fa-user icon"></i>
            <input class="input-field" placeholder='Enter your User Id' type="text"></input>
            <br/>
            <i class="fa fa-lock icon"></i>
            <input class='input-field' placeholder='Enter your password'></input>
        </div>
        
        <div className='forget'>Forgot Password?</div>
        <div><button type="button" class="btn btn-primary">Login</button></div>
        </div>
        
      
      
    </div>
  )
}

export default Login
