import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Flag from 'react-world-flags'
const Login = () => {
    const [text, setText] = useState('')
    const [valid, setValid] = useState(false)
    const navigate = useNavigate()
    const changeHandler = (e)=>{
        if (e.target.value !== ''){
            if (isNaN(e.target.value)) {
                // console.log("text")
                setValid(false)
                setText(e.target.value)
              } else {
                //console.log("valid number")
                setValid(true)
                setText(e.target.value)
              }
        }
        else{
            setValid(false)
            setText(e.target.value)
        }
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        
          setText('')
          navigate('/otp')
    }
    useEffect(()=>{
   setValid(false)
    },[])
    useEffect(()=>{
        console.log(valid, text)
    },[valid, text])
  return (
    <>
    <div className='flex justify-center bg-pink-50 items-center h-screen'>
    <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
    <div className="mb-4">
      <label className="block text-blue-900 text-md font-semibold my-4" htmlFor="username">
        Enter email or phone number
      </label>
     <div className='relative flex items-center'>
    {valid ? <span className='absolute top-2.5 text-gray-400 text-xs flex gap-1 px-2'><Flag code='IND' />+91</span> : null}
   
    
      <input minLength='1' className={`shadow appearance-none border rounded w-full py-2 
        text-gray-500 text-[0.865rem] items-center
      leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs placeholder:ml-3    
      ${valid ? `px-16`  : `px-4`  } `}
      value={text} 
      onChange={(e)=>changeHandler(e)} 
      id="username" type="text" required />
     </div>
      
    </div>
   
    <div className="flex items-center justify-between">
      <button className="bg-blue-800 hover:bg-blue-900 text-white text-sm
     py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button> 
    </div>
  </form>
</div>
    </div>

    </>
  )
}

export default Login