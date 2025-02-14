import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, replace } from 'react-router-dom'
import { auth } from '../firebase/Firebase'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleRegister = async(e) => {
    e.preventDefault()

    //
    try{
      const user = await createUserWithEmailAndPassword(auth,email,password)
      navigate('/',{replace:true})
      console.log(user)
    }
    catch(err){
      console.log(err);
      
    }

  
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-red-200'>
      <div className='border border-red-600 p-20 rounded-md bg-white'>
        <h4 className='text-center mb-5'>Register</h4>
        <label  htmlFor="">Email</label>
        <br />
        <input className='border border-gray-400 text-center py-2 rounded-md' type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input className='border border-gray-400 text-center py-2 rounded-md' type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
        <br />
       <button className='bg-[#e9573e] px-20 mt-5 py-2 rounded-md mx-1' onClick={handleRegister}>Register</button>
       <br />
        <Link to={"/login"}><i className='text-sky-600'>Already a member: Login here</i></Link>
      </div>
       
    </div>
  )
}
