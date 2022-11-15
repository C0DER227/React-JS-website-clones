import React from 'react'
import { SocialIcon } from 'react-social-icons';
function Footer() {
  return (
    <>
    <div className='bg-gray-100 grid grid-cols-6 gap-6'>
    <h1 className='text-2xl text-red-500 font-bold'><em>Zomato</em></h1>
    <div>
    <h2>ABOUT ZOMATO</h2>
    <a href="#">Who We Are</a>
    <a href="#">Blog</a>
    <a href="#">Work With Us</a>
    <a href="#">Investor Relations</a>
    <a href="#">Report Fraud</a>
    <a href="#">Contact Us</a>
    </div>
    <div>
    <h2>ZOMAVERSE</h2>
    <a href="#">Zomato</a>
    <a href="#">Blinkit</a>
    <a href="#">Feeding India</a>
    <a href="#">Hyperpure</a>
    <a href="#">Zomoland</a>
    </div>
    <div>
    <h2>FOR RESTAURANTS</h2>
    <a href="#">Partner With Us</a>
    <a href="#">Apps For You</a>
    <h2>FOR ENTERPRISES</h2>
    <a href="#">Zomato For Work</a>
    </div>
    <div>
    <h2>Learn More</h2>
    <a href="#">Privacy</a>
    <a href="#">Security</a>
    <a href="#">Terms</a>
    <a href="#">Sitemap</a>
    </div>
    <div>
        <h2>Social Links</h2>
        <SocialIcon url="https://linkedin.com/in/jaketrent" />
        <SocialIcon url="https://jaketrent.com" network="tumblr" />
        <SocialIcon network="twitter" bgColor="#ff5a01" />  
    </div>
    <div className='relative left-[1075px] bottom-12 cursor-pointer'>
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