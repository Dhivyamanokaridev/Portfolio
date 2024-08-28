import React from 'react';
import '../components/style/Header.css'


const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
