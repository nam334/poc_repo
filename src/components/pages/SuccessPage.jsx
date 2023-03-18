import React from 'react'
import {BsEmojiSmile} from "react-icons/bs"
const SuccessPage = () => {
  return (
    <div className='bg-pink-50 h-screen flex justify-center items-center gap-3'>
      <h3 className='text-blue-900 text-3xl'>Logged in successfully..!! </h3><BsEmojiSmile size={40} className='text-pink-600'/>
    </div>
  )
}

export default SuccessPage