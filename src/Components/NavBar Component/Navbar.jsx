import React from 'react'
import logo from '../../assets/icons/logo.svg'
// import searchIcon from '../../assets/icons/search.svg'
import {FiSearch} from "react-icons/fi"

const searchIcon = (
  <FiSearch
    className='text-[#e5e7eb] w-[5%]'
    size="22px"
    color="grey"
  />
);

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center max-w-[1240px] px-4 mx-auto h-24'>
        <div className='w-[5%]'>

        <img src={logo} alt="logo"  />
        </div>
      <div className='flex justify-between items-center w-[95%]'>
        {searchIcon}
        <input className='w-[95%] px-2 py-2 rounded-md bg-transparent outline-none  focus:outline-[#609eaf] text-white'  type="text" placeholder='Search Artists' />
      </div>
    </div>
  )
}
