import React from 'react';
import './contact.scss';
import asdmainPhoto from '../../img/mainPhoto.png';

const GITHUB = 'https://github.com/AndriiYelieva';
const TELEGRAM = 'https://github.com/AndriiYelieva';
const LINKEDIN = 'https://github.com/AndriiYelieva';

export const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__about">
        <h3 className="contact__about--h3">Hey, i`m Andrii, front-end developer</h3>
        <p className="contact__about--title">
          I strive to constantly improve my skills,
          learn about new technologies and best development practices
          to provide users with a convenient and modern experience
          of interacting with web applications. In addition, I am eager
          to participate in projects that are of interest and have a meaningful
          impact on users and businesses.
        </p>

        <div className="contact__links">
          <a
            target="_blank"
            rel="noreferrer"
            href={GITHUB}
            className="contact__link"
          >
            <div className="contact__link--wrapper">
              <div className="contact__icon--gitHub contact__icon" />
              <p className="contact__link--title">GitHub</p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={LINKEDIN}
            className="contact__link"
          >
            <div className="contact__link--wrapper">
              <div className="contact__icon--linkedin contact__icon" />
              <p className="contact__link--title">Linkedin</p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={TELEGRAM}
            className="contact__link"
          >
            <div className="contact__link--wrapper">
              <div className="contact__icon--telegram contact__icon" />
              <p className="contact__link--title">Telegram</p>
            </div>
          </a>
        </div>
      </div>
      <img src={asdmainPhoto} alt="main_photo" className="contact__myPhoto" />
    </section>
  );
};
