import React from 'react'


function Footer() {
  return (
    <>
    <div className='mx-4 py-4 grid grid-cols-5 gap-4 hover:text-gray-300'>
        <div>
            <h1 className='text-white text-xl'>Dropbox</h1><br />
            <div className='grid' >
            <a className='text-white hover:underline cursor-pointer' href="#">Desktop app</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Mobile app</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Integrations</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Features</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Solutions</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Do more than store</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Security</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Advance access</a>
            </div>
        </div>
        <div>
            <h1 className='text-white text-xl'>Products</h1><br />
            <div className='grid'>
            <a className='text-white hover:underline cursor-pointer' href="#">Plus</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Professional</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Business</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Enterprise</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Dropbox Sign</a>
            <a className='text-white hover:underline cursor-pointer' href="#">DocSend</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Plans</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Product updates</a>
            </div>
        </div>
        <div>
            <h1 className='text-white text-xl'>Support</h1><br />
            <div className='grid'>
            <a className='text-white hover:underline cursor-pointer' href="#">Help center</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Contact us</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Privacy & terms</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Cookie policy</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Cookies & CCPA prefrences</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Sitemap</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Learning resources</a>
            </div>
        </div>
        <div>
            <h1 className='text-white text-xl'>Community</h1><br />
            <div className='grid'>
            <a className='text-white hover:underline cursor-pointer' href="#">Blog</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Developers</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Community forums</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Referrals</a>
            </div>
        </div>
        <div>
            <h1 className='text-white text-xl'>Company</h1><br />
            <div className='grid'>
            <a  className='text-white hover:underline cursor-pointer'href="#">About us</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Jobs</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Investor relations</a>
            <a className='text-white hover:underline cursor-pointer' href="#">ESG</a>
            <a className='text-white hover:underline cursor-pointer' href="#">Partners</a>
            </div>
        </div>
    </div>
    <hr className='text-white' /> <br />
    <div>
    <h1>🌐<span className='text-white hover:underline'>English(United States)→</span></h1>
    </div>
    <div>
        <h1 className='text-white text-center'>Copyrights reserved@ <a className='underline' href="https://www.dropbox.com/"><em>dropbox</em></a></h1>
    </div>
    </>
  )
}

export default Footer