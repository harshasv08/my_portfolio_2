import React from 'react';
import './NextPage.css'; // Importing CSS for styling

const NextPage = () => {
  return (
    <div className="next-page-container">
      <header className="header">
        <h1 className="name">John Doe</h1>
        <p className="role">Web Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with experience in building dynamic websites and applications. I enjoy solving problems with clean and efficient code.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>CSS3</li>
          <li>HTML5</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Project One</h3>
            <p>A web app built with React to manage tasks efficiently.</p>
          </div>
          <div className="project">
            <h3>Project Two</h3>
            <p>An e-commerce website using Node.js and MongoDB.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>
          Email: johndoe@example.com
        </p>
      </section>
    </div>
  );
};

export default NextPage;
