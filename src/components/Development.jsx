import React from 'react'
import Smallicon from './Smallicon'

const Development = () => {
  const dev_processes=[
    {
      img:"/images/proces/process1.jpg",
      heading:"Define Requirements",
      text:"In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
    },
    {
      img:"/images/proces/process2.jpg",
      heading:"Design & Prototyping",
      text:"In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
    },
    {
      img:"/images/proces/process3.jpg",
      heading:"Final Solution",
      text:"In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur",
    },
  ]
  return (
    <div className=' py-[60px]  flex flex-col gap-4 items-center justify-center sm:py-[70px] md:py-20 lg:py-[90px] xl:py-[100px] 2xl:py-[116px]'>
      <div className='flex gap-2 items-center justify-center'><Smallicon/><p className='text-[13px] md:text-[14px ] 2xl:text-[15px] text-[#2b4dff]'>WORK PROCESS</p></div>
      <h1 className='text-[25px] sm:text-[29px] lg:text-[33px] 2xl:tetx-[39px]'>Our Development Process</h1>
      <div className='flex flex-wrap items-center justify-center gap-20 max-w-[1246px] w-full '>
        {dev_processes.map((process,i)=>{
          return(
            <div className='w-[235px] 2xl:w-[318px] flex flex-col justify-center items-center gap-2' key={i}>
              <div className='h-[140px] 2xl:w-[175px] md:w-[150px] xl:w-40  2xl:h-[175px] md:h-[150px] xl:h-40 w-[140px] p-[5px] border-2 border-[#2b4dff] border-dashed rounded-full relative'>
                <div className='absolute h-[35px] md:h-9 md:w-9 xl:h-[37px] 2xl:h-[38px] xl:w-[37px] 2xl:w-[38px] w-[35px] rounded-full flex items-center justify-center text-[15px] 2xl:text-[17px] text-white '
                style={{background:"linear-gradient(90deg, rgb(60, 114, 252) 0%, rgb(199, 0, 177) 100%)"}}>
                  {i+1}
                </div>
                <img src={process.img} className='rounded-full' alt="image" />
              </div>
              <h1 className='text-[20px] 2xl:text-[23px]'>{process.heading}</h1>
              <p className='text-center text-[13px] 2xl:text-[15px] text-[#726b7d]'>{process.text}</p>
            </div>
          )
        })}
      </div>
    </div>  
  )
}

export default Development
