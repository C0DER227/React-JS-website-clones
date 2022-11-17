import React from 'react'

function Section1() {
  return (
    <>
    <div className='bg-white flex justify-start space-x-2 cursor-pointer '>
        <div className='bg-[#7DE5ED] w-[40rem] text-center'>
            <h1 className='font-bold '> <img className='h-5 relative left-60 top-6' src="section1iconpng.png" alt="" /> Dropbox Sign</h1><br />
            <h1 className='text-3xl'>Add eSignature to <br />your workflows</h1><br />
            <p className='text-xl'>Dropbox Sign is the simple and secure way to <br />send and request legally binding signature online.</p><br />
            <p className='dotted'>Learn more <span className='dotted'>Try for free</span></p><br />
            <img className='h-56 relative left-36' src="section1.1.png" alt="" />
        </div>
        <div className='bg-[#59C1BD] w-[40rem] text-center'>
            <h1 className='font-bold'> <img className='h-5 relative left-44 top-6' src="piechart.png" alt="" /> DocSend,a Dropbox company</h1><br />
            <h2 className='text-3xl'>send a link and <br />open doors</h2><br />
            <p className='text-xl'>Use DocSend to share , manage, and optimize <br />buisness-critical documents by simply sending a <br /> link.</p><br />
            <p className='dotted'>Learn more <span>Try for free</span></p><br />
            <img className='h-56 relative left-36' src="analytics.png" alt="" />
        </div>
    </div>
    </>
  )
}

export default Section1