import React from 'react'

//Icons import
import homeIcon from '../../assets/icons/home.svg'
import radioIcon from '../../assets/icons/radio.svg'
import playlistIcon from '../../assets/icons/playlist.svg'
import profileIcon from '../../assets/icons/profile.svg'
import logoutIcon from '../../assets/icons/logout.svg'
import videoIcon from '../../assets/icons/videos.svg'


const SideNav = () => {
  return (
    <div className='flex flex-col items-center fixed gap-[2rem] h-[calc(100vh_-_6rem)] top-[8rem] left-[0]'>
        <div className='flex flex-col justify-between bg-[#1a1e1f] p-4 h-[220px] rounded-[32px]'>
                <img className='text-[#efeee040] cursor-pointer' src={homeIcon} alt="home icon" />
                <img className='cursor-pointer' src={playlistIcon} alt="playlist icon" />
                <img className='cursor-pointer' src={radioIcon} alt="radio icon" />
                <img className='cursor-pointer' src={videoIcon} alt="video icon" />
        </div>

        <div className='flex flex-col justify-between bg-[#1a1e1f] p-4 rounded-[32px] h-[100px]'>
        <img className='cursor-pointer' src={profileIcon} alt="profile icon" />
        <img className='cursor-pointer' src={logoutIcon} alt="logout icon" />
                
        </div>
    </div>
  )
}

export default SideNav