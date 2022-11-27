import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Details from '../pages/moviedetails/Details';
import Wishlist from '../pages/wishlist/Wishlist';

const MythRoutes = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/movie-details/:movieId" element={<Details />} exact />
        <Route path="/movie/wishlist" element={<Wishlist />} exact />
        <Route path="/movie/about" element={<About />} exact />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default MythRoutes;
