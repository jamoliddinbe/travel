import React from 'react';
import { useState } from 'react';
import '../../App.css';

export default function SignUp() {
  const [icon, setIcon] = useState(false)
    return (
    <div className='container'>
      <div className='form'>
        <h1>Sign Up</h1>
      <input type='email' className='email' placeholder='Enter Your Email'></input>
      <input type='password' className='password' placeholder='Enter Your Password'></input>
      <button className='submit'>Submit</button>
      </div>
    </div>
  )
  
}
