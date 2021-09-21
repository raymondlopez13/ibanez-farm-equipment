import React from 'react';

function Nav() {
    return (
      <nav>
          <a href='/'><img src='/public/images/logo.png' className='home-logo' alt="Logo"/></a>
          <ul className='nav'>
              <li><a href='/about'>About</a></li>
              <li><a href='/contact'>Contact</a></li>
              <li><a href='/johndeere'>John Deere</a></li>
              <li><a href='/CAT'>CAT</a></li>
          </ul>
      </nav>
    );
  }
  
  export default Nav;

