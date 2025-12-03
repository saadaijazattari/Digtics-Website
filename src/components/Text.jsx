import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TextTicker = () => {
const text=["IT Solution","Technology","Data Security","Digital Agency","UI/UX design","Web development","AI image Generate","Cyber Security"]
  return (
    <Splide
      options={{
        type: 'loop',
        drag: true,
        arrows: false,
        pagination: false,
        autoWidth: true,
        autoplay: true,
        interval: 0,
        speed: 12000,
        direction: 'ltr', // left se right
      }}
      className="bg-[#f0f3ff] text-black py-2 mb-10"
    >
{text.map((text,i)=>{
        return(
                <SplideSlide className={`px-10 text-lg text-${i%2===0?"black":"[#2b4dff]"}`}>
                  <ul>
                    <li className='flex gap-13'>{text} <img src="/images/star/star.svg" alt="" /></li>
                  </ul>

          </SplideSlide>
        )
      })}
      
    </Splide>
  );
};

export default TextTicker;
