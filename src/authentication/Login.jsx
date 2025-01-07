import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/Firebase'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
      const user = signInWithEmailAndPassword(auth,email,password)
      navigate('/',{replace:true})
      console.log(user)
    }
    catch(error){
      console.log(error);
      
    }
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-red-200'>
      <div className='border border-red-600 p-20 rounded-md bg-white'>
        <h4 className='text-center mb-5'>Login</h4>
        <label  htmlFor="">Email</label>
        <br />
        <input className='border border-gray-400 text-center py-2 rounded-md' type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input className='border border-gray-400 text-center py-2 rounded-md' type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
        <br />
        <Link><i className='text-sky-600'>Forgot password</i></Link>
        <br />
       <button className='bg-[#e9573e] px-20 mt-5 py-2 rounded-md mx-1' onClick={handleLogin}>Login</button>
       <br />
        <Link to={"/register"}><i className='text-sky-600'>Not a member: Register here</i></Link>
      </div>
       
    </div>
  )
}
