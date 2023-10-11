import React from 'react'

const Shortner = () => {
  return (
    <section className='bg-[#1E3448] flex justify-center items-center py-20 max-md:px-3'>
        <form action="" className='bg-white flex flex-col justify-center p-12 max-md:px-8 rounded-xl max-w-[476px]'>
            <input className='border border-blue-600 rounded-xl px-5 py-3 placeholder:text-blue-600' type="text" name="url" id="url" placeholder='Paste URL here....' />
            <div className='flex justify-between max-md:flex-col mt-5 gap-2 max-md:gap-5'>
                <select name="scissor" title='shortner' id="" className='border border-blue-600 rounded-xl p-3 text-blue-600'>
                    <option value="scissors.com">Choose Domain</option>
                    <option value="scissors.com">scissors.com</option>
                    <option value="scissors.com">Enter Domain</option>
                </select>
                <input className='border border-blue-600 rounded-xl p-3 placeholder:text-blue-600' type="text" name="url" id="alias" placeholder='Type Alias here' />
            </div>
            <button className='text-white bg-blue-600 px-6 py-3 my-5 rounded-full cursor-pointer'>Trim</button>
            <p className='text-blue-600 text-sm'>By clicking TrimURL,  I agree to the <a className='font-semibold' href="#">Terms of Service,</a> <a className='font-semibold' href="#">Privacy Policy</a> and Use of Cookies.</p>
        </form>

    </section>
  )
}

export default Shortner
