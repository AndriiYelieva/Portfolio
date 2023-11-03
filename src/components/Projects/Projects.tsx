import React from 'react';
import './projects.scss';
// import asdmainPhoto from '../../img/mainPhoto.png';

const MUSEUM = 'https://andriiyelieva.github.io/Museum_NAMU/';
const MYBIKE = 'https://andriiyelieva.github.io/My_Bike/';
const PLAY2048 = 'https://andriiyelieva.github.io/2048/';
const APPLE = 'https://andriiyelieva.github.io/Apple_Store/';

export const Projects = () => {
  return (
    <section className="projects">
      <div className="project project__apple">
        <div className="project__apple--wrapper">
          <h1 className="project__apple--name">Apple Store</h1>

          <a
            target="_blank"
            rel="noreferrer"
            href={APPLE}
            className="project__demo"
          >
            <div className="project__demo--link" />
          </a>
        </div>

        <p className="project__apple--about">
          Apple Store - offers modern technological devices and gadgets to customers,
          helping them find the latest solutions for their digital lives.
          <br />
          <br />
          Technologies: React, TypeScript, JavaScript,
          BEM, SCSS, Redux, Redux Persist, React Router DOM, and Swiper
        </p>
      </div>
      <div className="project project__2048">
        <div className="project__2048--wrapper">
          <h1 className="project__2048--name">Game 2048</h1>

          <a
            target="_blank"
            rel="noreferrer"
            href={PLAY2048}
            className="project__demo"
          >
            <div className="project__demo--link" />
          </a>
        </div>
        <p className="project__2048--about">
          2048 Game - is a single-player
          block-moving puzzle game. It is a
          game where you need to connect
          blocks with the same numbers on
          the board, developing logical
          thinking and strategy.
          <br />
          <br />
          Technologies: HTML5, CSS3, Sass
          (SCSS), JavaScript
        </p>
      </div>
      <div className="project project__museum">
        <div className="project__museum--wrapper">
          <h1 className="project__museum--name">National Art Museum of Ukraine</h1>

          <a
            target="_blank"
            rel="noreferrer"
            href={MUSEUM}
            className="project__demo"
          >
            <div className="project__demo--link" />
          </a>
        </div>

        <p className="project__museum--about">
          National Art Museum of Ukraine
          - landing page provides information about current and upcoming events, gallery, and news.
          <br />
          <br />
          Technologies: HTML5, CSS3, Sass (SCSS), BEM methodology, JavaScript
        </p>
      </div>
      <div className="project project__bike">
        <div className="project__bike--wrapper">
          <h1 className="project__bike--name">My Bike Store</h1>

          <a
            target="_blank"
            rel="noreferrer"
            href={MYBIKE}
            className="project__demo"
          >
            <div className="project__demo--link" />
          </a>
        </div>

        <p className="project__bike--about">
          Bikes Store - your trusted source for an unforgettable
          cycling experience, offering a selection of quality bikes.

          <br />
          <br />
          <br />
          <br />
          Technologies: HTML5, CSS3, Sass (SCSS), BEM methodology, JavaScript
        </p>
      </div>
    </section>
  );
};
