import React from 'react'
import logo from '../images/logo.png'
import backImg from '../images/backImg.jpg'
import {ImSearch} from 'react-icons/im'


function Header() {
  return (
    <>
    <header>
        <nav>
            <ul>
            <img className='logo' src={logo} alt="" />
            <li><a href="/">TV shows</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Recently Added</a></li>
            <li><a href="#">My list</a></li>
            <ImSearch />
            </ul><br />
            <img className='slider' src={backImg} alt="" />
        </nav>
    </header>
    </>
  )
}

export default Header