import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


type FooterData = {
    title: string;
    benefit: string[];
};

type FooterDataProps = {
    footerData: FooterData;
};

const FooterInfo: React.FC<FooterDataProps> = ({ footerData }) => {

    return (
        <div className="">
            <h2 className='font-bold'>{footerData.title}</h2>
            <ul>
                {footerData.benefit.map((benefitItem, index) => (
                    <li className=' font-medium' key={index}>{benefitItem}</li>
                ))}
            </ul>
        </div>
    );
};
export default function Footer() {
    const info: FooterData[] = [
        {
            title: "Why Scissors?",
            benefit: [
                "Scissors 101",
                "Integration and API",
                "Pricing"
            ],
        },
        {
            title: "Solutions",
            benefit: [
                "Social Media",
                "Digital Marketing",
                "Customer Services",
                "For Developers"
            ],
        },
        {
            title: "Products",
            benefit: [
                "Link Management",
                "QR Codes",
                "Link-in-Bio"
            ],
        },
        {
            title: "Company",
            benefit: [
                "About Scissors",
                "Careers",
                "Partners",
                "Press",
                "Contacts",
                "Review",
            ],
        },
        {
            title: "Resources",
            benefit: [
                "Blog",
                "Resource",
                "Library",
                "Developers",
                "App Connectors",
                "Support",
                "Trust Center",
                "Browser Extension",
                "Mobile App"

            ],
        },
        {
            title: "Features",
            benefit: [
                "Branded Links",
                "Mobile Links",
                "Campaign",
                "Management &",
                "Analytics",
                "QR Code generation"
            ],
        },
        {
            title: "Legal",
            benefit: [
                "Privacy Policy",
                "Cookie Policy",
                "Terms of Service",
                "Acceptable Use Policy",
                "Code of Conduct"
            ],
        },
    ];
    return (
        <section className='lg:p-20 lg:px-24 md:px-10 max-md:px-3'>
            <div className='flex max-md:flex-col justify-evenly my-10'>
                <div className='mr-6'>
                    <Link href={"/"}>
                        <Image className='mb-6' src="/images/Logodark.svg" alt="logo" width={155} height={40} />
                    </Link>
                    <div className='flex space-x-6 max-md:mb-10'>
                        <Image src="/images/instagram.svg" alt="logo" width={24} height={24} />
                        <Image src="/images/twitter.svg" alt="logo" width={24} height={24} />
                        <Image src="/images/linkedin.svg" alt="logo" width={23} height={22} />
                        <Image src="/images/facebook.svg" alt="logo" width={23} height={22} />
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {info.map((planDetail, index) => (
                        <FooterInfo key={index} footerData={planDetail} />
                    ))}
                </div>
            </div>
            <div className='lg:text-right text-center'>
                <p>Term of Service | Security | ⓒ Scissor 2023</p>
            </div>
        </section>
    )
}

