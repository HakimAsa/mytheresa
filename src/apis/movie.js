import { sleep, httpRequest } from './base';
import CONS from '../utils/Constants.js';
import { doSetFullUrl as dfu } from '../utils/Globals.js';
import HV from '../utils/HttpVerbs';
import RequestErrors from '../utils/RequestErrors';

//get all movies by genre
export const getMoviesByGenre = async (genreId, pageNumber) => {
  await sleep(2000);
  try {
    //sending get request to discover/movie{?api_key=...}

    const endPoint = dfu(true, CONS.DISCOVER, `${CONS.MOVIE}?api_key=${CONS.API_KEY}&with_genres=${genreId}&page=${pageNumber}`); //discover/movie
    const res = await httpRequest(endPoint, HV.GET, false);

    return res;
  } catch (error) {
    return RequestErrors(error);
  }
};

//get a single movie by its id
export const getMovie = async (movieId) => {
  await sleep(2000);
  try {
    //sending get request to api/movie/movie_id...
    const endPoint = dfu(true, CONS.MOVIE, `${movieId}?api_key=${CONS.API_KEY}&&language=en-US`); //movie/movie_id
    const res = await httpRequest(endPoint, HV.GET, false);

    return res;
  } catch (error) {
    return RequestErrors(error);
  }
};
