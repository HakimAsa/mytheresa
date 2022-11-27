import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import './Home.scss';
import Carousel from '../../components/carousel/Carousel';
import { getMoviesByGenre } from '../../apis/movie';
import { setActionMovies, setCrimeMovies, setDramaMovies } from '../../stores/Movie';
import Loader from '../../components/common/loader/Loader';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const actionMovies = useSelector(({ movie }) => movie.value.actionMovies);
  const crimeMovies = useSelector(({ movie }) => movie.value.crimeMovies);
  const dramaMovies = useSelector(({ movie }) => movie.value.dramaMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchActionMovies = async (genreId, pageNumber) => {
      setLoading(true);
      const response = await getMoviesByGenre(genreId, pageNumber);
      if (response.status === 200) {
        if (genreId === 28) {
          response.data && dispatch(setActionMovies(response.data.results));
        } else if (genreId === 80) {
          response.data && dispatch(setCrimeMovies(response.data.results));
        } else if (genreId === 18) {
          response.data && dispatch(setDramaMovies(response.data.results));
        }
        setLoading(false);
        console.log('success');
        // toast.success(fr.fetchSuccessMsg);
      } else {
        setLoading(false);
        console.error(response || response.message);
        // toast.error(response || response.message);
      }
    };
    fetchActionMovies(28, 1);
    fetchActionMovies(80, 5);
    fetchActionMovies(18, 30);
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Carousel data={actionMovies} genreName="Movie of Actions" />
      <Carousel data={crimeMovies} genreName="Movie of Crime" />
      <Carousel data={dramaMovies} genreName="movie of Drama" />

      <div className="empty"></div>
    </>
  );
};

export default Home;
