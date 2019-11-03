import React from 'react';
import Carousel from '../../components/molecules/carousel/Carousel';
import ServiceSection from '../../components/organisms/serviceSection/serviceSection';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Carousel />
      <ServiceSection />
    </div>
  );
}

export default Home;
