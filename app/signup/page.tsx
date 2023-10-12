"use client"
import React from 'react'
import Image from 'next/image'
import { GoogleBtn, AppleBtn  } from '@/components/common/AuthButton'

const SignIn = () => {

    return (
        <section className='flex items-center justify-center h-[100vh]'>
            <form className='text-center p-2 lg:w-[426px]'>
                <p>Sign up with:</p>
                <div className='flex mt-6 gap-5 justify-center'>
                    <GoogleBtn />
                   <AppleBtn />
                </div>
                <p className='or my-6'>Or</p>
                <div className='flex flex-col gap-8'>
                    <input className='border border-blue-600 rounded-xl px-5 py-3' type="text" name="url" id="username" placeholder='Username' />
                    <input className='border border-blue-600 rounded-xl px-5 py-3' type="text" name="url" id="email" placeholder='Email' />
                    <div className='relative'>
                        <input className='w-full border border-blue-600 rounded-xl px-5 py-3' type="text" name="url" id="password" placeholder='Password' />
                        <Image className='absolute right-2 top-5' src="/images/eye.svg" alt="eye-icon" width={23} height={15} />
                    </div>
                    <div className='relative'>
                        <input className='w-full border border-blue-600 rounded-xl px-5 py-3' type="text" name="url" id="retype_password" placeholder='Retype Password' />
                        <Image className='absolute right-2 top-5' src="/images/eye.svg" alt="eye-icon" width={23} height={15} />
                    </div>


                </div>

                <p className='text-gray-600 text-left my-4 text-xs'>6 or more characters, one number, one uppercase & one lower case.</p>
                <button className='text-white w-full bg-blue-600 px-6 py-3 rounded-full cursor-pointer'>Sign up with email</button>
                <p className='my-5 text-sm'>Already have an account? <a className='text-blue-600' href="/login">Log in</a></p>
                <p className='text-xs'>By signing in with an account, you agree to</p>
                <p className='text-xs'>Sciccors Terms of Service, Privacy Policy and Acceptable Use Policy.</p>
            </form>

        </section>
    )
}

export default SignIn
