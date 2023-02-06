import React from 'react'
import { Link } from 'react-router-dom'

const AlbumCard = ({coverImage, title, name, link}) => {
  return (
    <div className="text-[#efeee0] py-[1rem] flex flex-col w-[100%] cursor-pointer transition duration-150 ease-in-out  hover:scale-105">
        <Link to={link}>
        <img className='rounded-[25px] h-[153px] object-fit object-cover mb-[0.5rem]' src={coverImage} alt="album" />
        <p className="">{title}</p>
        </Link>
        <p className="">{name}</p>
    </div>
  )
}

export default AlbumCard