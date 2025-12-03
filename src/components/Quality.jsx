import React from 'react'
import Smallicon from './Smallicon'

const Quality = () => {
  const results=[
    {
      img:'/images/qualities/persons.png',
      heading:"Quality Results",
      text:"There are many variations a of passages of Digital Lorem Ipsum available, but the majority have suffered"
    },
    {
      img:'/images/qualities/arrow.png',
      heading:"Best Team Members",
      text:"There are many variations a of passages of Digital Lorem Ipsum available, but the majority have suffered"
    },
    {
      img:'/images/qualities/thumb.png',
      heading:"High Success Rate",
      text:"There are many variations a of passages of Digital Lorem Ipsum available, but the majority have suffered"
    }
  ]
  return (
    <div className='py-[89px]' style={{backgroundImage:"url('/images/qualities/why_choose.jpg')",backgroundSize:"cover"}}>
      <div className='flex flex-col gap-10 md:flex-row h-100  max-w-[1174px] m-auto'>
        <div className="flex-1 relative">
          <div className='relative h-full w-[90%] float-right'>
  <img
    src="/images/qualities/q_1.png"
    className="relative z-4 h-full w-full filter drop-shadow-[0px_0px_4px_#ffffff]"
    alt=""
  />

          </div>
</div>

        <div className='flex-1 bg-green-200 flex flex-col gap-4'>
          <div className='flex'>
            <Smallicon/>
            <p className='text-[13px] text-[#2b4dff]'>WHY CHOOSE US</p>
          </div>
          <h1 className='text-2xl text-[#0a165e]'>Seeing The Full potential of Your Brand</h1>
          <div className='flex flex-col'>
            {results.map((result,i) => {
  return (
    <div key={i} className='flex'>
    <div className='bg-[#635AD91A] p-2'><img src={result.img} className='h-[42px] w-[42px]' alt="image" /></div>
    <div><h1>{result.heading}</h1><p className='text-[#726b7d] text-[13px]'>{result.text}</p></div>
  </div>
  )
})}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quality
