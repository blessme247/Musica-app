import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { loadPlaylist } from '../../Helper/Redux/Playlist/playlist.action';
import PlaylistServices from '../../Helper/Redux/Playlist/playlist.service';
import { Navbar } from '../NavBar Component/Navbar'
import SideNav from '../SideNav Component/SideNav'
import PlaylistGroup from './PlaylistGroup';


const Playlist = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    PlaylistServices.fetchPlaylists().then((response)=>{
      dispatch(loadPlaylist(response))
    })
  },[])
  return (
    <div className='bg-playlist1 bg-no-repeat bg-cover bg-center backdrop-blur-[5px]'>
        <Navbar />
        <div className='flex'>
        <SideNav />
        <PlaylistGroup />
        </div>
    </div>
  )
}

export default Playlist