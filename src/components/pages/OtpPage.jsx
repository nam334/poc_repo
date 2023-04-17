import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { validateOtp } from '../../loginSlice'
import { Link, useNavigate } from "react-router-dom";
import {MdOutlineMobileFriendly} from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";

const OtpPage = () => {
  const [timer, setTimer] = useState(10)
  const [loader, setLoader] = useState(false)
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
  const firstNumRef = useRef()
  const secondNumRef = useRef()
  const thirdNumRef  = useRef()
  const fourthNumRef = useRef()

  useEffect(()=>{
    if(firstNum!=='' && secondNum!=='' && thirdNum!=='' && fourthNum!==''){
     setsubmit(true)
   
    }
  },[firstNum, secondNum, thirdNum, fourthNum, dispatch,timer, border])

  useEffect(()=>{
    let number = [firstNum,secondNum, thirdNum, fourthNum]
    submit && dispatch(validateOtp([...number]))
  
  },[submit, dispatch, timer])

  useEffect(()=>{
   
   if(result){
      navigate('/success')
      setborder(false)
   }
     else{
      setsubmit(false)
      setborder(true)
       setfirstNum('')
       setsecondNum('')
       setthirdNum('') 
       setfourthNum('')
     }
  },[result, submit, navigate])
  
  useEffect(()=>{
    setborder(false)
     const interval = setInterval(()=>{
       timer > 0 && setTimer(prevState => prevState - 1)
      },1000)
      return () => clearInterval(interval)
  },[])

 useEffect(()=>{
  if(submit)
  {
    if (!result){
      toast.error("Verification failed, incorrect OTP!", {
        position: toast.POSITION.TOP_CENTER
      });
    }}
 },[result, submit])
  
  const resendHandler = () => {
    toast.success("OTP resent successfully!", {
      position: toast.POSITION.TOP_CENTER
    });
    setLoader(true)
    setTimeout(()=>{
      setLoader(false)
      setfirstNum('')
      setsecondNum('')
      setthirdNum('') 
      setfourthNum('')
     setTimer(10)
     setborder(false)
    },1000)
  }

  const keyDownHandler = (e)=>{
    //console.log(e)
    if(e.key === 'Backspace'){
      secondNumRef.current.focus();
    }
  }
  return (
    <>
    <div className='flex justify-center bg-pink-50 items-center h-screen'>
    <div className="w-full max-w-xs ">
  <form className="bg-white shadow-lg rounded px-8 py-8 mb-4 flex flex-col items-center">
  <MdOutlineMobileFriendly size={40} className="text-blue-900" />
    <div className="">
      <label className="block text-blue-900 text-md font-semibold my-4" htmlFor="username">
        Verify with OTP
      </label> 
    </div>
    <div className="mb-3"> 
      <input type="text" className = {`text-center focus:shadow-outline rounded-sm border-2 
      text-gray-500 leading-tight focus:outline-none focus:shadow-outline w-10 h-10 p-1 mr-2       
      ${result ? `border-slate-500`  : ( border ? `border-red-500`: `border-slate-500`)  }`} 
       value={firstNum} maxLength="1" ref={firstNumRef}
       onChange={(e)=> {
        setfirstNum(e.target.value) 
        if (e.target.maxLength >= 1)
        secondNumRef.current.focus(); 
      }} 
      onKeyDown={(e)=> {
        if(e.key === 'Backspace'){
          fourthNumRef.current.focus();
          setfourthNum('')
        }
       }} 
      />
       <input type="text" className = {`text-center  focus:shadow-outline rounded-sm border-2 
      text-gray-500 leading-tight focus:outline-none focus:shadow-outline w-10 h-10  p-1 mr-2       
      ${result ? `border-slate-500`  : ( border ? `border-red-500`: `border-slate-500`)  }`}
        value={secondNum} maxLength="1" ref={secondNumRef}
       onChange={(e)=> {
        setsecondNum(e.target.value)
        if (e.target.maxLength >= 1)
        thirdNumRef.current.focus();
       }} 
       onKeyDown={(e)=> {
        if(e.key === 'Backspace'){
          firstNumRef.current.focus();
          setfirstNum('')
        }
       }} 
       />
       <input type="text" className = {`text-center focus:shadow-outline rounded-sm border-2 
      text-gray-500 leading-tight focus:outline-none focus:shadow-outline w-10 h-10 p-1 mr-2       
      ${result ? `border-slate-500`  : ( border ? `border-red-500`: `border-slate-500`)  }`}  
      value={thirdNum} maxLength="1"  ref={thirdNumRef}
       onChange={(e)=> {
        setthirdNum(e.target.value)
        if (e.target.maxLength >= 1)
        fourthNumRef.current.focus();
       }}
       onKeyDown={(e)=> {
        if(e.key === 'Backspace'){
          secondNumRef.current.focus();
          setsecondNum('')
        }
       }} 
      // onKeyPress={ket}
       />
     <input type="text"className = {`text-center focus:shadow-outline rounded-sm border-2 
      text-gray-500 leading-tight focus:outline-none focus:shadow-outline w-10 h-10 p-1 mr-2       
      ${result ? `border-slate-500`  : ( border ? `border-red-500`: `border-slate-500`)  }`} 
       value={fourthNum} maxLength="1"  ref = {fourthNumRef}
       onChange={(e)=>{
        setfourthNum(e.target.value)
        if (e.target.maxLength >= 1)
        firstNumRef.current.focus();
       }} 
       onKeyDown={(e)=> {
        if(e.key === 'Backspace'){
          thirdNumRef.current.focus();
          setthirdNum('')
        }
       }} 
       />
    </div>
    <div className='flex flex-col items-center gap-6'>
      <p className='font-semibold text-sm text-slate-400'>
       {timer > 0 ? <span className='text-pink-400 pointer-events-none'>Resend OTP in {timer} secs</span> : 
        <span className='text-pink-600 font-bold cursor-pointer' onClick={resendHandler}>Resend OTP</span> }
        
      </p>
     <ToastContainer autoClose={2000}/>
      {loader && <svg aria-hidden="true" className="items-center inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-pink-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>}
    <Link to='/'><button className='bg-blue-800 hover:bg-blue-900 text-white text-sm
     py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Back to login</button></Link>
    </div>
  </form> 
</div>
</div>
    </>
  )
}

export default OtpPage