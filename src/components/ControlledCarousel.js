import { useState } from 'react';
import "./ControlledCarousel.css"
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/military_1920.jpg'
import img2 from '../assets/images/military-g385_1920.jpg'
import img3 from '../assets/images/airsoft-replica_1920.jpg'



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={img1} className='d-block w-100 cover' alt="img1" />
        <Carousel.Caption>
          <h3>Vítejte v Dynamitce!</h3>
          <p>Jsme airsoftové CQB hřiště, nově přesunuto v Bohnicích.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2}  className='d-block w-100 cover' alt="img2" />
        <Carousel.Caption>
          <h3>Přijď si zahrát!</h3>
          <p>Ať už jsi začátečník nebo zkušený hráč, jsi u nás vítán.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} className='d-block w-100 cover' alt="img3" />
        <Carousel.Caption>
          <h3>Co děláme?</h3>
          <p>Organizujeme pravidelné akce, týmové soutěže a nabízíme vybavení k pronájmu.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;