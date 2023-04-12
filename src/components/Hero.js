import React from 'react';
import { Link } from 'react-router-dom';
import heroimg from '../images/heroimg.jpg';
import logo1 from '../images/logo1.jpg';
import logo2 from '../images/logo2.jpg';
import logo3 from '../images/logo3.jpg';
import hero2 from '../images/hero2.jpg';
import './hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroimg} alt="heroimg" style={{ maxWidth: "100%", height: "600px", width: "600px" }} />
      </div>
      <div className="hero-content">
        <h1>Welcome to our Interior Design Studio</h1>
        <p>We create beautiful and functional spaces that reflect your unique style.</p>
        <h2>We Tackle The Most Challenging Designs</h2>
        <div className="hero-container">
          
          <div className="text-container">
            <h1>WE ARE CREATIVES</h1>
            <p>
              The world needs innovators and problem solvers who<br /> turn challenges into greater opportunities.<br/> We have
              an insatiable curiosity about<br></br> transformative trends challenging the status.<br />
              <h1> 8511779099</h1>
              <h2>Call us anytime</h2>
            </p>
            <img src={hero2} alt="hero2" style={{ maxWidth: "200%", height: "600px", width :"600px"}} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
