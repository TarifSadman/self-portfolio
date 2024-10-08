import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CTA = () => {
  // const [resume, setResume] = useState(null);

  // useEffect(() => {
  //   axios.get('https://cooperative-calf-slippers.cyclic.app/api/resume')
  //     .then((res) => {
  //       setResume(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="cta">
      <a href="https://portfolio-bucks.s3.ap-south-1.amazonaws.com/projects/Sadman-Tarif__Resume.pdf" target='_blank' rel='noreferrer' download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
