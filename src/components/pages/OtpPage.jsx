import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { validateOtp } from '../../loginSlice'
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const [firstNum, setfirstNum] = useState('')
  const [secondNum, setsecondNum] = useState('')
  const [thirdNum, setthirdNum] = useState('')
  const [fourthNum, setfourthNum] = useState('')
  const [submit, setsubmit] = useState(false)
  const [border, setborder] = useState(false)
  const otpDefaultValue = useSelector(store => store.login.otpDefault)
  const result = useSelector(store => store.login.result)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  useEffect(()=>{
    if(firstNum!=='' && secondNum!=='' && thirdNum!=='' && fourthNum!==''){
     setsubmit(true)
    }
    else{
      setsubmit(false)
      setborder(false)
    }
    //console.log(firstNum)
  },[firstNum, secondNum, thirdNum, fourthNum, dispatch])

  useEffect(()=>{
    let number = [firstNum,secondNum, thirdNum, fourthNum]
    submit && dispatch(validateOtp([...number]))
   // console.log(submit)
  },[submit, dispatch])

  useEffect(()=>{
   result && navigate('/success')
   if(result){
    setborder(false)
   }
   else{
    setborder(true)
   }
    console.log("Result",result , "-" , "Border", border)
    
  },[result, border,navigate, submit])
  useEffect(()=>{
    setborder(false)
  },[])
  return (
    <>
    <div className='flex justify-center bg-slate-100 items-center h-screen'>
    <div className="w-full max-w-xs ">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-blue-900 text-sm  font-bold mb-2" htmlFor="username">
        Verify with OTP
      </label>
      
    </div>
    <div className="mb-3">
     
      <input type="text" className = {` focus:shadow-outline rounded-sm border-2 
      text-gray-500 leading-tight focus:outline-none focus:shadow-outline w-5  p-1  mx-2    
      ${result ? `border-slate-500`  : ( border ? `border-red-500`: `border-slate-500`)  }`} 
       value={firstNum}
       onChange={(e)=> setfirstNum(e.target.value)}/>
       <input type="text" className = {` focus:shadow-outline rounded-sm border-2 
      text-gray-500 leading-tight focus:outline-none focus:shadow-outline w-5  p-1  mx-2    
      ${result ? `border-slate-500`  : ( border ? `border-red-500`: `border-slate-500`)  }`}  value={secondNum}
       onChange={(e)=> setsecondNum(e.target.value)}/>
       <input type="text" className = {` focus:shadow-outline rounded-sm border-2 
      text-gray-500 leading-tight focus:outline-none focus:shadow-outline w-5  p-1  mx-2    
      ${result ? `border-slate-500`  : ( border ? `border-red-500`: `border-slate-500`)  }`}  value={thirdNum}
       onChange={(e)=> setthirdNum(e.target.value)}/>
     <input type="text"className = {` focus:shadow-outline rounded-sm border-2 
      text-gray-500 leading-tight focus:outline-none focus:shadow-outline w-5  p-1  mx-2    
      ${result ? `border-slate-500`  : ( border ? `border-red-500`: `border-slate-500`)  }`}  value={fourthNum}
       onChange={(e)=> setfourthNum(e.target.value)}/>
    </div>
    <div>
      <p className='font-bold text-sm text-pink-600'>Resend OTP</p>
    </div>
   
  </form>
 
</div>
    </div>
    </>
  )
}

export default OtpPage