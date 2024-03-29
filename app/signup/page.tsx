"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { GoogleBtn, AppleBtn } from '@/components/common/AuthButton';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordAgain, setShowPasswordAgain] = useState(false);
    const [signUpSuccess, setSignUpSuccess] = useState(false); 
    const router = useRouter();

    const togglePasswordVisibility = (field: string) => {
        if (field === "password") {
            setShowPassword(!showPassword);
        } else if (field === "passwordAgain") {
            setShowPasswordAgain(!showPasswordAgain);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        if (password !== passwordAgain) {
            alert("Passwords don't match");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('Sign up successful');
            setSignUpSuccess(true);


            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error signing up:', error.message);
            } else {
                console.error('An unknown error occurred:', error);
            }
        }
    };

    return (
        <section className='flex items-center justify-center h-[100vh]'>
            <form className='text-center p-2 lg:w-[426px]' onSubmit={handleSubmit}>
                <p>Sign up with:</p>
                <div className='flex mt-6 gap-5 justify-center'>
                    <GoogleBtn />
                    <AppleBtn />
                </div>
                <p className='or my-6'>Or</p>
                <div className='flex flex-col gap-8'>
                    <input className='border border-blue-600 rounded-xl px-5 py-3' type="text" name="username" id="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                    <input className='border border-blue-600 rounded-xl px-5 py-3' type="text" name="email" id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
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
                    <div className='relative'>
                        <input
                            className='w-full border border-blue-600 rounded-xl px-5 py-3'
                            type={showPasswordAgain ? "text" : "password"}
                            name="retype_password"
                            id="retype_password"
                            placeholder='Retype Password'
                            onChange={(e) => setPasswordAgain(e.target.value)}
                        />
                        <Image
                            className='absolute right-2 top-5 cursor-pointer'
                            src="/images/eye.svg"
                            alt="eye-icon"
                            width={23}
                            height={15}
                            onClick={() => togglePasswordVisibility('passwordAgain')}
                        />
                    </div>


                </div>

                <p className='text-gray-600 text-left my-4 text-xs'>6 or more characters, one number, one uppercase & one lower case.</p>
                <button className='text-white w-full bg-blue-600 px-6 py-3 rounded-full cursor-pointer' disabled={!email || !password}>Sign up with email</button>
                <p className='my-5 text-sm'>Already have an account? <a className='text-blue-600' href="/login">Log in</a></p>
                <p className='text-xs'>By signing in with an account, you agree to</p>
                <p className='text-xs'>Sciccors Terms of Service, Privacy Policy and Acceptable Use Policy.</p>
            </form>

        </section>
    )
}

export default SignUp
