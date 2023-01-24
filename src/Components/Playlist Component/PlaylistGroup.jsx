import React from 'react'
import { Link} from "react-router-dom";
import playlistImage from '../../assets/Images/Rectangle 14.png'
import playIcon from '../../assets/icons/play.svg'
import collectionIcon from '../../assets/icons/collection.svg'
import redHeartIcon from '../../assets/icons/redHeart.svg'
import PlaylistSection from './PlaylistSection';


const PlaylistGroup = () => {
  return (
        <div className=' w-[100%] ml-[5.5rem] flex flex-col mt-[2.28rem]'> 
        <div className='flex gap-[2rem]  items-center '>
            <div className='w-[284px] h-[289px]'>
                <img src={playlistImage} className='rounded-[35.17px] w-[100%] h-[100%]' alt="playlist cover art" />
            </div>
            <div className='flex flex-col ml-[2rem] mt-[3rem]'>
                <p className='text-[35px] text-[#a4c7c6] font-[700]'>Playlist Title</p>
                <p className='text-[#efeee0] text-[14px] leading-[16.8px] mt-[0.8rem]'>Playlist description</p>
                <p className='text-[#efeee0] text-[14px] leading-[16.8px] mt-[0.8rem]'> 64 songs ~ 16hrs+</p>
                <div className='flex justify-between items-center gap-[10px] text-[12px] leading-[14.4px] mt-[4rem] text-[#efeee0]'>
                <Link className='flex items-center rounded-[32px] bg-[#ffffff12] backdrop-blur-[5px] p-[12px] text-[1rem] h-[45px] transition duration-150 ease-in-out  hover:scale-105 hover:text-[#a4c7c6]'>
                    <img src={playIcon} alt="play icon" /> <span className='pl-[0.5rem]'>Play All</span>
                    </Link>
                <Link className='flex items-center rounded-[32px] bg-[#ffffff12] backdrop-blur-[5px] p-[12px] text-[1rem] h-[45px] transition duration-150 ease-in-out hover:scale-105 hover:text-[#a4c7c6]'>
                <img src={collectionIcon} alt="music collection icon" /> <span className='pl-[0.5rem]'>Add to collection</span>
                    </Link>
                <Link className='flex items-center justify-center rounded-[50%] bg-[#ffffff12] backdrop-blur-[5px] p-[12px] text-[1rem] h-[45px] w-[45px] transition duration-150 ease-in-out  hover:scale-105'>
                    <img src={redHeartIcon} alt="heart icon" />
                    
                    </Link>
                </div>
            </div>
        </div>

        <PlaylistSection />
        </div>
       
  )
}

export default PlaylistGroup