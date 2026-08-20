import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import { ThemeContext } from '../../components/Context'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'



const Register = () => {


        let fieldsvalidation = yup.object({
            name:yup.string().required('Name is required'),
            email:yup.string().required(),
            password:yup.string().required('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
        })
    

        let {
            handleSubmit,
            register,
            formState: { errors }
        } = useForm({
            resolver: yupResolver(fieldsvalidation),
        });

        let onSubmit = (data) =>{
            console.log(data);
        }
        console.log(errors)

    let [transition, setTransition] = useState(false)
    let { theme, setTheme } = useContext(ThemeContext);



    useEffect(() => {
        setTransition(true)
    }, [])


    return (
        <form className={`flex flex-col items-center justify-center w-full transition-all duration-800 ease-in-out  rounded-2xl ${transition ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ${theme === 'dark' ? 'bg-indigo-300 text-black' : 'bg-amber-200 text-black'} 
              `} onSubmit={handleSubmit(onSubmit)} >
            <div className={`flex flex-col items-center justify-center max-w-md w-full bg-amber-200 m-4 p-4 rounded-2xl gap-6 ${theme === 'dark' ? 'bg-indigo-400 text-black' : 'bg-amber-200 text-black'}`}>
                <h1 className='font-bold text-2xl'>Register</h1>

                <input type="text" placeholder='Enter your Name' className='border-2 border-black rounded-2xl p-2  bg-white'
                  {...register('name')}/>

                  {
                    errors?.name && <span className='text-white rounded p-1 bg-red-400'>{errors.name.message}</span>
                  }

                <input type="email" placeholder='Enter your email' className='border-2 border-black rounded-2xl p-2  bg-white'
                  {...register('email')} />

                  {
                    errors?.email && <span className='text-white rounded p-1 bg-red-400'>{errors.email.message}</span>
                  }

                <input type="password" placeholder='Enter your password' className='border-2 border-black rounded-2xl p-2  bg-white'
                  {...register('password')} />

                  {
                    errors?.password && <span className='text-white rounded p-1 bg-red-400'>{errors.password.message}</span>
                  }

                <button className='bg-blue-500 text-white rounded p-2 m-2 hover:bg-blue-300 transition-all'>Register</button>
            </div>
        </form >
    )
}

export default Register
