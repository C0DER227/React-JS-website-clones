import React from 'react'

function Navbar() {
  return (
    <>
    <nav>
    <div>
    <div className="right flex gap-8  bg-white">
        <img className=' h-10 w-10 cursor-pointer' src="dblogo.png" alt="" />
        <div className='flex gap-8 relative top-2'>
        <h1 className='text-xl font-bold text-black'>Dropbox</h1>
        <h1 className='hover:text-gray-400 cursor-pointer'>Why Dropbox?</h1>
        <h1 className='hover:text-gray-400 cursor-pointer'>Products</h1>
        <h1 className='hover:text-gray-400 cursor-pointer'>Solutions</h1>
        <h1 className='hover:text-gray-400 cursor-pointer'>Pricing</h1>
        </div>
        </div>
        <div className='flex justify-end gap-8 relative bottom-8'>
        <h1 className='hover:text-gray-400 cursor-pointer'>Contact</h1>
        <h1 className='hover:text-gray-400 cursor-pointer'>Get app</h1>
        <h1 className='hover:text-gray-400 cursor-pointer'>Sign up</h1>
        <h1 className='hover:text-gray-400 cursor-pointer'>Sign in</h1>
        <button className='bg-blue-600 h-10 relative bottom-2 hover:bg-blue-400'>Get started →</button>
     </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar