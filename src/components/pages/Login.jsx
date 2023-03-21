import React from 'react'

const Login = () => {
  return (
    <>
    <div className='flex justify-center bg-pink-50 items-center h-screen'>
    <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-blue-900 text-md font-semibold my-4" htmlFor="username">
        Enter email or phone number
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
      leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs" 
      id="username" type="text" placeholder="email or contact number"/>
    </div>
   
    <div className="flex items-center justify-between">
      <button className="bg-blue-800 hover:bg-blue-900 text-white text-sm
     py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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