import React from 'react'
import Image from "next/image";

const FeatureSection = () => {
    return (
        <section className="flex max-lg:flex-col bg-white py-20 lg:px-24 md:px-10 max-md:px-3 lg:gap-x-10 gap-x-4">
            <div className="flex-[98%]">
                <h2 className="text-4xl font-semibold pl-4 leading-snug border-l-4 border-slate-800 border-spacing-2">Why choose <span className="text-blue-600">Scissors</span></h2>
                <p className="m-4">
                    Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation,
                    management and usage tracking with advance analytics for all of these is second to none.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-10 max-md:mt-6 lg:ml-8">
                <div className="">
                    <Image src={"/images/link.svg"} alt="" width={56} height={56} />
                    <h3 className="lg:text-3xl text-2xl font-semibold my-4">URL Shortening</h3>
                    <p>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
                </div>
                <div>
                    <Image src={"/images/edit.svg"} alt="" width={56} height={56} />
                    <h3 className="lg:text-3xl text-2xl font-semibold my-4">Custom URLs</h3>
                    <p>With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</p>
                </div>

                <div className="">
                    <Image src={"/images/grid.svg"} alt="" width={56} height={56} />
                    <h3 className="lg:text-3xl text-2xl font-semibold my-4">QR Codes</h3>
                    <p>Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
                </div>
                <div className="flex flex-col justify-between">
                    <Image src={"/images/activity.svg"} alt="" width={56} height={56} />
                    <h3 className="lg:text-3xl text-2xl font-semibold my-4">Data Analytics</h3>
                    <p>Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection
