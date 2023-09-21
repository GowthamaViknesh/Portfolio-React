import React, { useState } from 'react';
import {
  FaBootstrap,
  FaConnectdevelop,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import '../Projects/project.css';
import { BiLogoJavascript } from 'react-icons/bi';

const Projects = () => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className='services section' id='services'>
      <h2 className='section_title'>Projects</h2>
      <span className='section_subtitle'>
        "Turning Ideas into Reality: Exploring Our Diverse Portfolio of
        Projects"
      </span>

      <div className='services_container container grid'>
        <div className='services_content'>
          <div>
            <i className='uil uil-web-grid services_icon'></i>
            <h3 className='services_title'>
              HTML & CSS & BS <br /> JavaScript
            </h3>
          </div>
          <span className='services_button' onClick={() => toggleTab(1)}>
            View More
            <i className='uil uil-arrow-right services_button-icon'></i>
          </span>
          <div
            className={
              toggle === 1 ? 'services_modal active_modal' : 'services_modal'
            }
          >
            <div className='services_modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services_modal-close'
              ></i>
              <h3 className='services_modal-title'>Projects</h3>
              <p className='services_modal_description'>
                <FaHtml5 className='items-icons' />
                <FaCss3Alt className='items-icons' />
                <FaBootstrap className='items-icons' />
                <BiLogoJavascript className='items-icons' />
              </p>
              <ul className='services_modal-services grid'>
                <li className='services_modal-service'>
                  <i className='uil uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    Survey Form -
                    <a
                      href='https://gowthamaviknesh.github.io/Survey_Form-DOM/'
                      target='_blank'
                      className='demo_button'
                    >
                      Try It!
                    </a>
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    Calculator -
                    <a
                      href=' https://gowthamaviknesh.github.io/Calculator-App-JS-HTML-CSS/'
                      target='_blank'
                      className='demo_button'
                    >
                      Try It!
                    </a>
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    E-Commerce -
                    <a
                      href='https://gowthamaviknesh.github.io/E-commerce-Webcode/'
                      target='_blank'
                      className='demo_button'
                    >
                      Try It!
                    </a>
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    Weather App -
                    <a
                      href=' https://gowthamaviknesh.github.io/Api-Projects/WeatherApi/'
                      target='_blank'
                      className='demo_button'
                    >
                      Try It!
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services_content'>
          <div>
            <i className='uil uil-arrow services_icon'></i>
            <h3 className='services_title'>
              React <br />
              Projects
            </h3>
          </div>
          <span className='services_button' onClick={() => toggleTab(2)}>
            View More
            <i className='uil uil-arrow-right services_button-icon'></i>
          </span>
          <div
            className={
              toggle === 2 ? 'services_modal active_modal' : 'services_modal'
            }
          >
            <div className='services_modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services_modal-close'
              ></i>
              <h3 className='services_modal-title'>Projects</h3>
              <p className='services_modal_description'>
                <FaReact className='items-icons' />
                <FaNodeJs className='items-icons' />
              </p>
              <ul className='services_modal-services grid'>
                <li className='services_modal-service'>
                  <i className='uil uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    Todo App -
                    <a
                      href='https://cosmic-fairy-759b41.netlify.app/'
                      target='_blank'
                      className='demo_button'
                    >
                      Try It!
                    </a>
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    Shop Cart -
                    <a
                      href='https://master--luminous-dasik-9de5ca.netlify.app/'
                      target='_blank'
                      className='demo_button'
                    >
                      Try It!
                    </a>
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    Form Validation -
                    <a
                      href='https://regal-pasca-388503.netlify.app/'
                      target='_blank'
                      className='demo_button'
                    >
                      Try It!
                    </a>
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    Authentication & Authorization -
                    <a
                      href='https://dazzling-fox-d46d7b.netlify.app/'
                      target='_blank'
                      className='demo_button'
                    >
                      Try It!
                    </a>
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    URL-Shortner
                    <a
                      href='https://moonlit-marshmallow-122de1.netlify.app/'
                      target='_blank'
                      className='demo_button'
                    >
                      Try It!
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services_content'>
          <div>
            <i className='uil uil-edit services_icon'></i>
            <h3 className='services_title'>
              Mern <br />
              Projects
            </h3>
          </div>
          <span className='services_button' onClick={() => toggleTab(3)}>
            View More
            <i className='uil uil-arrow-right services_button-icon'></i>
          </span>
          <div
            className={
              toggle === 3 ? 'services_modal active_modal' : 'services_modal'
            }
          >
            <div className='services_modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services_modal-close'
              ></i>
              <h3 className='services_modal-title'>FrontEnd & BackEnd</h3>
              <p className='services_modal_description'>
                <FaConnectdevelop className='items-icons' />
              </p>
              <ul className='services_modal-services grid'>
                <li className='services_modal-service'>
                  <i className='uil uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    Gold Rate Calculator -
                    <a
                      href='https://6505b09225bea31c9a9fd43a--silver-haupia-df4d2b.netlify.app/'
                      target='_blank'
                      className='demo_button'
                    >
                      Try It!
                    </a>
                  </p>
                </li>
                <li className='services_modal-service'>
                  <i className='uil uil uil-check-circle services_modal-icon'></i>
                  <p className='services_modal-info'>
                    Social-Media - InDeveloping
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
