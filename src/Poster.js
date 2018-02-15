import React from 'react';
import PropTypes from 'prop-types';
import './Poster.css';

const Poster = props => {
  const { baseUrl, path, size } = props;
  const src = `${baseUrl}${size}/${path}`;
  console.log(src);

  return (
    <div className="item">
      <img className="poster" src={src} alt="" srcSet="" />
    </div>
  );
};

Poster.defaultProps = {
  baseUrl: '',
  size: '',
  path: ''
};

Poster.propTypes = {
  baseUrl: PropTypes.string,
  size: PropTypes.string,
  path: PropTypes.string
};

export default Poster;
