import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

//Image imports
import cardImage from '../../assets/Images/Rectangle 19.png'




const NewReleaseSlides = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        loop={true}
       

        autoplay={true}
        breakpoints={{
          // when window width is >= 350px
          990: {
            // width: 250,
            slidesPerView: 6,
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

          <SwiperSlide className='text-white flex flex-col w-[20%] '>
                <img className='rounded-[25px] h-[153px] object-fit object-cover mb-[0.5rem]' src={cardImage} alt="cover image" />
                <p>Artist Name</p>
                <p>Song Title</p>

          </SwiperSlide>

          <SwiperSlide className='text-white flex flex-col w-[20%] '>
                <img className='rounded-[25px] h-[153px] objec-fit object-cover mb-[0.5rem]' src={cardImage} alt="cover image" />
                <p>Artist Name</p>
                <p>Song Title</p>

          </SwiperSlide>

          <SwiperSlide className='text-white flex flex-col w-[20%] '>
                <img className='rounded-[25px] h-[153px] objec-fit object-cover mb-[0.5rem]' src={cardImage} alt="cover image" />
                <p>Artist Name</p>
                <p>Song Title</p>

          </SwiperSlide>

          <SwiperSlide className='text-white flex flex-col w-[20%] '>
                <img className='rounded-[25px] h-[153px]  objec-fit object-cover mb-[0.5rem]' src={cardImage} alt="cover image" />
                <p>Artist Name</p>
                <p>Song Title</p>

          </SwiperSlide>

          <SwiperSlide className='text-white flex flex-col w-[20%] '>
                <img className='rounded-[25px] h-[153px] objec-fit object-cover mb-[0.5rem]' src={cardImage} alt="cover image" />
                <p>Artist Name</p>
                <p>Song Title</p>

          </SwiperSlide>

          <SwiperSlide className='text-white flex flex-col w-[20%] '>
                <img className='rounded-[25px] h-[153px]  objec-fit object-cover mb-[0.5rem]' src={cardImage} alt="cover image" />
                <p>Artist Name</p>
                <p>Song Title</p>

          </SwiperSlide>

          <SwiperSlide className='text-white flex flex-col w-[20%] '>
                <img className='rounded-[25px] h-[153px]  objec-fit object-cover mb-[0.5rem]' src={cardImage} alt="cover image" />
                <p>Artist Name</p>
                <p>Song Title</p>

          </SwiperSlide>


        </div>

        {/* </div> */}
      </Swiper>
    </>
  );
};

export default NewReleaseSlides;
