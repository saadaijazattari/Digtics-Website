import React from 'react'
import Smallicon from './Smallicon'
import { MoveUpRight } from 'lucide-react'

const Trends = () => {
  const trends_boxes=[
    {
      text:"Website",
      img:"/images/trends/globe.png"
    },
    {
      text:"Android",
      img:"/images/trends/robot.png"
    },
    {
      text:"IOS",
      img:"/images/trends/apple.png"
    },
    {
      text:"Watch",
      img:"/images/trends/simplicity.png"
    },
    {
      text:"TV",
      img:"/images/trends/web_design.png"
    },
    {
      text:"IOT",
      img:"/images/trends/live_chat.png"
    },
  ]
  return (




  <div className='py-[60px]  sm:py-20 lg:py-[95px] 2xl:py-[117px] p-[15px] bg-[#0f0d1d] flex flex-col '>
<div className='flex flex-col gap-20 max-w-[1179px] w-full h-auto  m-auto'>
  <div className='flex w-full flex-col gap-8 sm:flex-row justify-between items-center'>
    <div>
        <div className='flex gap-2 items-center mb-4'><Smallicon/> <p className='text-[13px] md:text-[14px ] 2xl:text-[15px] text-[#2b4dff]'>OUR OFFERING</p></div>
        <h1 className='text-[25px] sm:text-[29px] lg:text-[33px] 2xl:text-[39px] text-white'>Enhance and Pioneer Using Technology Trends</h1>  

    </div>
    <div className='flex'>
                <button className='h-[45px] w-[107px] md:h-12 md:w-[123px]  2xl:h-[51px] 2xl:w-[135px] text-white  flex items-center justify-center rounded-full text-[13px] lg:text-[14px] 2xl:text-[15px] bg-[linear-gradient(90deg,#2B4DFF_0%,#C700B1_100%)]'>Know More</button>
                <div className='h-[45px] text-white w-[45px]  flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#2B4DFF_0%,#C700B1_100%)]   md:h-12 md:w-12  2xl:h-[51px] 2xl:w-[51px]'>
                  <MoveUpRight size={18}/>
                </div>
              </div>
  </div>
      <div className='grid sm:grid-cols-3 2xl:grid-cols-6 justify-between gap-2 sm:gap-4 grid-cols-2 md:grid-cols-4'>
       {trends_boxes.map((box)=>{
         return(
          <div className='w-full  max-w-[220px] border mb-6   h-[75px] lg:h-20 xl:h-[90px] 2xl:h-[110px] rounded-2xl relative flex items-end pb-4 justify-center group lg:pb-5 2xl:pb-6' style={{borderColor:"rgba(255, 255, 255, 0.3)"}} id='trend_box'>
            <div
  className="absolute top-0 h-[55px]  w-[55px]  flex items-center justify-center rounded-full 
             transition-all duration-300 "id='trend_img_box'

>
  <img
    src={box.img}
    alt="images"
    className="w-[30px] h-[30px]  group-hover:invert group-hover:brightness-200;
"id='trend_img'
          
  />
</div>

            <p className='text-white xl:text-[17px]'>{box.text}</p>
          </div>
        )
      })}
      </div>
      </div>
  </div>


  )
}

export default Trends
