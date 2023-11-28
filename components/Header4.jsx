'use client'
import Image from 'next/image'

const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-14 border-2 rounded-lg border-gray-300 p-5">
      <div className="flex items-center">
        <Image src={"/fire.jpg"} alt="fire" width={200} height="200" 
        className="w-20 h-20 rounded-full" mr-5
         />
         <div className='text-xl '>
            <p className='font-bold'>Get access to exclusive deals</p>
            <p>only the best deals reach your inbox</p>
         </div>
      </div>
      <div className="flex">
        <input type="email" placeholder='e.g. example@mail.com' 
        className='px-6 py-3 mr-5 w-80 h-16 outline-none border border-gray-300 rounded-lg'
        />
        <button type='submit' className='w-32 h-16 rounded-lg bg-red-500 text-xl text-white cursor-pointer'>Notify</button>
      </div>
    </div>
  )
}

export default Header4;
