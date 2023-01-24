import React from 'react'
import cardImage from '../../assets/Images/Rectangle 17.png'

import likeIcon from '../../assets/icons/like.svg'

const Charts = () => {
  return (
    <div className='flex flex-col w-[28%]'>
            <p className='text-white text-[24px] leading-[28.8px] font-bold'>Top Charts</p>

            <div className='bg-[#1a1e1f] flex justify-between items-center rounded-[20px] p-3 mt-3 cursor-pointer transition duration-150 ease-in-out  hover:scale-105'>
                <img src={cardImage} className='rounded-[10px] h-50px] w-[70px] object-cover object-center' alt="artiste" />
                
                <div className='text-white'>
                    <p className='text-[17px] font-medium'>Chart Title</p>
                    <p className='text-[12px]'>Chart Description</p>
                    <p className='text-[12px]'>Chart Duration</p>
                </div>

                <img src={likeIcon} alt="heart icon" />
            </div>

            <div className='bg-[#1a1e1f] flex justify-between items-center rounded-[20px] p-3 mt-3 cursor-pointer transition duration-150 ease-in-out  hover:scale-105'>
                <img src={cardImage} className='rounded-[10px] h-50px] w-[70px] object-cover object-center' alt="artiste" />
                
                <div className='text-white'>
                    <p className='text-[17px] font-medium'>Chart Title</p>
                    <p className='text-[12px]'>Chart Description</p>
                    <p className='text-[12px]'>Chart Duration</p>
                </div>

                <img src={likeIcon} alt="heart icon" />
            </div>

            <div className='bg-[#1a1e1f] flex justify-between items-center rounded-[20px] p-3 mt-3 cursor-pointer transition duration-150 ease-in-out  hover:scale-105'>
                <img src={cardImage} className='rounded-[10px] h-50px] w-[70px] object-cover object-center' alt="artiste" />
                
                <div className='text-white'>
                    <p className='text-[17px] font-medium'>Chart Title</p>
                    <p className='text-[12px]'>Chart Description</p>
                    <p className='text-[12px]'>Chart Duration</p>
                </div>

                <img src={likeIcon} alt="heart icon" />
            </div>

        </div>
  )
}

export default Charts