import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'

const ClientsMedia = () => {
  const Texhimages=["/images/TechMedia/c_1.png","/images/TechMedia/c_2.png","/images/TechMedia/c_3.png","/images/TechMedia/c_4.png","/images/TechMedia/c_5.png"]
  return (
    <div
  className="text-black  mb-[clamp(60px,6vw,120px)] m-auto w-[95%] 2xl:w-[70%] xl:w-[80%] py-[clamp(20px,3vw,64px)] flex justify-center relative"
  style={{
    background: "linear-gradient(90deg, #3C72FC -35.04%, #B409A8 252.82%)",
    borderRadius: "20px"
  }}
>
  <Splide
    className="z-10 relative"
    options={{
      type: 'loop',
      drag: true,
      arrows: false,
      pagination: false,
      autoplay: true,
      interval: 2000,
      speed: 800,
      direction: 'ltr',
      perMove: 1,
      perPage: 5,

      breakpoints: {
        1200: { perPage: 4 },
        992: { perPage: 3 },
        768: { perPage: 2 },
        480: { perPage: 2 },
      },
    }}
  >
    {Texhimages.map((image, i) => (
      <SplideSlide key={i}>
        <img src={image} className="w-[130px] sm:w-[175px] m-auto" alt="" />
      </SplideSlide>
    ))}
  </Splide>

  <div className="h-full w-[50%] absolute top-0 right-0 z-0">
    <img src="/images/TechMedia/c_vector.png" alt="" className="h-full w-full" />
  </div>
</div>


  )
}

export default ClientsMedia

