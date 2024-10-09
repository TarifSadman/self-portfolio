import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CTA = () => {

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
