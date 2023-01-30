import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import { useSelector } from "react-redux";




const PopularScroller = () => {

  const {popularSongs} = useSelector((state) => state.popularStore);

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation,  Scrollbar, A11y, Autoplay, Mousewheel]}
        spaceBetween={25}
        loop={false}
       
        mousewheel={{forceToAxis: true}} //responsible for enabling swiper movement on mousewheel
        breakpoints={{
          // when window width is >= 350px
          990: {
            // width: 250,
            slidesPerView: 6.5,
          },
          700: {
            // width: 250,
            slidesPerView: 2,
          },
          
          
        }}

        pagination={{ clickable: true }}
        className=' w-[100%] mt-[1.5rem]'
        
      >
        <div className='flex justify-between items-center h-fit '>

          {popularSongs.length ? popularSongs.map((popularSong)=>{
              const {artist, title, cover_medium, id} = popularSong || {};
              
              return( 
              <SwiperSlide key={id} className='text-[#efeee0] flex flex-col w-[20%] py-[1rem] cursor-pointer transition duration-150 ease-in-out hover:scale-105'>
                <img className='rounded-[25px] h-[153px] object-fit object-cover mb-[0.5rem] ' src={cover_medium} alt="music art" />
                <p className="text-[#efeee0]">{title}</p>
                <p className="text-[#efeee0]">{artist?.name}</p>

          </SwiperSlide> )
          }) : <p className="text-[#efeee0]">No Popular Songs yet</p>}




        </div>

        {/* </div> */}
      </Swiper>
    </>
  );
};

export default PopularScroller;
