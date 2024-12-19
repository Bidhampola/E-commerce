import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-[#e9573e] p-5 flex flex-direction-row justify'>
        <h4 className='text-white text-lg'>AlibabaUg</h4>
        <h4 className='text-white ml-2 text-lg'>Home</h4>
        <Link to="/login">
          <h4 className='text-white ml-2 text-lg'>Sign In</h4>
        </Link>
        <Link to={"/register"}>
          <h4 className='text-white ml-2 text-lg right-0'>Sign Up</h4>
        </Link>
    </div>
  )
}
