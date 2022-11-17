import React from 'react'

function Main() {
  return (
    <>
    <div>
        <h1 className='text-6xl mx-12 py-12 text-white text-center'>Join over 700 million registered <br /> users who trust Dropbox</h1>
        <p className='text-xl px-2 text-white text-center'>Easy to use, reliable, private, and secure. It’s no wonder Dropbox is the choice for storing and sharing <br /> your most important files.</p><br />
        <button className='bg-blue-700 h-20 w-40 absolute left-[34.3rem] hover:bg-blue-400'>Start for free → </button><br /><br /><br /><br />
        <img className='h-96  relative left-80' src="main1.jpg" alt="" />
        <p className='text-3xl text-white text-center py-4'>See what sets Dropbox apart</p>
    </div>
    <div className='flex justify-evenly'>
        <div>
        <img src="emoji smile.svg" alt="" />
        <h1 className='font-semibold text-white'>Your files, not ours</h1>
        <p className='text-xl text-white'>With Dropbox, your files belong <br /> to you, not us, so you can be <br /> sure we’re not reselling your <br /> data.</p>
       </div>

    <div>
        <img src="cloud done.svg" alt="" />
        <h1 className='font-semibold text-white'>All your files in one place</h1>
        <p className='text-xl text-white'>Store computer backups, photo <br /> libraries, thousands of <br /> documents—all your files, in the <br /> same place.</p>
    </div>
    <div>
        <img src="twinkle.svg" alt="" />
        <h1 className='font-semibold text-white'>One-of-a-kind functionality</h1>
        <p className='text-xl text-white'>Store files as large as 2 TB <br /> each, sync at light speed, and <br /> allow anyone to preview nearly <br /> 200 file types.</p>
    </div>
    <div>
        <img src="shield.svg" alt="" />
        <h1 className='font-semibold text-white'>Ease of use and security</h1>
        <p className='text-xl text-white'>2/3 of surveyed users say <br /> Dropbox keeps their files more <br /> secure and we’re a leader in <br /> ease of use.</p>
    </div>
    </div><br />
    </>
  )
}

export default Main