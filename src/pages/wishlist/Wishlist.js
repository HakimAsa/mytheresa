import React from 'react';
import { Link } from 'react-router-dom';

import Loader from '../../components/common/loader/Loader';
import { hideCharacters } from '../../utils/Globals';
import './Wishlist.scss';

const Wishlist = () => {
  const wishList = JSON.parse(localStorage.getItem('wishList'));
  if (wishList && wishList.length === 0) {
    return <Loader msg="You don't have any wishlist yet!" />;
  }
  return (
    <div>
      <h3 className="wishlist-dash">MY WISHLIST DASHBOARD</h3>
      {wishList.map((list) => (
        <ul className="wishlist-item" key={list.id.toString()}>
          <li>
            <Link to={`/movie-details/${list.id}`} className="wishlist-details">
              <h6 className="wishlist-tittle">{list.title}</h6>
              <span className="wishlist-description">{hideCharacters(list.overview, 150)}</span>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Wishlist;
