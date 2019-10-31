import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './carousel.css';
import './slider-animations.css';

const content = [
  {
    title: 'Siempre apoyando el proceso del adulto mayor',
    description: '',
    button: 'Read More',
    image: require('../../../assets/images/slider1.jpg'),
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png',
  },
  {
    title: 'Dispuestos para quienes requieran sanar',
    description: 'Desde el corazón mediante la terapía grupal.',
    button: 'Discover',
    image: require('../../../assets/images/slider2.jpg'),
    user: 'Erich Behrens',
    userProfile: 'https://i.imgur.com/0Clfnu7.png',
  },
  {
    title: 'De la mano con quienes son las semillas de la sociedad.',
    description: '',
    button: 'Buy now',
    image: require('../../../assets/images/slider3.jpg'),
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png',
  },
  {
    title: 'Apoyando los procesos familiares.',
    description: 'Para fortalecer vículos afectivos mediante los ordenes del amor',
    button: 'Buy now',
    image: require('../../../assets/images/slider4.jpg'),
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png',
  },
  {
    title: 'Literatura como herramienta para sanar.',
    description: '',
    button: 'Buy now',
    image: require('../../../assets/images/slider5.jpg'),
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png',
  },
];

function Carousel() {
  return (
    <Slider className="slider-wrapper" autoplay={3000}>
      {content.map((article, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${article.image}') no-repeat center center`, }}
        >
          <div className="inner">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </div>
          <section>
            {/* <img src={article.userProfile} alt={article.user} /> */}
            {/* <span>
              Posted by <strong>{article.user}</strong>
            </span> */}
          </section>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
