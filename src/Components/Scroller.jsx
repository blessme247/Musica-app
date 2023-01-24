import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";





const Scroller = ({children}) => {

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation,  Scrollbar, A11y, Autoplay, Mousewheel]}
        spaceBetween={20}
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
        // className=' w-[100%] mt-[1.5rem] flex justify-between items-center h-fit border border-red-500 border-solid'
        
      >
            {/* <div className='flex justify-between items-center h-fit'>  */}
              <SwiperSlide >
                {children}
              </SwiperSlide> 
              {/* </div>  */}
      </Swiper>
    </>
  );
};

export default Scroller;
