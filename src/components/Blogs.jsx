import React from 'react'
import Smallicon from './Smallicon'
import { MessageCircleMore, MoveUpRight, Tag } from 'lucide-react'

const Blogs = () => {
  const blogs=[
    {
      heading:"What's the Holding Back the It Solution",
      img_profile:"/images/blogs/b_1_pro.jpg",
      name:"Ronald Walker",
      blog_img:"/images/blogs/b_1.jpg",
      big:false
    },
    {
      heading:"Powerful Server and Platform",
      img_profile:"/images/blogs/b_2_pro.jpg",
      name:"Ronald Walker",
      blog_img:"  /images/blogs/b_2.jpg",
      big:false
    }

  ]
  return (
    <div className='relative'>
<img src="/images/blogs/blog_vector.png" className='absolute h-full w-[40%] top-0 left-0' alt="" />
      <div className='max-w-[1179.2px] relative w-full m-auto py-[clamp(60px,6vw,120px)] p-[clamp(13px,1vw,14px)]'>


        <div className='flex items-center justify-between mb-[clamp(22px,3vw,51px)]'>     {/*top section ka div*/}
          
          <div className='flex flex-col gap-3 '><div className='flex gap-2 items-center'><Smallicon/><p className='text-[#2b4dff] text-[clamp(13px,2vw,15.708px)]'>LATEST NEWS & BLOGS</p></div><h1 className='text-[clamp(25px,3vw,37.338px)] text-[#0a165e]'>  Explore News & Blog</h1></div>
          <div><div
          className="rounded-full gap-2 text-[14px] bg-[linear-gradient(90deg,#2B4DFF_0%,#C700B1_100%)] px-4 py-2 cursor-pointer text-white items-center transition-all duration-300 ease-in-out hidden sm:flex xl:text-[15px]  xl:px-4 2xl:text-base 2xl:py-3 2xl:px-4">Get in touch <MoveUpRight /></div></div>

                </div>  








        <div className='flex lg:flex-row gap-4  flex-col'>{/*bottom cards section ka div*/}
          
          <div className='lg:w-[50%] w-full flex flex-col  gap-4'>
            {blogs.map((blog)=>{
              return(
                <div className=' p-[clamp(12px,3.05vw,20px)] border gap-7 flex flex-col sm:flex-row border-[#D9D9D9] rounded-[20px]'>
                  <div className='w-full sm:h-[232px]   sm:w-[232px] rounded-[10px] overflow-hidden'><img src={blog.blog_img} alt="image" className='w-full '/></div>
                  <div className='w-full flex flex-col gap-4 justify-center  sm:flex-1'>
                    <div className='flex gap-5 items-center'><div className='flex gap-2 items-center'><Tag stroke='#2b4dff' className='rotate-90 w-[clamp(17px,1vw,19.64px)] h-[clamp(17px,2vw,19.64px)]'/><p className='text-[#726b7d] text-[clamp(12px,1vw,13.6323px)]'>Technology</p></div><div className='flex items-center gap-2'><MessageCircleMore stroke='#2b4dff'  className='w-[clamp(17px,1vw,19.64px)] h-[clamp(17px,2vw,19.64px)]'/><p className='text-[#726b7d] text-[clamp(12px,1vw,13.6323px)]'>0 comments</p></div></div>
                    <div><h1 className='text-[clamp(21px,2vw,23.562px)] text-[#0a165e]'>{blog.heading}</h1></div>
                    <div className='flex gap-2'>
                      <div  className='rounded-full overflow-hidden aspect-square h-[clamp(45.50px,4vw,54.20px)]'><img src={blog.img_profile} alt=""   className='h-full w-full'/></div>
                      <div><p className='text-[clamp(12px,2vw,14px)] text-[#2b4dff]'>By Admin</p><p className='text-[clamp(13px,2vw,16px)]'>{blog.name}</p></div>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>


          <div className='lg:w-[50%] flex flex-col gap-7  w-full p-[clamp(12px,3.05vw,20px)] border border-[#D9D9D9] rounded-[20px]'>
            <div className='w-full  '><img src="/images/blogs/b_3.jpg" alt="image" className='lg:h-auto h-[80%] w-full'/></div>
           <div className='flex flex-col gap-4 justify-center'>
              <div className='flex gap-5 items-center'><div className='flex gap-2 items-center'><Tag stroke='#2b4dff' className='rotate-90 w-[clamp(17px,1vw,19.64px)] h-[clamp(17px,2vw,19.64px)]'/><p className='text-[#726b7d] text-[clamp(12px,2vw,13.6323px)]'>Technology</p></div><div className='flex items-center gap-2'><MessageCircleMore stroke='#2b4dff'  className='w-[clamp(17px,1vw,19.64px)] h-[clamp(17px,2vw,19.64px)]'/><p className='text-[#726b7d] text-[clamp(12px,2vw,13.6323px)]'>0 comments</p></div></div>
              <div><h1 className='text-[clamp(21px,2vw,23.562px)] text-[#0a165e]'>Keep Your Business Safe & Ensure High Availability.</h1></div>
              <div><p className='text-[clamp(13px,2vw,16px)] text-[#726b7d]'>From luxury and economy cars and find out which best suits your lifestyle economy cars and find</p></div>
              <div className='flex gap-2'>
                      <div  className='rounded-full overflow-hidden aspect-square h-[clamp(45.50px,4vw,54.20px)]'><img src='/images/blogs/b_3_pro.jpg' alt=""   className='h-full w-full'/></div>
                      <div><p className='text-[clamp(12px,2vw,14px)] text-[#2b4dff]'>By Admin</p><p className='text-[clamp(13px,2vw,16px)]'> Ronald Walker </p></div>
                    </div>
            </div>
          </div>
          </div>  
      </div>
    </div>
  )
}

export default Blogs






// 