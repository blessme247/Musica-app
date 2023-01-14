import React from 'react'
import { Navbar } from '../../Components/NavBar Component/Navbar'
import SideNav from '../../Components/SideNav Component/SideNav'
import HeroSection from './HeroSection'
import NewReleases from './NewReleases'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <div className='flex justify-between max-w-[1240px] items-center px-4 mx-auto '>

        <SideNav />
        <HeroSection />
     
        </div>
        <NewReleases />
    </div>
  )
}

export default Homepage