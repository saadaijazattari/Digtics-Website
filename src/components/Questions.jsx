import React from 'react'
import Smallicon from './Smallicon'
import Accordion from '@mui/material/Accordion'
import AccordionUsage from './Accordion'

const Questions = () => {
  return (
    <div className='flex flex-col md:flex-row items-start overflow-hidden gap-10 bg-[#F5F6F7]'>


  <div className='md:w-[50%] flex-1 2xl:h-[733px] xl:h-[730px] lg:h-[710px] md:h-[690px] '>
    <img src="/images/questions/question.png" className='w-full h-full object-cover object-right' />
  </div>


  <div className='flex flex-col gap-4 md:w-[50%] w-full px-4 py-[60px] 2xl:py-[117px] xl:py-[100px] lg:py-[90px] md:py-20 sm:py-[70px] '>

    <div className='flex gap-2 items-center'>
      <Smallicon/>
      <p className='text-[13px] text-[#2b4dff] '>FREQUENTLY ASKED QUESTIONS</p>
    </div>

    <h1 className='text-[25px] sm:text-[29px] mb-3 lg:text-[33px] 2xl:text-[39px]'>
      Let's Meet And Work Together Your Project
    </h1>

    <AccordionUsage/>

    </div>


</div>

  )
}

export default Questions
