import React from 'react'
import './styles/style.scss'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
];
const HomeLanding = () => {

  
  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
      if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo(0);
      }
  };
  const onPrevStart = (currentItem, nextItem) => {
      if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo('single-slide'.length);
      }
  };
  return (
    
    <div className="HomeLanding-banner">
        <div className="left_landing">
            <h1>Develop high performance website through our team </h1>
            <p>Our global network consists of a wide range of trainers, advisors, technical experts, and consultants. </p>
            
            <div className="buttons">
                <Link to='/' className="hover-button">Donate now</Link>
              <div className="watch">
                <div className="border"></div>
                <div className="border2"></div>
                <div className="icon "></div>
                <p>Watch now</p>
              </div>
            </div>
               
        </div>
        <div className="right-landing">
        <Carousel className="slider" 
                breakPoints={breakPoints} 
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
              <div className="text">
                <h1>Innovative Solutions to Professional Websites</h1>
                <p>We help education leaders to be changemakers 
                who resolve problems using 
                innovative solutions.</p>
                <Link to="/" className="hover-button">Learn More</Link>
              </div>
            </Carousel>
            
            <div className="border1"></div>
            <div className="border1 border2"></div>
            <div className="border1 border3"></div>
            <div className="icon1"></div>
        </div>
    </div>
  )
}

export default HomeLanding