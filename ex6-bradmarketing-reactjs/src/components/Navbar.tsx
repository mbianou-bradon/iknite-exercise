import React from 'react'
import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <nav className="App-header">
      <div className='flex items-center justify-between text-GREEN-500 p-6'>
          <div className=' sm:hidden'>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H17M1 7H17M1 13H17" stroke="#3F6745" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
          <div className="nav__brand">
            <img src={logo} alt="" className='w-[61px] sm:w-[165px] h-[18px] sm:h-[51px]'/>
          </div>
          
          <div className="nav__bar__menu hidden sm:block">
            <ul className='flex items-center justify-between gap-10 [&>*:hover]:underline'>
              <li><a href="">About</a></li>
              <li><a href="">Product</a></li>
              <li><a href="">Service</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>

          <div className="nav__bar__sign__up">
            <ul className='flex items-center gap-10'>
              <li><a href="">Sign Up</a></li>
              <li><a href="" className='border px-4 py-2 hover:bg-GREEN-500 hover:text-white rounded'>Login</a></li>
            </ul>
          </div> 
       </div>
    </nav>
  )
}
