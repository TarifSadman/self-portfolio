import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';
import { Autoplay } from 'swiper';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/n%C9%99sib%C9%99li-yusibov-0x101/',
      name: 'Nəsibəli YUSIBOV',
      role: 'Cyber Security Engineer . Improving open-source projects, one commit at a time.',
      test: 'As a developer and a problem solver, I think Tarif is a great collaborative partner to have. I met Tarif in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/raul-omarov-7841b7201/',
      name: 'Raul Omarov',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "It was a pleasure collaborating with Tarif on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens him knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/agasi-xalilov/',
      name: 'Ağası Xəlilov',
      role: 'Full Stack Developer| PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: 'I worked with Tarif in the same team and him communication skills are very strong. Him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he\'s a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/javid-aliyev-b343061b6/',
      name: 'Javid Aliyev',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored Tarif some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing him best and going beyond the requirements of the project he's building.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/hasanmorshed/',
      name: 'Hasan Morshed',
      role: 'SEO Specialist',
      test: "I am delighted to write a recommendation for Tarif, a highly skilled and dedicated professional whom I have had the privilege of knowing both personally and professionally. I had the pleasure of working alongside Tarif on various projects, and I am truly impressed by his expertise in JavaScript, React.js, HTML, and CSS. Tarif's proficiency in JavaScript and React.js is truly remarkable. His ability to architect and develop complex web applications showcases his deep understanding of these technologies. I have witnessed firsthand how Tarif can transform innovative ideas into functional and aesthetically pleasing user interfaces. His attention to detail and commitment to writing clean, efficient code is truly commendable. Furthermore, Tarif's command over HTML and CSS is truly impressive. He has an innate ability to craft visually appealing and responsive designs that enhance user experiences. His keen eye for design aesthetics combined with his technical skills make him a standout professional in the field. Aside from his technical prowess, Tarif is an excellent team player and communicator. He collaborates effectively with team members, actively contributes to discussions, and readily shares his knowledge with others. His positive attitude and strong work ethic create a motivating and productive work environment. In summary, I wholeheartedly recommend Tarif for any project or role that requires expertise in JavaScript, React.js, HTML, and CSS. His dedication, skills, and ability to deliver high-quality results make him an invaluable asset to any team. I am confident that Tarif will continue to excel and make significant contributions in his professional journey. Please feel free to reach out to me if you require any further insights into Tarif's exceptional capabilities.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 3000
        }}
        speed={6000}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials