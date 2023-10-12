import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter()
    return (
        <>
            <div className="header flex flex-col justify-center items-center text-center max-md:px-3 mt-12 relative">
                <div className="">
                    <h1 className="text-5xl max-md:text-3xl font-bold leading-loose mt-5 relative">
                        Optimize Your Online Experience with
                        Our  <br /> Advanced
                        <span className="text-blue-600"> URL Shortening
                        </span>
                        Solution
                        <svg className="absolute left-5 -bottom-5 md:left-96 md:bottom-0" xmlns="http://www.w3.org/2000/svg" width="174" height="21" viewBox="0 0 174 21" fill="none">
                            <path d="M162.517 0.904968C75.1007 1.58327 17.7488 11.4833 0 16.3485L9.28502 15.694L2.32125 17.9692L10.2135 17.6848L6.03526 19.3912L12.0705 20.8132C52.0748 16.4527 149.09 6.64053 173.63 5.23864L155.524 4.88662C165.556 3.55424 166.666 3.6068 166.666 3.6068C166.666 3.6068 162.517 2.61139 162.517 0.904968Z" fill="#005AE2" />
                        </svg>
                    </h1>

                    <p className="leading-loose mt-5 ">
                        Personalize your shortened URLs to align with your brand identity.
                        Utilize custom slugs, <br /> branded links, and domain customization
                        options to reinforce your brand presence and <br /> enhance user
                        engagement.
                    </p>
                </div>
                <div className="my-6">
                    <button className="text-white bg-blue-600 px-6 py-2 rounded-full mr-7" onClick={()=> router.push("/signup")}>
                        Sign Up
                    </button>
                    <button className="text-blue-600">Learn More</button>
                </div>
                <Image src={"/images/Group2.svg"} alt="" width={701} height={337} />
                <Image className=" object-contain b" src={"/images/Group3.svg"} alt="" width={1440} height={93} />
            </div>
        </>
    );
};

export default Header;
