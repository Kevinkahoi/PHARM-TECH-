import * as React from 'react';

import './Header.css';
export default function Header() {
  function myFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#news">Jobs</a>
        <a href="#contact">Post Jobs</a>

        <a href="#about">Chemist </a>
        <a href="#about">Register</a>
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

      <ul>
        <li>
          <a href="default.asp">Home</a>
        </li>
        <li>
          <a href="news.asp"> Jobs</a>
        </li>
        <li>
          <a href="contact.asp">Post Jobs</a>
        </li>
        <li>
          <a href="about.asp">Register</a>
        </li>
      </ul>
    </div>
  );
}
