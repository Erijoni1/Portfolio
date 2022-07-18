import React from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import { Data1 } from "./data";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Partner.scss";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 750, itemsToShow: 3 },
  { width: 1000, itemsToShow: 4 },
  { width: 1100, itemsToShow: 5 },
];
const Partners = () => {
  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo("single-slide".length);
    }
  };
  return (
    <div className="Partners__container">
      <h1>Partners</h1>
      <div className="partner_items">
        <Carousel
          className="slider"
          breakPoints={breakPoints}
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          disableArrowsOnEnd={false}
        >
          {Data1.map((props) => {
            return (
              <div className="partner_item">
                <div className="img-container">
                  <div
                    className="img"
                    style={{ content: `url(${props.img})` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Partners;
