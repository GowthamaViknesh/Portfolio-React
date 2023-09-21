import React from 'react';
import '../skills/skills.css';

const Frontend = () => {
  return (
    <div className='skills_content'>
      <h3 className='skills_title'>FrontEnd Developer</h3>

      <div className='skills_box'>
        <div className='skills_group'>
          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>HTML</h3>
              <span className='skills_level'>Advanced</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>CSS</h3>
              <span className='skills_level'>InterMediate</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>JavaScript</h3>
              <span className='skills_level'>InterMediate</span>
            </div>
          </div>
        </div>

        <div className='skills_group'>
          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>BootStrap</h3>
              <span className='skills_level'>InterMediate</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>GitHub</h3>
              <span className='skills_level'>InterMediate</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>React JS</h3>
              <span className='skills_level'>InterMediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
