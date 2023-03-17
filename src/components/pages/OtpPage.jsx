import React, { useState } from 'react'

const OtpPage = () => {
  const [firstNum, setfirstNum] = useState()
  const [secondNum, setsecondNum] = useState()
  const [thirdNum, setthirdNum] = useState()
  const [fourthNum, setfourthNum] = useState()
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
     
      <input type="text" className="border border-slate-500  focus:shadow-outline rounded-sm
      text-gray-500 leading-tight focus:outline-none focus:shadow-outline w-5  p-1  mx-2" value={firstNum}
       onChange={(e)=> setfirstNum(e.target.value)}/>
       <input type="text" className="border border-slate-500  focus:shadow-outline rounded-sm
      text-gray-500 leading-tight focus:outline-none focus:shadow-outline w-5  p-1 mx-2" value={secondNum}
       onChange={(e)=> setsecondNum(e.target.value)}/>
       <input type="text" className="border border-slate-500  focus:shadow-outline rounded-sm
      text-gray-500 leading-tight focus:outline-none focus:shadow-outline w-5  p-1 mx-2" value={thirdNum}
       onChange={(e)=> setthirdNum(e.target.value)}/>
     <input type="text" className="border border-slate-500  focus:shadow-outline rounded-sm
      text-gray-500 leading-tight focus:outline-none focus:shadow-outline w-5  p-1 mx-2" value={fourthNum}
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