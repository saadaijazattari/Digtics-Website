import { ArrowRight, ArrowUpRight, Check, ChevronsRight, Facebook, Instagram, Linkedin, Mail, MoveUpRight, PhoneCall, Twitter } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  const [ischecked, setIschecked] = useState(false)
  const imp_links=[
    {
    name:"About Us",
    link:"/about"
  },
    {
    name:"Our Services",
    link:"/service"
  },
    {
    name:"Our Blogs",
    link:"/blogs"
  },
    {
    name:"FAQ'S",
    link:"/faq"
  },
    {
    name:"Contact Us",
    link:"/contact"
  },
  // /service-details
]
  const detail_links=[
    {
    name:"IT Management",
    link:"/service-details"
  },
    {
    name:"SEO Optimization",
    link:"/service-details"
  },
    {
    name:"Web Development",
    link:"/service-details"
  },
    {
    name:"Cyber Security",
    link:"/service-details"
  },
    {
    name:"Data Security",
    link:"/service-details"
  },

]



  const logos=[Facebook ,Twitter ,Linkedin ,Instagram ]
  return (
    <div className='bg-[#0a165e]' >

      {/* footer first part */}
      <div className='px-[15px] border-y  border-[#ffffff33] py-[clamp(25px,3vw,59px)]'>
        <div className=' flex justify-content  '>
          <div id='footer_part1' className='sm:flex-row gap-7  w-[95%]    2xl:w-[70%] xl:w-[80%]     m-auto flex-wrap items-center  lg:justify-between flex '>
          <div className='flex flex-col gap-3'><div><img src="/images/logo/logo_footer.svg" alt="logo image" /></div><div className='flex  gap-2'>{logos.map((Icon,i)=><div key={i} className='items-center transition-all duration-300 hover:bg-[#2b4dff] cursor-pointer justify-center flex aspect-square rounded-full h-[clamp(33px,4vw,36px)] border border-[#ffffff33]  text-white '><Icon className='w-[15px] h-[15px]'/></div>)}</div></div>

<div id='footer_part1_box1' className='flex gap-3 items-center  justify-start '>
  <div className='text-white aspect-square w-[clamp(53px,4vw,67px)] items-center justify-center flex rounded-full border border-[#ffffff33]'>
    <PhoneCall className='h-[clamp(27px,3vw,30px)] w-[clamp(27px,3vw,30px)]'/>
  </div>

  <div className='text-white'>
    <p className='text-[clamp(16px,2vw,18px)]'>Call Now</p>
    <h1 className='text-[clamp(18px,2vw,24px)] hover:text-[#2b4dff] transition-all duration-300'><Link to='/'>+208-6666-0112</Link></h1>
  </div>
</div>
          <div id='footer_part1_box2' className='flex gap-3 items-center  justify-start  '><div className='text-white  aspect-square w-[clamp(53px,4vw,67px)] items-center justify-center flex rounded-full border-[#ffffff33]  border'><Mail className='h-[clamp(27px,3vw,30px)] w-[clamp(27px,3vw,30px)]'/></div><div className='text-white '><p className='text-[clamp(16px,2vw,18px)]'>Email Us</p><h1 className='text-[clamp(18px,2vw,24px)] hover:text-[#2b4dff] transition-all duration-300'><Link to='/'>info@exmple.com</Link></h1></div></div>

          </div>
        </div>
        </div>


{/* footer second part */}
      <div className='flex justify-between border-b  border-[#ffffff33] py-[clamp(50px,4.2vw,80px)] text-[#D9D9D9] gap-[35px] flex-wrap   w-[95%]   2xl:w-[70%] xl:w-[80%] m-auto '>

    <div className='flex items-start gap-4 w-[267px] flex-col'>
      <div className='mb-[clamp(13px,1.37vw,15px)]'>
      <h1 className='text-[clamp(17px,1.37vw,20px)] text-white'> About us</h1>
      <div className='flex gap-1 mt-[clamp(8px,0.68vw,13px)] w-full'><div className='h-0.5 bg-white w-[25%] '></div><div className=' flex-1 h-0.5 bg-[#2b4dff]'></div></div>
      </div>
      <p className='text-[clamp(13px,1vw,16px)] mb-[clamp(20px,1.94vw,27px)]'>It is a long established fact that a reader will be distracted the road readable content of a page when looking at layout.</p>
<Link to='/contact'>
  <button className='flex h-[clamp(42px,2.42vw,46px)] items-center justify-center gap-[clamp(7px,0.53vw,10px)] border rounded-full border-[rgba(255,255,255,0.2)] px-[clamp(12px,1.05vw,20px)] text-white hover:text-[#2b4dff] transition-all duration-300 hover:bg-white cursor-pointer'>
    Contact us 
    <ArrowUpRight/>
  </button>
</Link>
      </div>





    <div className='flex flex-col justify-center w-[267px] items-start gap-5'>
      <div className='mb-[clamp(13px,1.37vw,15px)]'><h1 className='text-[clamp(17px,1.37vw,20px)] text-white'>Our Best Service</h1>
      <div className='flex gap-1 mt-[clamp(8px,0.68vw,13px)] w-full'><div className='h-0.5 bg-white w-[25%] '></div><div className=' flex-1 h-0.5 bg-[#2b4dff]'></div></div></div>
      <ul className='flex flex-col gap-[clamp(15px,0.95vw,18px)]'>
        {detail_links.map((d_lin,i)=><li className='flex hover:text-[#2b4dff] transition-all duration-300 gap-2 text-[clamp(13px,1vw,16px)]' key={i}><ChevronsRight /><Link to={d_lin.link}>{d_lin.name}</Link></li>)}
      </ul>
    </div>

    <div className='flex flex-col justify-center w-[267px] items-start gap-5'>
      <div className='mb-[clamp(13px,1.37vw,15px)]'><h1 className='text-[clamp(17px,1.37vw,20px)] text-white'> Important Quick Link</h1>
      <div className='flex gap-1 mt-[clamp(8px,0.68vw,13px)] w-full'><div className='h-0.5 bg-white w-[25%] '></div><div className=' flex-1 h-0.5 bg-[#2b4dff]'></div></div></div>
      <ul className='flex flex-col gap-[clamp(15px,0.95vw,18px)]'>
        {imp_links.map((imp_lin,i)=><li className='flex hover:text-[#2b4dff] transition-all duration-300 gap-2 text-[clamp(13px,1vw,16px)]' key={i}><ChevronsRight /><Link to={imp_lin.link}>{imp_lin.name}</Link></li>)}
      </ul>
    </div>


    <div className='flex flex-col w-[267px]  items-start gap-5'>
      <div className='mb-[clamp(13px,1.37vw,15px)]'>
      <h1 className='text-[clamp(17px,1.37vw,20px)] text-white'>Contact Us </h1>
      <div className='flex gap-1 mt-[clamp(8px,0.68vw,13px)] w-full'><div className='h-0.5 bg-white w-[25%] '></div><div className=' flex-1 h-0.5 bg-[#2b4dff]'></div></div>
      </div>
      <ul className='text-[clamp(13px,1vw,16px)]' >
        <li>Monday - Friday : 8am - 4pm</li>
      <li>Saturday : 8am - 12am</li>
      </ul>
      <div>
    <div className='bg-white h-[clamp(45px,2.94vw,56px)] rounded-lg p-[clamp(2px,0.26vw,5px)] flex'><input type="text" className='border-none px-[clamp(7px,0.53vw,10px)] text-[14px] w-full outline-none text-black' placeholder='Your Email Address'/><button className='bg-[#2b4dff] rounded-[5px] aspect-square flex shrink-0 items-center justify-center text-white'><ArrowRight /></button></div>
    <div className={`flex gap-[clamp(7px,0.53vw,10px)] items-center mt-[clamp(12px,1.26vw,24px)]`}onClick={()=>setIschecked(!ischecked)}>
      <div className={`flex shrink-0   ${ischecked ? "bg-[#2b4dff] border-transparent" : "bg-transparent border-[rgba(255,255,255,0.6)]"} items-center justify-center rounded text-white w-[clamp(17px,1.05vw,20px)] h-[clamp(17px,1.05vw,20px)] border `}><Check className={`opacity-0 ${ischecked?"opacity-100":"opacity-0"} h-2.5 w-2.5`} /></div>
      <p className='text-[clamp(13px,1vw,16px)] text-[rgba(255,255,255,0.6)]'>I agree to terms <span className='underline text-white'><Link to='/'>Privacy Policy</Link></span></p>
    </div>
   
      </div>
      </div>
      
      </div>



{/* footer third part */}
      <div className='w-[95%]   2xl:w-[70%] xl:w-[80%] m-auto flex justify-center py-[clamp(14px,1.16vw,22px)]'>
        <div className='text-[rgba(255,255,255,0.9)] text-[clamp(13px,0.84vw,16px)]'>
          <p>Copyright © {new Date().getFullYear()} All rights reserved</p>

        </div>
      </div>
    </div>
  )
}

export default Footer
