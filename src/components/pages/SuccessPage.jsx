import React, { useEffect, useState } from 'react'
import {BsEmojiSmile} from "react-icons/bs"
import { Link, NavLink, useNavigate } from 'react-router-dom'

const SuccessPage = () => {
  const navigate = useNavigate()
  //console.log(navigate)
 const [toggle, setToggle] = useState(false)
 
  useEffect(() => {
    // if (toggle) {
    //  console.log(navigate)
    //   navigate(".././otp");
    // }
    console.log(Link) 
  }, []);
   
  // useEffect(()=>{
  //   navigate(".././otp");
  // },[navigate])
  
  return (
    
    <div className='bg-pink-50 h-screen flex flex-col justify-center items-center border- gap-3'>
      <div className='bg-white shadow-lg rounded px-8 py-8 mb-4 flex flex-col items-center'>
       <button className='bg-blue-800 hover:bg-blue-900 text-white text-sm
     py-2 px-4 rounded focus:outline-none focus:shadow-outline'  
    
     >
    <NavLink to='/otp'>Back to login</NavLink>  
      </button>
      <h3 className='text-blue-900 text-xl font-semibold my-4'>Logged in successfully..!! </h3>
      <BsEmojiSmile size={40} className='text-pink-600'/>
      </div>
    </div>
  )
}

export default SuccessPage