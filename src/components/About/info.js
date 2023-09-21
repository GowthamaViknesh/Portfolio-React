import React from 'react';

const Info = () => {
  return (
    <div className='about_info grid'>
      <div className='about_box'>
        <i className='bx bx-award about_icon'></i>

        <h3 className='about_title'>Experience</h3>
        <span className='about_subtitle'>6 Months of Working</span>
      </div>

      <div className='about_box'>
        <i className='bx bx-briefcase-alt about_icon'></i>
        <h3 className='about_title'>Completed</h3>
        <span className='about_subtitle'>5+ Projects</span>
      </div>

      <div className='about_box'>
        <i className='bx bx-support about_icon'></i>
        <h3 className='about_title'>Ceritificate</h3>
        <span className='about_subtitle'>Guvi-IIT Madras</span>
      </div>
    </div>
  );
};

export default Info;
