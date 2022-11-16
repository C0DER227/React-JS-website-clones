import React from 'react'

function Navbar() {
  return (
    <>
    <header>
        <nav className='bg-black'>
            <h5 className='cursor-pointer text-white'>Get the App</h5>
            <img className='h-3 cursor-pointer' src="mobicon.jpg" alt="" />
            <ul className='flex justify-end align-item gap-8'>
                <li className='text-white cursor-pointer '><a className='hover:text-gray-400' href="#">Investor relations</a></li>
                <li className='text-white cursor-pointer '><a className='hover:text-gray-400' href="#">Add restaurant</a></li>
                <li className='text-white cursor-pointer '><a className='hover:text-gray-400' href="#">Log in</a></li>
                <li className='text-white cursor-pointer '><a className='hover:text-gray-400' href="#">Sign up</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar