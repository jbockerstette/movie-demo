import React from 'react';
import PropTypes from 'prop-types';
import './Poster.css';

const BASE_URL = 'http://image.tmdb.org/t/p/w92';

const Poster = props => {
  const { path } = props;
  const src = `${BASE_URL}${path}`;

  return (
    <div className="item">
      <img className="poster" src={src} alt="" srcSet="" />
    </div>
  );
};

Poster.defaultProps = {
  path: ''
};

Poster.propTypes = {
  path: PropTypes.string
};

export default Poster;
