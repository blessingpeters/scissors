import Nav from '@/components/Nav'
import React from 'react'

const contact = () => {
    return (
        <section className='max-md:px-3'>
            <Nav />

            <div className='flex flex-col justify-center items-center mt-20 mb-15'>
                <h2 className='font-bold text-3xl my-4'>Lets get in touch</h2>
                <form action="" className='bg-[#CBD6E0] py-16 px-8 max-w-[570px] rounded-md'>
                    <div className="max-md:block grid grid-cols-2 gap-x-3 w-full mb-3">
                        <div className="col-span-1">
                            <label
                                htmlFor="first_name"
                                className="block label-heading mb-1"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                className="rounded-md text-p3 p-2 w-full"
                                minLength={3}
                            />
                        </div>

                        <div className="col-span-1">
                            <label
                                htmlFor="last_name"
                                className="block label-heading text-normal mb-1"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                className="rounded-md text-p3 p-2 w-full"
                                minLength={3}
                            />
                        </div>
                    </div>
                    <div className='w-full mb-3'>
                        <label
                            htmlFor="company"
                            className="block text-normal mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="company"
                            className="w-full rounded-md text-p3 p-2"
                        />
                    </div>
                    <div className='w-full mb-3'>
                        <label
                            htmlFor="e"
                            className="block text-normal mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            name="e"
                            id="email"
                            className="w-full rounded-md text-p3 p-2"
                        />
                    </div>
                    <div className='w-full mb-3'>
                        <label
                            htmlFor="el"
                            className="block text-normal mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="el"
                            className="w-full rounded-md text-p3 p-2"
                        />
                    </div>

                    <div className='w-full mb-3'>
                        <label
                            htmlFor="email"
                            className="block text-normal mb-1"
                        >
                            Email
                        </label>
                        <select name='job' title='job title' className='w-full p-2 rounded-md'>
                            <option value="default">Please Select</option>
                            <option value="default"> Developers</option>
                            <option value="default">farmer</option>

                        </select>

                    </div>
                    <div className='w-full mb-3'>
                        <label
                            htmlFor="email"
                            className="block text-normal mb-1"
                        >
                            Email
                        </label>
                        <select name='job' title='job title' className='w-full p-2 rounded-md'>
                            <option value="default">Please Select</option>
                            <option value="default"> Developers</option>
                            <option value="default">farmer</option>

                        </select>

                    </div>
                    <div className='w-full mb-3'>
                        <label
                            htmlFor="email"
                            className="block text-normal mb-1"
                        >
                            Email
                        </label>
                        <select name='job' title='job title' className='w-full p-2 rounded-md'>
                            <option value="default">Please Select</option>
                            <option value="default"> Developers</option>
                            <option value="default">farmer</option>

                        </select>

                    </div>
                    <div className='w-full'>
                        <label
                            htmlFor="email"
                            className="block text-normal mb-1"
                        >
                            Email
                        </label>
                        <select name='job' title='job title' className='w-full p-2 rounded-md'>
                            <option value="default">Please Select</option>
                            <option value="default"> Developers</option>
                            <option value="default">farmer</option>

                        </select>

                    </div>

                    <p className='text-xs my-8'>Scissor requires the contact information you provide in order to reach out to you regarding our products and services. You have the option to unsubscribe from these communications whenever you wish. To learn more about how to unsubscribe, our privacy practices, and our dedication to safeguarding your privacy, please refer to our Privacy Policy.</p>

                    <button className='text-white w-full bg-blue-600 px-6 py-3 rounded-full cursor-pointer'>Submit</button>

                </form>
            </div>

        </section>
    )
}

export default contact
