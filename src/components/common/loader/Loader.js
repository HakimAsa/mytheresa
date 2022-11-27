import React from 'react';

import './Loader.scss';
const Loader = ({ msg = 'Please wait ...' }) => {
  return <div className="loading">{msg}</div>;
};

export default Loader;
