import React from 'react'

const Smallicon = () => {
  return (
    <div
  className='relative w-7 h-3.5 rounded-full'
  style={{ background: 'linear-gradient(90deg, #3C72FC 0%, #00060C 255.75%)' }}
>
      <div className='absolute w-2.5 rounded-full h-2 bg-white top-[2.8px]  left-1' style={{
    clipPath: 'path("M0,0 H150 Q200,50 150,100 H0 Z")',
  }}></div>
    </div>
  )
}

export default Smallicon
