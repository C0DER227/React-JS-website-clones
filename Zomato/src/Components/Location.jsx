import React from 'react'

function Location() {
  return (
    <>
    <h2 className='text-xl'>Popular localities in and around <span className='font-bold'>Vadodara</span></h2><br />
    <div className='grid grid-cols-3'>
        <div className='cursor-pointer'>
            <ul className='h-[125] w-[125] shadow-lg'>
                <li><h2>Alkapuri</h2>
                <p>227 places</p></li><br />
                <li><h2>Fatehgunj</h2>
                <p>123 places</p></li><br />
                <li><h2>Karelibaug</h2>
                <p>225 places</p></li>
            </ul>
        </div>
        <div className='cursor-pointer'>
            <ul className='h-[125] w-[125] shadow-lg'>
                <li><h2>Vadiwadi</h2>
                <p>91 places</p></li><br />
                <li><h2>Akota</h2>
                <p>181 places</p></li><br />
                <li><h2>Subhanpura</h2>
                <p>134 places</p></li>
            </ul>
        </div>
        <div className='cursor-pointer'>
            <ul className='h-[125] w-[125] shadow-lg'>
                <li><h2>Diwalipura</h2>
                <p>277 places</p></li><br />
                <li><h2>Sayajigunj</h2>
                <p>108 places</p></li><br />
                <li><h2>see more ^</h2>
                <p className='text-white'>777 places</p>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Location