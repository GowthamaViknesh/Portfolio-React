import React from 'react';
import '../Footer/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_container container'>
        <h1 className='footer_title'>Gowthama Viknesh</h1>
        <ul className='footer_list'>
          <li>
            <a href='#about' className='footer_link'>
              About
            </a>
          </li>
          <li>
            <a href='#projects' className='footer_link'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contacts' className='footer_link'>
              Contacts
            </a>
          </li>
        </ul>
        <div className='footer_social'>
          <a
            href='https://instagram.com/king_of_black_white?igshid=OGQ5ZDc2ODk2ZA=='
            className='footer_social-link'
            target='_blank'
          >
            <i className='bx bxl-instagram'></i>
          </a>
          <a
            href='www.linkedin.com/in/gowtham1820'
            className='footer_social-link'
            target='_blank'
          >
            <i class='bx bxl-linkedin'></i>
          </a>
          <a
            href='https://github.com/GowthamaViknesh'
            className='footer_social-link'
            target='_blank'
          >
            <i className='bx bxl-github'></i>
          </a>
        </div>
        <span className='footer_copy'>&#169; Gowtham. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
