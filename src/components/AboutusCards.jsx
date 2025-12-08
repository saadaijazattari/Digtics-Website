import React from 'react'
import Smallicon from './Smallicon';
import { MoveUpRight } from 'lucide-react';
import { motion } from "motion/react"

const AboutusCards = () => {
  const container={
    hidden:{},
    show:{
      transition:{staggerChildren:0.25}
    }
  }
  const item={
    hidden:{opacity:0,y:100},
    show:{opacity:1,y:0}
  }
  const cards = [
    {
      img: "/images/about/about1.png",
      text: "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point.",
      heading: "We Are Increasing Business Success With Technology",
      head: "About Us",
      p1: "Maecenas suscipit nisi ac nisi tristique mattis.",
      p2: "Phasellus porttitor dui vitae pretium ornare.",
      p3: "Maecenas suscipit nisi ac nisi tristique mattis.",
    },
    {
      img: "/images/about/about2.png",
      text: "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point.",
      heading: "Creating Digital Solutions For Business Growth",
      head: "Our Mission",
      p1: "Nam varius mauris quis magna pellentesque gravida.",
      p2: "Phasellus porttitor dui vitae pretium ornare.",
      p3: "Maecenas suscipit nisi ac nisi tristique mattis.",
    },
    {
      img: "/images/about/about3.png",
      text: "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point.",
      heading: "Empowering Businesses Through Technology",
      head: "Our Vision",
      p1: "Nam varius mauris quis magna pellentesque gravida.",
      p2: "Phasellus porttitor dui vitae pretium ornare.",
      p3: "Maecenas suscipit nisi ac nisi tristique mattis.",
    },
  ];

  return (
    <motion.div className='px-10 py-30 flex items-center flex-col gap-14 md:px-0   relative z-10 '
    variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{once:false}}
    >
      <button className='hidden'>open</button>

      {cards.map((card)=>{
        return(
          <motion.div 
          variants={item}
          className='max-w-[1194px] box-border md:border-7 md:border-[#2B4DFF]  md:grow  md:shadow-2xl md:w-[95%] 
          flex flex-col gap-10 md:gap-0  md:flex-row  md:items-center md:justify-center 
          relative z-20 ' id='clip_box'
          
          >

            <div className='flex items-center md:w-1/2 z-10 relative  bg-white justify-center '><img src={card.img} alt="" /></div>
            <div className='flex flex-col md:w-1/2 justify-center md:items-center  md:h-[453px]  bg-white md:px-6 px-6 gap-4 relative z-10 '>
              <div className='flex gap-2'>
                <Smallicon/>
              <p className='text-[13px] text-[#2b4dff]'>{card.head}</p>
              </div>
              <h1 className='text-[clamp(25px,2.1vw,40px)] text-[#0a165e]'>{card.heading}</h1>
              <p className='text-[clamp(13px,1vw,16px)] text-[#726b7d]'>{card.text}</p>
              <ul className='text-[clamp(13px,1vw,16px)] text-[#0a165e] list-disc'>
                <li>{card.p1}</li>
                <li>{card.p2}</li>
                <li>{card.p3}</li>
              </ul>
              <div className='flex'>
                <button className='h-[45px] w-[107px] text-white  flex items-center justify-center rounded-full text-[13px] bg-[linear-gradient(90deg,#2B4DFF_0%,#C700B1_100%)]'>Know More</button>
                <div className='h-[45px] text-white w-[45px] flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#2B4DFF_0%,#C700B1_100%)]'>
                  <MoveUpRight size={18}/>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
      </motion.div>    
  )
}

export default AboutusCards
