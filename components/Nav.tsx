"use client"
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import NavbarMobile from "./NavbarMobile";
import Menus from "./Menu";

export default function Nav() {
    const router = useRouter();
    const [navOpen, setNavOpen] = useState(false);

    const openNav = () => {
        setNavOpen(true);
    };
    // const ref = useRef();

    // close dropdown if clicked outside

    // useEffect(() => {
    //   const handleClickOutside = (e: MouseEvent) => {
    //     if (ref.current && !ref.current.contains(e.target as Node)) {
    //       setNavOpen(false);
    //     }
    //   };

    //   document.addEventListener("click", handleClickOutside);

    //   return () => {
    //     document.removeEventListener("click", handleClickOutside);
    //   };
    // }, []);

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

    const menus = [
        {
            text: "My URL",
            href: "/auth/login",
        },
        {
            text: "Features",
            href: "/auth/signup",
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


    return (
            <nav className="relative bg-brand_primary-150 flex justify-between items-center max-md:px-3 md:px-20 pt-6">
                <>
                    <Link href="/" passHref>
                        <Image
                            src="Logo.svg"
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


                    <div className="flex gap-x-2 md:gap-x-6 max-md:text-sm">
                        <button className='text-blue-600 font-semibold' onClick={() => router.push("/auth/signup")}>Login</button>
                        <button className='text-white bg-blue-600  md:px-6 px-3 py-2 rounded-full font-semibold' onClick={() => router.push("/auth/login")}>Try for free</button>
                    </div>

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

