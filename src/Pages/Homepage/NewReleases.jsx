import React from 'react'
import NewReleaseSlides from './NewReleaseSlides'



const NewReleases = () => {
  return (
    <div className=' max-w-[1140px] items-center px-4 mx-auto ml-[6rem] mt-[3rem]'>
        <p className=' text-white font-bold text-[24px]'>New Releases</p>

        <NewReleaseSlides />

    </div>
  )
}

export default NewReleases