import React from 'react'

const Register = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full' >
            <div className='flex flex-col items-center justify-center bg-amber-200 m-4 p-4 rounded-2xl w-96  gap-6'>
                <h1 className='font-bold text-2xl'>Register</h1>
                <input type="text" placeholder='Enter your Name' className='border-2 border-gray-300 rounded p-2 m-2 bg-white' />
                <input type="email" placeholder='Enter your email' className='border-2 border-gray-300 rounded p-2 m-2 bg-white' />
                <input type="password" placeholder='Enter your password' className='border-2 border-gray-300 rounded p-2 m-2 bg-white' />
                <button className='bg-blue-500 text-white rounded p-2 m-2 hover:bg-blue-300 transition-all'>Register</button>
            </div>
        </div >
    )
}

export default Register
