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
    <div className='flex flex-col items-center justify-between '>
        <div className='flex flex-col justify-between bg-[#1a1e1f] p-4 h-[220px] rounded-[32px] fixed top-[8rem] left-[24px]'>
                <img className='text-[#efeee040]' src={homeIcon} alt="home icon" />
                <img src={playlistIcon} alt="playlist icon" />
                <img src={radioIcon} alt="radio icon" />
                <img src={videoIcon} alt="video icon" />
        </div>

        <div className='flex flex-col justify-between bg-[#1a1e1f] p-4 rounded-[32px] h-[100px] fixed top-[24rem] left-[24px]'>
        <img src={profileIcon} alt="profile icon" />
        <img src={logoutIcon} alt="logout icon" />
                
        </div>
    </div>
  )
}

export default SideNav