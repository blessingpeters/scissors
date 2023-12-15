"use client"
import React, { useState } from 'react'
import { AppleBtn, GoogleBtn } from '@/components/common/AuthButton'
import Image from 'next/image';
import { useRouter, redirect } from 'next/navigation';
import { signIn } from 'next-auth/react';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter()

    const togglePasswordVisibility = (field: string) => {
        setShowPassword(!showPassword);

    };

    const [loginError, setLoginError] = useState('');
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setLoginError(''); // Clear any previous error message
    
        try {
            const result = await signIn('credentials', {
                email,
                password,
                callbackUrl: '/',
                redirect: false,  // Prevent automatic redirection
            });
    
            if (result?.error) {
                // If there's an error, set the error message to state to display to the user
                setLoginError(result.error);
            } else {
                // If signIn was successful, redirect or do something else
                router.push('/');  // or whatever your logic needs
            }
        } catch (error) {
            // Handle or log error as needed
            console.error('Error signing in:', error);
        }
    };




    return (
        <section className='flex items-center justify-center h-[100vh]'>
            <form className='text-center p-2 lg:w-[426px]' onSubmit={handleSubmit}>
                <p>Log in with:</p>
                <div className='flex mt-6 gap-5 justify-center'>
                    <GoogleBtn />
                    <AppleBtn />
                </div>
                <p className='or my-6'>Or</p>
                <div className='flex flex-col gap-8'>
                    <input className='border border-blue-600 rounded-xl px-5 py-3' type="text" name="url" id="email" placeholder='Email address or username'  onChange={(e) => setEmail(e.target.value)}/>
                    <div className='relative'>
                        <input
                            className='w-full border border-blue-600 rounded-xl px-5 py-3'
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Image
                            className='absolute right-2 top-5 cursor-pointer'
                            src="/images/eye.svg"
                            alt="eye-icon"
                            width={23}
                            height={15}
                            onClick={() => togglePasswordVisibility('password')}
                        />
                    </div>
                </div>

                <p className='text-blue-600 text-right my-4'>Forgot your password?</p>
                <button type='submit' className='text-white w-full bg-blue-600 px-6 py-3 rounded-full cursor-pointer'
                disabled={!email || !password}>Login</button>
                <p className='my-5 text-sm'>Don’t have an account? <a className='text-blue-600' href="/signup">Sign up</a></p>
                <p className='text-xs'>By signing in with an account, you agree to</p>
                <p className='text-xs'>Sciccors Terms of Service, Privacy Policy and Acceptable Use Policy.</p>
            </form>

        </section>
    )
}

export default Login
