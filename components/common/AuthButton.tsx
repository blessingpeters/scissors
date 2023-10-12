import React from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const handleSignIn = async (provider:string) => {
    try {
        await signIn(provider, { callbackUrl: '/' }); // Redirect to homepage after sign-in
    } catch (error) {
        console.error('Sign-in error:', error);
    }
};

export const GoogleBtn = () => {
    return (
        <button 
            className='flex items-center text-white bg-blue-600 px-6 py-2 rounded-md cursor-pointer' 
            type='button' 
            onClick={() => handleSignIn('google')}
        >
            <Image className='mr-4' src="/images/google.svg" alt="google logo" width={20} height={19} />
            Google
        </button>
    );
};

export const AppleBtn = () => {
    return (
        <button 
            className='flex items-center text-white bg-black px-6 py-2 rounded-md cursor-pointer' 
            type='button' 
            onClick={() => handleSignIn('apple')} // Make sure to call the correct provider
        >
            <Image className='mr-4' src="/images/apple.svg" alt="apple logo" width={20} height={19} /> {/* Update the source here */}
            Apple
        </button>
    );
};
