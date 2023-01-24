import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Navbar } from '../../Components/NavBar Component/Navbar'
import SideNav from '../../Components/SideNav Component/SideNav'
import { loadPopular } from '../../Helper/Redux/Popular/popular.action';
import PopularServices from '../../Helper/Redux/Popular/popular.service';
import { loadNewReleases } from '../../Helper/Redux/Releases/releases.action';
import NewReleaseServices from '../../Helper/Redux/Releases/releases.service'
import HeroSection from './HeroSection'
import NewReleases from './NewReleases'
import PopularMusic from './PopularMusic';

const Homepage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    NewReleaseServices.fetchNewReleases().then((response)=>{
      dispatch(loadNewReleases(response))
    })

    PopularServices.fetchPopular().then((response)=>{
      dispatch(loadPopular(response))
    })
  }, [dispatch])
  
  return (
    <div>
        <Navbar />
        <div className='flex justify-between items-center '>

        <SideNav />
        <HeroSection />
     
        </div>
        <NewReleases />
        <PopularMusic />
    </div>
  )
}

export default Homepage