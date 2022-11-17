import React from 'react'

function Why() {
  return (
    <>
    <div className='bg-white text-center text-4xl'>
        <h1>How will you use Dropbox?</h1><br />
    </div>
    <div className='flex justify-evenly'>
        <div className='bg-white'>
            <img className='h-36 w-96 mx-2' src="why1.jpg" alt="" /><br />
            <h1 className='text-3xl mx-2 '>For Work</h1>
            <p className='text-xl mx-2'>Work efficiently with teammates and clients, stay in sync on projects, <br /> and keep company data safe—all in one place.</p><br /><br />
            <button className='bg-blue-600 h-12 w-[40rem] mx-2 hover:bg-blue-400 '>Get Dropbox for work →</button>
        </div>
        <div className='bg-white'>
            <img className='h-36 w-96 mx-2' src="why2.jpg" alt="" /><br />
            <h1 className='text-3xl mx-2'>For personal use</h1>
            <p className='text-xl mx-2'>Keep everything that’s important to you and your family shareable and <br /> safe in one place. Back up files in the cloud, share photos and videos, <br /> and more.</p><br />
            <button className='bg-blue-600 h-12 w-[40rem] mx-2  relative bottom-2 hover:bg-blue-400'>Get Dropbox for work →</button>
        </div>
    </div>
    </>
  )
}

export default Why