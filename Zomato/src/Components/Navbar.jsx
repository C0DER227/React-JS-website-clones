import React from 'react'

function Navbar() {
  return (
    <>
    <header>
        <nav className='bg-gray-400'>
            <h5 className='cursor-pointer text-white'>Get the App</h5>
            <ul className='flex justify-end align-item gap-8'>
                <li className='text-white cursor-pointer'><a href="#">Investor relations</a></li>
                <li className='text-white cursor-pointer'><a href="#">Add restaurant</a></li>
                <li className='text-white cursor-pointer'><a href="#">Log in</a></li>
                <li className='text-white cursor-pointer'><a href="#">Sign up</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar