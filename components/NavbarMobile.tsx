import Link from 'next/link';
import Image from "next/image";
import Menus from './Menu';
import { redirect, useRouter } from "next/navigation";

type Item = {
    text: string;
    href: string;
};

type NavbarMobileProps = {
    menus: Item[];
    openNav: () => void;
};


export default function NavbarMobile({ menus, openNav }: NavbarMobileProps) {
    const router = useRouter();

    return (
        <>
            <div className="absolute inset-x-0 top-0 origin-top-left px-3 z-40 bg-white">
                <div className="ring-black ring-opacity-5 divide-y divide-brand_secondary-150">

                    <div className="py-5 flex justify-between items-center">
                        <Link href="/" passHref>
                            <Image
                                src="/logo.svg"
                                alt="scissors logo"
                                width={120}
                                height={40}
                                priority
                            />
                        </Link>

                        <div className="flex gap-x-2 md:gap-x-6 max-md:text-sm">
                            <button className='text-blue-600 font-semibold' onClick={() => router.push("/auth/signup")}>Login</button>
                            <button className='text-white bg-blue-600  md:px-6 px-3 py-2 rounded-full font-semibold' onClick={() => router.push("/auth/login")}>Try for free</button>
                        </div>

                        <button onClick={openNav} className="inline-flex items-center rounded-md py-2 justify-center">
                            <span className="sr-only">close menu</span>
                            <Image src={"images/close-circle.svg"} alt={"cart"} width={30} height={30} aria-hidden="true" />

                        </button>

                    </div>

                    <div className="py-5">
                        <Menus items={menus} />
                    </div>
                </div>
            </div>
        </>
    );
}
