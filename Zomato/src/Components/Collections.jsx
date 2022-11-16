import React from 'react'

function Collections() {
  return (
    <>
    <h1 className='text-3xl font-bold'>Collections:</h1>
    <div className='flex gap-96'>
        <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Vadodara, based on trends</p>
        <p className='cursor-pointer text-pink-400 '>All collections in Vadodara...</p>
    </div>
    <div className='grid grid-cols-5 gap-12 m-4 p-4'>
        <div className='overflow-hidden'>
        <img className='w-64 h-72 p-2 hover:scale-125 cursor-pointer' src="thali.jpg" alt="Guj-thali" />
        <h3 className='relative top-2 cursor-pointer text-green-300'>Gujarati Thali</h3>
        <p>6 Places --</p>
        </div>
        <div className='overflow-hidden'>
        <img className='w-64 h-72 p-2 hover:scale-125 cursor-pointer' src="pizza.jpg" alt="pizza" />
        <h3 className='relative top-2 cursor-pointer text-green-300'>Best Pizza Places in Town</h3>
        <p>7 Places --</p>
        </div>
        <div className='overflow-hidden'>
        <img className='w-64 h-72 p-2 hover:scale-125 cursor-pointer' src="chococake.jpg" alt="cakes" />
        <h3 className='relative top-2 cursor-pointer text-green-300'>Sweet Tooth</h3>
        <p>8 Places --</p>
        </div>
        <div className='overflow-hidden'>
        <img className='w-64 h-72 p-2 hover:scale-125 cursor-pointer' src="biriyani.jpg" alt="biriyani" />
        <h3 className='relative top-2 cursor-pointer text-green-300'>Brilliant Biranis</h3>
        <p>10 Places --</p>
        </div>
    </div>
    </>
  )
}

export default Collections