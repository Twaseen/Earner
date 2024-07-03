import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";
import CatCard from "../catCard/CatCard";
import { cards } from "../../data";

const Slide = ({ slidesToShow, arrowsScroll }) => {
    return (
      <div className="slide">
        <div className="container"></div>
        <Slider dots slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {cards.map((card) => (
            <CatCard key={card.id} card={card} />
          ))}
        </Slider>
      </div>
    );
  };
  
  export default Slide;
