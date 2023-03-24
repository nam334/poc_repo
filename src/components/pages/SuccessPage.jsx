import React from 'react'
import {BsEmojiSmile} from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'

const SuccessPage = () => {
  const navigate = useNavigate()
  return (
    
    <div className='bg-pink-50 h-screen flex flex-col justify-center items-center border- gap-3'>
      <div className='bg-white shadow-lg rounded px-8 py-8 mb-4 flex flex-col items-center'>
       <button className='bg-blue-800 hover:bg-blue-900 text-white text-sm
     py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => navigate('/otp')}>Back to login</button>
      <h3 className='text-blue-900 text-xl font-semibold my-4'>Logged in successfully..!! </h3><BsEmojiSmile size={40} className='text-pink-600'/>
      </div>
    </div>
  )
}

export default SuccessPage