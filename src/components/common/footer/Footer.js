import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; Mytheresa Code Challenge {new Date().getFullYear()}</p>
      {/* todo */}
      <p>
        <Link className="about" to="/movie/about">
          About this Project
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
