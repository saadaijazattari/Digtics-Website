import { Cross, Facebook, Instagram, Linkedin, Twitter, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Drawer_content = ({toggleDrawer}) => {

  const logos=[Facebook ,Twitter ,Linkedin ,Instagram ]
   const imp_links=[
    {
    name:"About",
    link:"/about"
  },
    {
    name:"Services",
    link:"/service"
  },
    {
    name:"Blog",
    link:"/blogs"
  },
    {
    name:"Contact",
    link:"/contact"
  },
  // /service-details
]
  return (
    <div className='p-5 flex flex-col gap-5 h-full'>
      <div className='flex items-center justify-between pb-5 border-b border-[rgba(0,0,0,0.2)]'>
        <div><img src="/images/logo/logo.svg" className='h-[31px] w-[130px]' alt="" /></div>
        <X onClick={toggleDrawer(false)} className='cursor-pointer h-[22px] w-[22px]'/>
      </div>


      <div className='flex flex-col border border-[rgba(0,0,0,0.2)]'>
        <Link className='py-3  px-[15px] border-t border-transparent text-[13px]' to='/</div>'>Home</Link>
        {imp_links.map((lin,i)=> (
          <Link className='py-3 border-t border-[rgba(0,0,0,0.2)] px-[15px] text-[13px]' key={i} to={lin.link}>{lin.name}</Link>
        ))}

      </div>


      <div>
        <h1 className='text-[20px]'>Follow us</h1>
        <div className='flex gap-[clamp(7px,0.53vw,10px)]'>
  {logos.map((Icon, i) => (
    <div key={i} className='flex items-center justify-center w-[37px]  h-[37px]  rounded-full border border-black text-black hover:bg-[#2b4dff] cursor-pointer'>
      <Icon className='w-[17px] h-[17px]' />
    </div>
  ))}
</div>

      </div>
    </div>
  )
}

export default Drawer_content
