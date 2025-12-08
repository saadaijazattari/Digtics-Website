import React from 'react'
import Navbar from '../components/Navbar'
import { ArrowLeft, ArrowRight, AudioLines, MoveUpRight } from 'lucide-react'
import AboutusCards from '../components/AboutusCards';
import Smallicon from '../components/Smallicon';
import TextTicker from '../components/Text';
import CustomSlider from '../components/Service';
import Quality from '../components/Quality';
import Development from '../components/Development';
import Trends from '../components/Trends';
import Questions from '../components/Questions';
import RightDrawer from '../components/Drawer';
import AccordionUsage from '../components/Accordion';
import Solution from '../components/Solution';
import Client_review from '../components/Client_review';
import Blogs from '../components/Blogs';
import ClientsMedia from '../components/ClientsMedia';
import Footer from '../components/Footer';




const Home = () => {
  const topText=[
  { nums: 20.5, text: "Projects Done" },
  { nums: 100.5, text: "Happy Clients" },
  { nums: 150.5, text: "Team Members" }
];
  return (
    <div className='relative '>
      <Navbar/>
<div class="h-auto bg-[linear-gradient(135deg,#4a6bff_0%,#7928ca_100%)] py-30 flex items-center justify-center  flex-col">


    {/*  top section ka div*/}
      <div className='flex gap-3 rounded-full border border-white py-1 px-2'><AudioLines  className='text-white'/> <p className='text-sm text-white'>Amazing solutions for buisness</p></div>
      <div className='sm:px-10'><h1 className='max-w-200 text-[25px] sm:text-[30px] md:text-[35px] lg:text-[43px] xl:text-[47px] 2xl:text-[52px] text-center text-white'>Trusted IT support Designed to Safeguard Your Business</h1></div>
      <div className='px-[15px] rounded-full text-[#2b4dff] items-center cursor-pointer hover:text-white tr hover:bg-[#2b4dff] transition-all duration-0.4s ease-in justify-center h-9 w-p[124px] flex gap-2 mb-4 bg-white'><h1 className=' text-[13px] font-bold '>Our Services</h1> <MoveUpRight /> </div>
      <div className='flex flex-wrap justify-center items-center gap-4'>{topText.map((reviews)=>{
        return <div className='flex flex-col justify-center pr-4 sm:pr-10 items-start border border-transparent border-r-white text-white'>
          <h1  className='text-[20px]'>{reviews.nums}k</h1>
          
          <p className='text-[14px] text-[#ffffff99]'>{reviews.text}</p>
        </div>
      })}</div>
</div>
    <AboutusCards/>
    <TextTicker/>

     <CustomSlider/>
    {/* <Quality/> */}
    <Development/>
    <Trends/>
  

<Questions/> 
<Solution/>
<Client_review/>
<Blogs/>
<ClientsMedia/>
<Footer/>
      
    </div>
  )
}

export default Home
