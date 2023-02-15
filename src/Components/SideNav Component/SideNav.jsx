import React from 'react'

//Icons import
import homeIcon from '../../assets/icons/home.svg'
import radioIcon from '../../assets/icons/radio.svg'
import playlistIcon from '../../assets/icons/playlist.svg'
import profileIcon from '../../assets/icons/profile.svg'
import logoutIcon from '../../assets/icons/logout.svg'
import videoIcon from '../../assets/icons/videos.svg'
import { Link } from 'react-router-dom'


const SideNav = () => {
  return (
    <div className='flex flex-col items-center fixed gap-[2rem] h-[calc(100vh_-_6rem)] top-[8rem] left-[1.5rem]'>
        <div className='flex flex-col justify-between bg-[#1a1e1f] py-5 px-3 h-[225px] rounded-[32px]'>
               <Link to="/"> <img className='text-[#efeee040] cursor-pointer' src={homeIcon} alt="home icon" /> </Link> 
                <img className='cursor-pointer' src={playlistIcon} alt="playlist icon" /> 
                <img className='cursor-pointer' src={radioIcon} alt="radio icon" />
                <img className='cursor-pointer' src={videoIcon} alt="video icon" />
        </div>

        <div className='flex flex-col justify-between bg-[#1a1e1f] py-5 px-3 rounded-[32px] h-[105px]'>
        <img className='cursor-pointer' src={profileIcon} alt="profile icon" />
        <img className='cursor-pointer' src={logoutIcon} alt="logout icon" />
                
        </div>
    </div>
  )
}

export default SideNav