import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Poster.css';
import Consts from './consts';

const Poster = props => {
  const { path, movieId } = props;
  const src = `${Consts.baseImageUrl}${path}`;

  return (
    <div className="item">
      <Link to={`movie/${movieId}`}>
        <img className="poster" src={src} alt="" srcSet="" />
      </Link>
    </div>
  );
};

Poster.defaultProps = {
  path: '',
  movieId: ''
};

Poster.propTypes = {
  path: PropTypes.string,
  movieId: PropTypes.number
};

export default Poster;
