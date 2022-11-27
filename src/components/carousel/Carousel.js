import React, { useState } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

import CONS from '../../utils/Constants';
import './Carousel.scss';
const Carousel = ({ data, genreName }) => {
  const [position, setPosition] = useState(0);

  const len = data.length;

  const slideLeft = () => {
    setPosition(position === 0 ? len - 1 : position - 1);
  };

  const slideRight = () => {
    setPosition(position === len - 1 ? 0 : position + 1);
  };
  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <TfiAngleLeft className="left-arrow" onClick={slideLeft} />
      <TfiAngleRight className="right-arrow" onClick={slideRight} />
      {data.map((d, idx) => {
        return (
          <div className={idx === position ? 'slide active' : 'slide'} key={d.id.toString()}>
            {idx === position && (
              <>
                <h4 className="genreName">{genreName}</h4>
                <Link to={`/movie-details/${d.id}`}>
                  <h6 className="movie-title">{d.title}</h6>
                </Link>
                <img src={CONS.API_IMG + d.backdrop_path} alt="carousel" className="image" />
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
