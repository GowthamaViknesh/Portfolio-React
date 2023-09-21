import React, { useState } from 'react';
import '../Header/header.css';

const Header = () => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  //Toggel Menu
  const [toggle, showMenu] = useState(false);
  const [active, setActive] = useState('#home');
  return (
    <div>
      <header className='header'>
        <nav className='nav container'>
          <a href='index.html' className='nav_logo'>
            Gowthama Viknesh
          </a>
          <div className={toggle ? 'nav_menu show-menu' : 'nav_menu'}>
            <ul className='nav_list grid'>
              <li className='nav_item'>
                <a
                  href='#home'
                  onClick={() => setActive('#home')}
                  className={
                    active === 'home' ? 'nav_link active-link' : 'nav_link'
                  }
                >
                  <i className='uil uil-estate nav_icon'></i>Home
                </a>
              </li>
              <li className='nav_item'>
                <a
                  href='#about'
                  onClick={() => setActive('#about')}
                  className={
                    active === 'about' ? 'nav_link active-link' : 'nav_link'
                  }
                >
                  <i className='uil uil-user nav_icon'></i>About
                </a>
              </li>
              <li className='nav_item'>
                <a
                  href='#skills'
                  onClick={() => setActive('#skills')}
                  className={
                    active === 'skills' ? 'nav_link active-link' : 'nav_link'
                  }
                >
                  <i className='uil uil-file-alt nav_icon'></i>
                  Skills
                </a>
              </li>

              <li className='nav_item'>
                <a
                  href='#project'
                  onClick={() => setActive('project')}
                  className={
                    active === 'project' ? 'nav_link active-link' : 'nav_link'
                  }
                >
                  <i className='uil uil-briefcase nav_icon'></i>Projects
                </a>
              </li>
              <li className='nav_item'>
                <a
                  href='#qualification'
                  onClick={() => setActive('#qualification')}
                  className={
                    active === 'qualification'
                      ? 'nav_link active-link'
                      : 'nav_link'
                  }
                >
                  <i className='uil uil-scenery nav_icon'></i>Qualification
                </a>
              </li>
              <li className='nav_item'>
                <a
                  href='#contact'
                  onClick={() => setActive('#contact')}
                  className={
                    active === 'contact' ? 'nav_link active-link' : 'nav_link'
                  }
                >
                  <i className='uil uil-message nav_icon'></i>Contact
                </a>
              </li>
            </ul>
            <i
              className='uil uil-times nav_close'
              onClick={() => showMenu(!toggle)}
            ></i>
          </div>
          <div className='nav_toggle' onClick={() => showMenu(!toggle)}>
            <i className='uil uil-apps'></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
