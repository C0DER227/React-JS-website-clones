import React from 'react'
import { SocialIcon } from 'react-social-icons';
function Footer() {
  return (
    <>
    <div className='bg-gray-100 grid grid-cols-6 gap-6'>
    <h1 className='text-2xl text-red-500 font-bold'><em>Zomato</em></h1>
    <div className='grid'>
    <h2 className='font-semibold underline'>ABOUT ZOMATO</h2>    
    <a className='hover:text-red-400' href="#">Who We Are</a>
    <a className='hover:text-red-400' href="#">Blog</a>
    <a className='hover:text-red-400' href="#">Work With Us</a>
    <a className='hover:text-red-400' href="#">Investor Relations</a>
    <a className='hover:text-red-400' href="#">Report Fraud</a>
    <a className='hover:text-red-400' href="#">Contact Us</a>
    </div>
    <div className='grid'>
    <h2 className='font-semibold underline'>ZOMAVERSE</h2>
    <a className='hover:text-red-400' href="#">Zomato</a>
    <a className='hover:text-red-400' href="#">Blinkit</a>
    <a className='hover:text-red-400' href="#">Feeding India</a>
    <a className='hover:text-red-400' href="#">Hyperpure</a>
    <a className='hover:text-red-400' href="#">Zomoland</a>
    </div>
    <div className='grid'>
    <h2 className='font-semibold underline'>FOR RESTAURANTS</h2>
    <a className='hover:text-red-400' href="#">Partner With Us</a>
    <a className='hover:text-red-400' href="#">Apps For You</a>
    <h2 className='font-semibold underline'>FOR ENTERPRISES</h2>
    <a className='hover:text-red-400' href="#">Zomato For Work</a>
    </div>
    <div className='grid'>
    <h2 className='font-semibold underline'>Learn More</h2>
    <a className='hover:text-red-400' href="#">Privacy</a>
    <a className='hover:text-red-400' href="#">Security</a>
    <a className='hover:text-red-400' href="#">Terms</a>
    <a className='hover:text-red-400' href="#">Sitemap</a>
    </div>
    <div>
        <h2 className='font-semibold underline'>Social Links</h2>
        <div className='relative top-6'>
        <SocialIcon url="https://linkedin.com/in/jaketrent" />
        <SocialIcon url="https://jaketrent.com" network="tumblr" />
        <SocialIcon network="twitter" bgColor="#ff5a01" />
        </div>  
    </div>
    <div className='relative left-[66.5rem] bottom-10 cursor-pointer'>
    <img className='h-30 w-40' src="play-store.png" alt="play-store" />
     <img className='h-30 w-40' src="app-store.png" alt="app-store" />
    </div>
    </div>
    <hr />
    <div className='bg-yellow-50'><br />
        <h3>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.</h3>
    </div>
    </>
  )
}

export default Footer