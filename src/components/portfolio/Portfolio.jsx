/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./portfolio.css";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Updated API URL to HTTPS
    axios.get('https://dynamodb-testrun-dev.ap-south-1.elasticbeanstalk.com/projects')
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(projects, "test---projects");

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.image} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {pro.github && <a href={pro.github} target="_blank" className="btn" rel="noreferrer">GitHub</a>}
              <a href={pro.link} target="_blank" className="btn btn-primary" rel="noreferrer">Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
