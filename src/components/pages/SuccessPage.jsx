import React from 'react'
import {BsEmojiSmile} from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'

const SuccessPage = () => {
  const navigate = useNavigate()
  return (
    
    <div className='bg-pink-50 h-screen flex flex-col justify-center items-center gap-3'>
      <Link to="/">Back</Link>
      <h3 className='text-blue-900 text-3xl'>Logged in successfully..!! </h3><BsEmojiSmile size={40} className='text-pink-600'/>
    </div>
  )
}

export default SuccessPage