  import { Splide, SplideSlide } from '@splidejs/react-splide';
  import '@splidejs/react-splide/css';
  import { useRef } from "react";

  import { ArrowLeft, ArrowRight, ChevronsRight } from 'lucide-react';
  import Smallicon from './Smallicon';

  const CustomSlider = () => {
    const splideRef = useRef(null);

    const boxes = [
      { button:"Digital Security", heading:"Data Guard Sentinal", text:"Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.", img:"/images/best_sol/service1.jpg" },
      { button:"Digital Shop", heading:"Woo commerce", text:"Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.", img:"/images/best_sol/service2.jpg" },
      { button:"CRM Solutions", heading:"CRM Solutions", text:"Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.", img:"/images/best_sol/service3.jpg" },
      { button:"Web Design", heading:"Web Design", text:"Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.", img:"/images/best_sol/service4.jpg" },
      { button:"Digital Security", heading:"Data Guard Sentinal", text:"Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.", img:"/images/best_sol/service1.jpg" },
      { button:"Digital Shop", heading:"Woo commerce", text:"Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.", img:"/images/best_sol/service2.jpg" },
      { button:"CRM Solutions", heading:"CRM Solutions", text:"Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.", img:"/images/best_sol/service3.jpg" },
      { button:"Web Design", heading:"Web Design", text:"Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.", img:"/images/best_sol/service4.jpg" },
    ];

    return (
      


  <div className='relative overflow-y-hidden pb-15   '>

    <div className='absolute bottom-0     '>

    <div className='absolute h-[461px] w-[461px] z-1 xl:h-[530px] 2xl:h-[590px] xl:w-[530px] 2xl:w-[590px] xl:translate-y-[50%]   bottom-0 translate-x-[-15%]  rotate-45 translate-y-[30%]'
    style={{background: "linear-gradient(90deg, #3C72FC 32.06%, #C700B1 158.17%)", boxShadow:"0px 28px 23px rgba(0, 0, 0, 0.5)" ,border:"1px solid #3C72FC",borderRadius:"10px"}}
  ></div>
    <div className='absolute h-[461px] w-[461px] xl:h-[530px] 2xl:h-[590px] xl:w-[530px] 2xl:w-[590px] xl:translate-y-[50%]  bg-transparent border bottom-0 translate-x-[-2%]  translate-y-[30%] rotate-45 '
    style={{border:"1px solid #3C72FC",borderRadius:"10px"}}></div>
    </div>
    
      
    <div className='flex flex-col gap-10'>

        <div className='flex flex-col sm:flex-row items-center w-[75%] m-auto justify-between'>
        <div>
          <div className='flex gap-2 items-center '><Smallicon/> <p className='text-[14px] text-[#2b4dff]'>OUR SERVICES</p></div>
          <h1 className='text-[25px] 2xl:text-[37px] text-[#0a165e]'>Best Solutions</h1>
        </div>
        <div className='flex gap-5 z-0'>
          <div className='rounded-full bg-white cursor-pointer h-[46px] w-[46px] flex items-center justify-center hover:bg-[#2b4dff] hover:text-white shadow-[0_4px_50px_rgba(0,0,0,0.06)]  transition-all duration-0.4s ease-in'
          onClick={() => splideRef.current.splide.go('<')}><ArrowLeft /></div>
          <div className='rounded-full bg-white cursor-pointer h-11.5 w-11.5 flex items-center justify-center hover:bg-[#2b4dff] hover:text-white shadow-[0_4px_50px_rgba(0,0,0,0.06)]  transition-all duration-0.4s ease-in'
          onClick={() => splideRef.current.splide.go('>')}><ArrowRight /></div>
        </div>
        </div>
        

        <div>

  <Splide
      ref={splideRef}
    options={{
      type: 'slide',
      drag: 'free',
      gap: '0.1rem',
      perPage: 2.5,
      arrows:false,
  breakpoints: {
    640: { perPage: 1 },
    705: { perPage: 1 },
    1001: { perPage: 2 },
    1280: { perPage: 3 },
    1536: { perPage: 4 },
    1920: { perPage: 5 },
  }

    }}
    className=" flex w-full h-[45%]   px-5 text-white z-5"
  >
    



    {boxes.map((box, i) => (
      <SplideSlide key={i}>
        <div className="flex flex-col  max-w-[325px] rounded-md gap-3 justify-center items-center h-full border m-auto px-3  pt-3 pb-0  w-full  grow"
        style={{
    backgroundImage: i % 2 === 0
      ? "linear-gradient(180deg, #3C72FC 0%, #C700B1 100%)"
      : "linear-gradient(180deg, #8903F7 0%, #FF7C54 100%)",
    borderRadius: '8px',
    padding: '1rem'
  }}>
              <div className="text-sm font-semibold border rounded   border-[rgba(255, 255, 255, 0.2)] px-2 py-1">{box.button}</div>
              <h1 className="text-lg font-bold">{box.heading}</h1>
              <p className="text-white text-center ">{box.text}</p>
              <button className="  mt-2 border w-full   rounded ">
                <div className='flex gap-1 items-center cursor-pointer py-2 justify-center w-full h-full text-white hover:bg-white hover:text-black transition-all duration-0.4s ease-in'>
                <p>Read More</p>
                <ChevronsRight />

                </div>
              </button>
              <img src={box.img} alt={box.heading} className="w-full h-40 object-cover rounded-md mt-2" />
            </div>
      </SplideSlide>
    ))}
  </Splide>


        </div>
    </div>
      </div>

    );
  };

  export default CustomSlider;









