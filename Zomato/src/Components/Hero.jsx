import React from 'react'

function Main() {
  return (
    <>
    <div>
      <img className='' src="backimg.jpg" alt="" />
    <h1 className='text-6xl text-white text-center p-4 relative bottom-[27.3rem]'>zomato</h1><br />
    <h2 className='text-3xl text-white text-center relative bottom-[27rem]'>Discover the best food & drinks in Vadodara</h2><br />
    <div className='relative left-52 p-16 bottom-[26rem]'>
      <img className='h-8 w-10 relative right-16 top-8 cursor-pointer' src="loc.jpg" alt="" />
    <input className='h-10 absolute left-8 text-white' type="type" placeholder=' Vadodara'/>
    <input className='h-10 w-[35rem] absolute left-56' type="text" placeholder='Search for restaurant,cuisine or a dish' />
    </div>
    </div>
    </>
  )
}

export default Main