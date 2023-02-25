import React from 'react';
import CTA from './CTA';
// import HeaderSocials from './HeaderSocials';
import './header.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper';

const Header = () => {
  const header = [
    {
      id: 1,
      test: "Front-end Developer",
    },
    {
      id: 2,
      test: "Debugger",
    }
  ];
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tarif Sadman</h1>
        <Swiper 
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop={true}
        modules={[Autoplay]}
        >

        {header.map((test) => (
          <SwiperSlide key={test.id}>
          <small>{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
        {/* <h5 className="text-light">Front-end Developer</h5> */}
        <CTA />
        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
        {/* <HeaderSocials /> */}
      </div>
    </header>
  );
};

export default Header;
