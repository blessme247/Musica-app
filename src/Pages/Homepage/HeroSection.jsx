import React from 'react'

//Icons import
import heartIcon from '../../assets/icons/Heart.svg'
import peopleIcon from '../../assets/icons/people.svg'
import likesIcon from '../../assets/icons/Likes.svg'
import swineIcon from '../../assets/icons/Vector.svg'


import heroImage from '../../assets/Images/Cruel-Santino.png'
import Charts from './Charts'



const HeroSection = () => {
  return (
    <div className='flex justify-between mt-[2.28rem]'>

        {/* Banner */}
        <div className='bg-[#6093af] flex rounded-[40px] overflow-x-hidden items-center w-[62%] ml-20 relative'>
            <div className='w-[50%] px-8 '>

            <p className='text-white text-xs'>Curated playlist</p>

            <div className='my-[3rem]'>
                <p className='text-3xl text-white font-semibold'>R & B Hits</p>
                <p className='text-sm text-white mt-4 '>All mine, Lie again, Petty call me everyday, Out of time, No love, 
                Bad habit and so much more.
                </p>

            </div>

            <div className='flex justify-between w-[55%]'>
                <img src={peopleIcon} alt="people icon" />
                <img src={heartIcon} alt="heart icon" />
                <img src={likesIcon} alt="people icon" />

            </div>
        
            </div>

            <div className="w-[47%]" >
                <img className="h-[350px] object-cover relative z-[1]" src={heroImage} alt="music artiste" />
                <img className="h-[350px]  object-cover absolute top-0 right-[0.2rem] " src={swineIcon} alt="music artiste" />
            </div>


        </div>

        {/* Charts */}
        <Charts />
    </div>
  )
}

export default HeroSection