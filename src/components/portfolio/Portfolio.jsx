import React from "react";
import IMG1 from "../../assets/quiz.png";
import IMG2 from "../../assets/durham-dash.png";
import IMG3 from "../../assets/safari.png";
import IMG4 from "../../assets/crud.png";
import IMG5 from "../../assets/gituserfind.png";
import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Quiz Application",
      img: IMG1,
      description:
        "A quiz application using React.js and Ant Design (antd) UI components, providing an engaging and intuitive user experience. Authentication is handled seamlessly through Firebase, ensuring a secure and personalized quiz-taking experience.",
      technologies: "Javascript | React Js | Firebase",
      link: "https://siimple-quiz-app.netlify.app/",
      github: "https://github.com/TarifSadman/Quiz-Application",
    },
    {
      id: 2,
      title: "CRUD Application",
      img: IMG4,
      description:
        "A compact CRUD application with ReactJS and Supabase for the database, complemented by Ant Design (antd) UI components for an intuitive user interface. This application facilitates data management, offering functions for creating, reading, updating, and deleting records. The integration of React, Supabase, and Ant Design ensures a seamless and efficient user experience for data manipulation.",
      technologies: "React | Supabase | Ant Design",
      link: "https://ssupabase-crud.netlify.app/",
      github: "https://github.com/TarifSadman/supabase-int",
    },
    {
      id: 3,
      title: "Durham School",
      img: IMG2,
      description: "This is a management solution for Durham Public Schools, Durham.",
      technologies: "React",
      link: "https://ds.concisetc.com/",
      github: "",
    },
    {
      id: 4,
      title: "Safari House",
      img: IMG3,
      description:
        "A dedicated website for hotel reservations.",
      technologies: "Html | CSS | JavaScript | React Js",
      link: "http://safarihousehotel.datalibrary.io/",
      github: "",
    },
    {
      id: 5,
      title: "Github User Finder",
      img: IMG5,
      description:
        "A GitHub user search application using React.js, enriched with components from the Ant Design (antd) UI library to create an attractive and user-friendly interface. The app seamlessly leverages GitHub's REST APIs, integrated via the Axios package, to enable users to search for and discover GitHub users effortlessly.",
      technologies: "React",
      link: "https://search-user-geethub.netlify.app/",
      github: "https://github.com/TarifSadman/github-user-search",
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
