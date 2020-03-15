import React from 'react';
import ScrollTop from './scrollTop'


export default function Footer() {
  return (
      <div className="footer">

        <ul className="social-media-links">
        <li className="social-media-left">
        <a
      href="https://www.linkedin.com/in/tanzil-chowdhury-951362136/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Linkedin
    </a>
         </li><li><a href="https://github.com/tanzildev/" target="_blank" rel="noopener noreferrer">GitHub</a></li></ul>
         <ScrollTop/> 

          <p> © {new Date().getFullYear()}</p>

        </div>

  );
}


