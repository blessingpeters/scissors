import React from 'react'
import Image from 'next/image'

const Login = () => {
    return (
        <section className='flex items-center justify-center h-[100vh]'>
            <form className='text-center p-2 lg:w-[426px]'>
                <p>Log in with:</p>
                <div className='flex mt-6 gap-5 justify-center'>
                    <button className='flex items-center text-white bg-blue-600 px-6 py-2 rounded-md cursor-pointer'>
                        <Image className='mr-4' src="/images/google.svg" alt="google logo" width={20} height={19} />
                        Google
                    </button>
                    <button className='flex items-center text-white bg-blue-600 px-6 py-2 rounded-md cursor-pointer'>
                        <Image className='mr-4' src="/images/apple.svg" alt="google logo" width={20} height={19} />
                        Apple
                    </button>
                </div>
                <p className='or my-6'>Or</p>
                <div className='flex flex-col gap-8'>
                    <input className='border border-blue-600 rounded-xl px-5 py-3' type="text" name="url" id="email" placeholder='Email address or username' />
                    <input className='border border-blue-600 rounded-xl px-5 py-3' type="text" name="url" id="password" placeholder='Password' />
                </div>

                <p className='text-blue-600 text-right my-4'>Forgot your password?</p>
                <button className= 'text-white w-full bg-blue-600 px-6 py-3 rounded-full cursor-pointer'>Login</button>
                <p className='my-5 text-sm'>Don’t have an account? <a className='text-blue-600' href="/auth/signup">Sign up</a></p>
                <p className='text-xs'>By signing in with an account, you agree to</p>
                <p className='text-xs'>Sciccors Terms of Service, Privacy Policy and Acceptable Use Policy.</p>
            </form>

        </section>
    )
}

export default Login
