import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Header.scss';
const Header = () => {
  const wishList = useSelector(({ movie }) => movie.value.wishlist);
  const getwishList = localStorage.getItem('wishList');
  const wishlist = getwishList && getwishList !== 'undefined' ? JSON.parse(getwishList) : [];

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          MYTHERESA
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link className="whishlist" to="/movie/wishlist">
              <span className="total-whishlist">{wishlist.length || wishList.length}</span>
              <span className="whishlist-text">whishlist</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
