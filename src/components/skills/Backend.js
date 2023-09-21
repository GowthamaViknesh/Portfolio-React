import React from 'react';

const Backend = () => {
  return (
    <div className='skills_content'>
      <h3 className='skills_title'>BackEnd Developer</h3>

      <div className='skills_box'>
        <div className='skills_group'>
          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>Node JS</h3>
              <span className='skills_level'>InterMediate</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>Express JS</h3>
              <span className='skills_level'>InterMediate</span>
            </div>
          </div>

          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>Mongo DB</h3>
              <span className='skills_level'>InterMediate</span>
            </div>
          </div>
        </div>

        <div className='skills_group'>
          <div className='skills_data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills_name'>AWS - Amazon Web Services</h3>
              <span className='skills_level'>Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
