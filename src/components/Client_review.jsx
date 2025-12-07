import React, { useState } from 'react';
import Smallicon from './Smallicon';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Client_review = () => {
  const [splideInstance, setSplideInstance] = useState(null);

  const reviews = [
    {
      name: "Kathryn Murphy",
      position: "Medical Assistant",
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo.",
      img: "/images/client_review/user.jpg",
    },
    {
      name: "Kathryn Murphy",
      position: "Medical Assistant",
      text: "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo.",
      img: "/images/client_review/user.jpg",
    },

  ];

  return (
    <div className="relative w-full max-w-full mx-auto py-[clamp(60px,6vw,120px)] "
      style={{ backgroundImage: "url('/images/client_review/review_page_bg.png')", backgroundSize: "cover" }}>

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full sm:w-[60%] md:w-[43%] h-[30%] sm:h-[50%] lg:h-full">
  <img
    src="/images/client_review/bg_reviews.jpg"
    alt="background"
    className="w-full h-full object-cover"
    style={{ clipPath: "polygon(0% 0%, 77.582% 0%, 100% 22.748%, 100% 100%, 0% 100%, 0% 0%)" }}
  />
</div>


      <div className="w-full 2xl:w-[65%] xl:h-[85%] h-auto m-auto z-10 relative flex flex-col md:flex-row gap-2">

        {/* Left Form Section */}
        <div className="md:w-[50%]  w-full px-[clamp(12px,1vw,29px)]">
          <div className='p-[clamp(29px,2vw,58.9px)] max-w-[545.39px] m-auto md:m-0 md:float-end flex flex-col gap-4 rounded-[20px]' style={{ background: "linear-gradient(rgb(60, 114, 252) 0%, rgb(199, 0, 177) 100%)" }}>
            <div className="flex gap-2 items-center">
              <Smallicon />
              <p className="text-white" style={{ fontSize: "clamp(13px,1vw,15.708px)" }}>TALK TO US</p>
            </div>
            <h1 className="text-white" style={{ fontSize: "clamp(24px,3vw,29px)" }}>How May We Help You!</h1>
            <form className="w-full sm:grid gap-7 flex flex-col sm:grid-cols-2">
              <div className="flex flex-col flex-1 gap-2 text-[clamp(13px,2vw,15.708px)]">
                <label className='text-white'>Your Name*</label>
                <input className="bg-white outline-none px-3.5 h-[53px] rounded-md" type="text" placeholder="Robot fox" />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label className='text-white'>Your Email*</label>
                <input className="bg-white outline-none px-3.5 h-[53px] rounded-md" type="email" placeholder="info@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className='text-white'>Your Subject*</label>
                <input className="bg-white outline-none px-3.5 h-[53px] rounded-md" type="text" placeholder="Subject" />
              </div>
              <div className="flex flex-col gap-2">
                <label className='text-white'>Your Phone*</label>
                <input className="bg-white outline-none px-3.5 h-[53px] rounded-md" type="number" placeholder="+1253 457 7840" />
              </div>
              <div className="flex flex-col gap-2 col-span-2">
                <label className='text-white'>Message</label>
                <textarea className="bg-white h-[108px] outline-none px-3.5 py-3.5 rounded-md" placeholder="Write Message"></textarea>
              </div>
              <button className='bg-black transition-all duration-300 ease-in cursor-pointer rounded-md hover:bg-[#2b4dff] col-span-2 h-[clamp(46px,2vw,54.97px)] text-white flex items-center justify-center'>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Reviews Section */}
        <div className="md:w-[50%] mt-5 md:mt-0 w-full relative  flex gap-10 flex-col px-[clamp(12px,3vw,29px)]">

          {/* Header */}
          <div className='flex flex-col gap-3'>
            <div className="flex items-center gap-2"><Smallicon /><p className='text-[#2b4dff] text-[clamp(13px,2vw,15.708px)]'>Clients Review</p></div>
            <h1 className='text-[clamp(25px,3vw,37.338px)]'>What They Say About Our</h1>
            <p className='text-[clamp(13px,2vw,14.9352px)] text-[#212519]'>It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.</p>
          </div>

          {/* Splide Slider */}
          <Splide
            options={{
              type: "loop",
              perPage: 1,      
              perMove: 1,    
              arrows: false,
              pagination: false,
              autoplay: true,
              interval: 2000,  
              speed: 600,
              pauseOnHover: false,
              drag: true,
            }}
            onMounted={(splide) => setSplideInstance(splide)}
            className="overflow-hidden rounded-lg"
          >
            {reviews.map((review, i) => (
              <SplideSlide key={i} className="flex flex-col gap-3  justify-center p-[clamp(20px,3vw,39.27px)] bg-white"style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <div className='flex items-center justify-between '>
                  <div className='flex gap-5 items-center'>
                  <div><img src={review.img} alt="image" className='aspect-square h-[clamp(60px,6vw,98.17px)] rounded-full' /></div>
                  <div className='flex items-start flex-col gap-[clamp(1px,1vw,3px)]'>
                    <h1 className='text-[clamp(16px,2vw,19px)]'>{review.name}</h1>
                    <p className='text-[clamp(13px,2vw,15px)] text-[#585858]'>{review.position}</p>
                    <div className='flex mt-0.5'>
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className='aspect-square h-[clamp(13px,2vw,15.7px)]' fill='#2b4dff' color='transparent' />
                      ))}
                    </div>
                  </div>

                  </div>
                  <div><img src="/images/client_review/quotation_icon.svg" alt="" /></div>
                </div>
                <div className='text-[#726b7d] text-[13px]'>{review.text}</div>
              </SplideSlide>
            ))}
          </Splide>

          {/* Buttons */}
          <div className='flex w-full gap-4 items-center justify-center mt-5'>
            <div className='h-px bg-[#2b4dff] w-full'></div>
            <div className='flex gap-3'>
              <div
                className='aspect-square w-[clamp(46px,4vw,53.67px)] flex items-center bg-white justify-center outline outline-[#2b4dff] rounded-full text-[#2b4dff] transition-all duration-300 ease-in hover:text-white hover:bg-[#2b4dff] cursor-pointer'
                onClick={() => splideInstance && splideInstance.go('<')}
              ><ArrowLeft /></div>
              <div
                className='aspect-square w-[clamp(46px,4vw,53.67px)] flex items-center bg-white justify-center outline outline-[#2b4dff] rounded-full text-[#2b4dff] transition-all duration-300 ease-in hover:text-white hover:bg-[#2b4dff] cursor-pointer'
                onClick={() => splideInstance && splideInstance.go('>')}
              ><ArrowRight /></div>
            </div>
            <div className='h-px bg-[#2b4dff] w-full'></div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Client_review;
