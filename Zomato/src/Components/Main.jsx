import React from 'react'

function Main() {
  return (
    <>
    <div className='grid grid-cols-2 m-4 p-16 bg-white'>
        <div>
        <div className='overflow-hidden'>
        <img className='h-60 px-2 mx-2  cursor-pointer hover:scale-125' src="main1.png" alt="" />
        </div>
        <h1 className='px-2 mx-2 text-2xl cursor-pointer'>Order Online</h1>
        <p className='px-2 mx-2'>Stay home and order to ypur doorstep</p>
        </div>
        <div>
            <div className='overflow-hidden'>
            <img className='h-60 px-4 mx-4 cursor-pointer hover:scale-125' src="main2_.jpg" alt="" />
            </div>
            <h1 className='px-4 mx-4 text-2xl cursor-pointer'>Dining</h1>
            <p className='px-4 mx-4'>View the city's favourite dining venues</p>
            </div>
            </div>
    </>
  )
}

export default Main