"use client"
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import NavbarMobile from "./NavbarMobile";
import Menus from "./Menu";
import { signOut, useSession } from 'next-auth/react'

export default function Nav() {
    const router = useRouter();
    const [navOpen, setNavOpen] = useState(false);

    const { data: session, status } = useSession();
    console.log(session)

    const openNav = () => {
        setNavOpen(true);
    };

    const menus = [
        {
            text: "My URL",
            href: "/login",
        },
        {
            text: "Features",
            href: "/signup",
        },
        {
            text: "Pricing",
            href: "/contact",
        },

        {
            text: "Analytics",
            href: "#",
        },
        {
            text: "FAQ",
            href: "#",
        },
    ];
    useEffect(() => {
        const closeNav = () => {
            setNavOpen(false);
        };

        window.addEventListener("resize", closeNav);
        return () => window.removeEventListener("resize", closeNav);
    }, []);

    const handleClickOutside = () => {
        setNavOpen(false);
    };

    useEffect(() => {
        if (status === 'authenticated') {
            // Optionally, redirect the user after they've signed in
            router.push('/');
        }
    }, [status, router]);

    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/' }); // redirect to homepage after sign-out
    }

 const renderAuthButtons = () => {
        if (session && session.user) {
            return (
                <div className="flex items-center gap-x-2">
                    <p className='max-md:text-xs'>{session?.user?.name}</p>
                    {session.user.image && (
                        <Image src={session?.user?.image} alt="user image" width={30} height={30} className="rounded-full" />
                    )}
                    <button className='max-md:text-xs text-red-600' onClick={handleSignOut}>Sign out</button>
                </div>
            );
        } else {
            return (
                <div className="flex gap-x-2 md:gap-x-6 max-md:text-sm items-center">
                    <Link href={"/login"} className='text-blue-600 font-semibold'>Login</Link>
                    <Link href={"/signup"} className='text-white bg-blue-600 md:px-6 px-3 py-2 rounded-full font-semibold'>Try for free</Link>
                </div>
            );
        }
    };


    return (
            <nav className="relative bg-brand_primary-150 flex justify-between items-center max-md:px-3 md:px-20 pt-6">
                <>
                    <Link href="/" passHref>
                        <Image
                            src={"images/logo.svg"}
                            alt="scissors logo"
                            width={120}
                            height={40}
                            priority
                        />
                    </Link>

                    <div className="grow">
                        <div className="hidden md:flex items-center justify-center gap-2">
                            <Menus items={menus} />
                        </div>
                    </div>


                    {renderAuthButtons()}

                    <div
                        onClick={openNav}
                        className="flex md:hidden grow items-center justify-end"
                    >
                        <button className="inline-flex items-center rounded-md py-2 justify-center">
                            <span className="sr-only">open menu</span>
                            <Image
                                src={"images/menu-bars.svg"}
                                alt={"menu bar"}
                                width={30}
                                height={30}
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                    {navOpen ? (
                        <div onClick={handleClickOutside}>
                            <NavbarMobile
                                menus={menus}

                                openNav={openNav}
                            />
                        </div>
                    ) : null}
                </>
            </nav>

    );
}

