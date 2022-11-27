import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { ImStatsBars } from 'react-icons/im';
import { FcCalendar } from 'react-icons/fc';
import { MdTitle } from 'react-icons/md';
import { BiUpvote } from 'react-icons/bi';
import { RiPriceTagLine } from 'react-icons/ri';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { FaMedapps } from 'react-icons/fa';

import './Details.scss';
import { delFromWishlist, setCurrentMovie, setIsWishlist, setWishlist } from '../../stores/Movie';
import { getMovie } from '../../apis/movie';
import CONS from '../../utils/Constants';
import Loader from '../../components/common/loader/Loader';
const Details = () => {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const currentMovie = useSelector(({ movie }) => movie.value.currentMovie);
  // const isWishlist = useSelector(({ movie }) => movie.value.isWishlist);todo
  const dispatch = useDispatch();

  const location = useLocation();
  let path = useRef(location.pathname.split('/')[2]);
  path = path.current;

  useEffect(() => {
    setLoading(true);
    const getMovieById = async () => {
      const res = await getMovie(path);

      if (res.status === 200) {
        dispatch(setCurrentMovie(res.data));
        setLoading(false);
      } else {
        setLoading(false);
        console.error(response || response.message);
        //
      }
    };

    getMovieById();
  }, [dispatch]);

  const addToWishlist = () => {
    setAdded(true); // make this persistent
    dispatch(setWishlist(currentMovie));
  };

  const removeFromWishlist = () => {
    dispatch(delFromWishlist(currentMovie.id));
    setAdded(false);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {currentMovie && Object.keys(currentMovie).length > 0 ? (
        <>
          <div className="details">
            <div>
              <img src={CONS.API_IMG + currentMovie.poster_path} alt={currentMovie.title} className="details-image" />
            </div>
            <div className="action">
              {added && (
                <button className="action-button-remove" onClick={removeFromWishlist}>
                  Remove From Wishlist
                </button>
              )}

              {!added && (
                <button className="action-button-add" onClick={addToWishlist}>
                  Add to Wishlist
                </button>
              )}
              <p className="paragraph">{currentMovie.overview}</p>
            </div>
          </div>
          <div className="additional-info">
            <ul>
              <li>
                {' '}
                <MdTitle /> <span className="add-info-title">Title:</span> {currentMovie.title}
              </li>
              <li>
                {' '}
                <FcCalendar /> <span className="add-info-title">Release Date:</span> {currentMovie.release_date}
              </li>
              <li>
                {' '}
                <FaMedapps /> <span className="add-info-title">Popularity:</span> {currentMovie.popularity}
              </li>
              <li>
                {' '}
                <ImStatsBars /> <span className="add-info-title">Vote Average:</span> {currentMovie.vote_average}
              </li>
              <li>
                {' '}
                <BiUpvote /> <span className="add-info-title">Vote Count:</span> {currentMovie.vote_count}
              </li>
              <li>
                {' '}
                <RiPriceTagLine /> <span className="add-info-title">Tag Line:</span> {currentMovie.tagline}
              </li>
              <li>
                {' '}
                <HiOutlineStatusOnline /> <span className="add-info-title">Status:</span> {currentMovie.status}
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Details;
