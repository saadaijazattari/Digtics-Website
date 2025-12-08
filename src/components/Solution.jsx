import React, { useRef } from 'react';
import Smallicon from './Smallicon';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Solution = () => {
  const splideRef = useRef(null);

  const sol_boxes = [
    {
      img: "/images/sol/sol1.jpg",
      button: "Mobile App",
      heading: "Product Design"
    },
    {
      img: "/images/sol/sol2.jpg",
      button: "Web App",
      heading: "Web Development"
    },
    {
      img: "/images/sol/sol3.jpg",
      button: "Technology",
      heading: "Digital SEO Marketing"
    },
  ];

  return (
    <div className='bg-[#f0f3ff]'>

    <div className="w-[80%] m-auto py-[clamp(60px,6vw,120px)] bg-[#f0f3ff]">

      {/* Header + Buttons */}
      <div className="flex w-full justify-center sm:justify-between mb-5">
        
        {/* Left Arrow */}
        <div
          className="h-[46px] w-[46px] rounded-full text-[#2b4dff] bg-white hover:bg-[#2b4dff] hover:text-white shadow-[0_4px_50px_rgba(0,0,0,0.06)] transition-all duration-300 ease-in hidden cursor-pointer sm:flex items-center justify-center"
          onClick={() => splideRef.current.splide.go('<')}
        >
          <ArrowLeft />
        </div>

        {/* Center Title */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <Smallicon />
            <p className="text-[13px] text-[#2b4dff]">Latest Case Study</p>
          </div>
          <h1 className="text-[25px] sm:text-[29px] mb-3 lg:text-[33px] 2xl:text-[39px] text-center text-[#0a165e]">
            We Deliverd Best Solution
          </h1>
        </div>

        {/* Right Arrow */}
        <div
          className="h-[46px] w-[46px] rounded-full text-[#2b4dff] bg-white hover:bg-[#2b4dff] hover:text-white shadow-[0_4px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hidden ease-in cursor-pointer sm:flex items-center justify-center"
          onClick={() => splideRef.current.splide.go('>')}
        >
          <ArrowRight />
        </div>
      </div>
      


      <Splide
  ref={splideRef}
  options={{
    type: 'loop',
    perPage: 3,     
    perMove: 1,
    gap: '1rem',
    arrows: false,
    pagination: false,
    drag: true,
    speed: 600,
    autoplay: true,
interval: 2500,   
pauseOnHover: false,

    breakpoints: {
  1280: { perPage: 3 },
  1024: { perPage: 2 },
  768: { 
    perPage: 1,      
    padding: { 
      left: '30px',   
      right: '30px'   
    }
  },
  480: { 
    perPage: 1,
    padding: { left: '10px', right: '10px' }
  },
},
  }}
  className=" py-3 flex items-center"
>
  {sol_boxes.map((sol_box, i) => (
    <SplideSlide key={i} className="w-screen min-w-[379px] bg-white relative p-4 flex group overflow-hidden" style={{
    clipPath:
      "polygon( 0% 4.098%, 0% 4.098%, 0.051% 3.434%, 0.197% 2.803%, 0.432% 2.215%, 0.746% 1.678%, 1.133% 1.2%, 1.584% 0.791%, 2.091% 0.457%, 2.646% 0.209%, 3.241% 0.054%, 3.868% 0%, 96.132% 0%, 96.132% 0%, 96.759% 0.054%, 97.354% 0.209%, 97.909% 0.457%, 98.416% 0.791%, 98.867% 1.2%, 99.254% 1.678%, 99.568% 2.215%, 99.803% 2.803%, 99.949% 3.434%, 100% 4.098%, 100% 79.452%, 100% 79.452%, 99.949% 80.116%, 99.803% 80.747%, 99.568% 81.335%, 99.254% 81.872%, 98.867% 82.35%, 98.416% 82.759%, 97.909% 83.093%, 97.354% 83.341%, 96.759% 83.496%, 96.132% 83.55%, 72.534% 83.55%, 72.534% 83.55%, 71.906% 83.604%, 71.311% 83.759%, 70.756% 84.007%, 70.249% 84.341%, 69.798% 84.75%, 69.412% 85.228%, 69.097% 85.765%, 68.863% 86.353%, 68.716% 86.984%, 68.665% 87.648%, 68.665% 95.902%, 68.665% 95.902%, 68.615% 96.566%, 68.468% 97.197%, 68.234% 97.785%, 67.919% 98.322%, 67.532% 98.8%, 67.082% 99.209%, 66.575% 99.543%, 66.02% 99.791%, 65.424% 99.946%, 64.797% 100%, 3.868% 100%, 3.868% 100%, 3.241% 99.946%, 2.646% 99.791%, 2.091% 99.543%, 1.584% 99.209%, 1.133% 98.8%, 0.746% 98.322%, 0.432% 97.785%, 0.197% 97.197%, 0.051% 96.566%, 0% 95.902%, 0% 4.098%)",width:"100%"
  }}>
      <div className="w-screen  rounded-lg  overflow-hidden ">
        <img
          src={sol_box.img}
          alt="image"
          className="w-screen transition-all  duration-300 ease-in h-auto sm:h-[279px] object-cover group-hover:scale-110"
        />

        <div className="p-4">
          <button className="text-sm bg-[#F5F6F7] text-[#2b4dff] px-3 py-1 rounded-full">
            {sol_box.button}
          </button>

          <h1 className="mt-2 text-[clamp(20px,3vw,23px)] font-semibold text-[#0a165e]">
            {sol_box.heading}
          </h1>
        </div>
      </div>

    </SplideSlide>
  ))}
</Splide>



    </div>
    </div>
  );
};

export default Solution;
