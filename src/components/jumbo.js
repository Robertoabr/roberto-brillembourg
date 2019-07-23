import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Jumbo = () => {
  return (
    <section id="top">
      <Jumbotron
        fluid
        style={{ backgroundImage: "url('./images/HeroImage.jpg')" }}
      >
        <div className="intro">
          <h2>
            Hello, I'm <span id="fullname">Roberto Brillembourg</span>.
          </h2>
          <h2>I am a full-stack web developer.</h2>
          <Button
            className="mt-4"
            id="viewmyworkbutton"
            variant="outline-primary"
            href="#about"
          >
            View my work
          </Button>
        </div>
      </Jumbotron>
    </section>
  );
};

export default Jumbo;
