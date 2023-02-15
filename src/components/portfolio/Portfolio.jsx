import React from "react";
import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG3 from "../../assets/safari.png";
import IMG4 from "../../assets/Covid-19 Project.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";

import "./portfolio.css";
//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Educational Website with React.js",
      img: IMG1,
      description:
        "An educational website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "",
      github: "https://github.com/TarifSadman/Social_Icon-Hoever",
    },
    {
      id: 2,
      title: "Covid-19 Tracking App",
      img: IMG4,
      description:
        "The COVID Tracking Project collects and publishes the most complete testing data available for all areas of the world.",
      technologies: "React | Redux",
      link: "",
      github: "https://github.com/TarifSadman/QR-Component",
    },
    {
      id: 3,
      title: "RubyCode Blog Project",
      img: IMG2,
      description: "This site is a kind of social media platform. You can register and share your posts.",
      technologies: "React | Redux",
      link: "",
      github: "",
    },
    {
      id: 4,
      title: "Safari House",
      img: IMG3,
      description:
        "A dedicated website for hotel reservations.",
      technologies: "Html | CSS | JavaScript | React Js",
      link: "https://safarihouse.cisstaging.com/",
      github: "",
    },
    {
      id: 5,
      title: "Jokes Project with Typescript",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Html | Styled-components | Typescript",
      link: "",
      github: "",
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
