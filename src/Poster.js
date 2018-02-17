import React from 'react';
import PropTypes from 'prop-types';
import './Poster.css';
import Consts from './consts';

const Poster = props => {
  const { path } = props;
  const src = `${Consts.posterImageUrl}${path}`;

  return <img className="poster" src={src} alt="" srcSet="" />;
};

Poster.defaultProps = {
  path: ''
};

Poster.propTypes = {
  path: PropTypes.string
};

export default Poster;
