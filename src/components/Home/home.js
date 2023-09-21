import React from 'react';
import '../Home/home.css';
import Social from './social';
import Data from './data';
import Scrolldown from './scrolldowm';

const HomePage = () => {
  return (
    <section className='home section' id='home'>
      <div className='home_container container grid'>
        <div className='home_content grid'>
          <Social />
          <div className='home_img'></div>
          <Data />
        </div>
        <Scrolldown />
      </div>
    </section>
  );
};

export default HomePage;
