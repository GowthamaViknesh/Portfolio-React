import React, { useState } from 'react';
import '../../components/qualification/quali.css';

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section className='qualification section'>
      <h2 className='section_title'>Qualification</h2>
      <span className='section_subtitle'>My Personal Journey</span>

      <div className='qualification_container container'>
        <div className='qualification_tabs'>
          <div
            className={
              toggle === 1
                ? 'qualification_button qualification_active button-flex'
                : 'qualification_button button-flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-graduation-cap qualification_icon'></i>
            Education
          </div>

          <div
            className={
              toggle === 2
                ? 'qualification_button qualification_active button-flex'
                : 'qualification_button button-flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-briefcase qualification_icon'></i>
            Certification
          </div>
        </div>

        <div className='qualification_sections'>
          <div
            className={
              toggle === 1
                ? 'qualification_content qualification_content-active'
                : 'qualification_content'
            }
          >
            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>Bsc Computer-Technology</h3>
                <span className='qualification_subtitle'>
                  NGM College of Arts & Science
                </span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2017 - 2020
                </div>
              </div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>

            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>Higher-Secondary-School</h3>
                <span className='qualification_subtitle'>T.R.H.S School</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 2016-2017
                </div>
              </div>
            </div>

            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>Secondary-School</h3>
                <span className='qualification_subtitle'>T.R.H.S School</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> 2014-2015
                </div>
              </div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? 'qualification_content qualification_content-active'
                : 'qualification_content'
            }
          >
            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>
                  Full Stack Web-Developer
                </h3>
                <span className='qualification_subtitle'>Guvi-IIT Madras</span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2023-Present
                </div>
              </div>
            </div>

            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>Udemey</h3>
                <span className='qualification_subtitle'>
                  FrontEnd Developer
                </span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2023 - Present
                </div>
              </div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>

            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>Projects</h3>
                <span className='qualification_subtitle'>
                  FrontEnd & BackEnd
                </span>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i> GitHub
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
