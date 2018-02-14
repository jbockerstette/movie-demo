import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

const Item = props => {
  const { baseUrl, path, size } = props;
  const src = `${baseUrl}${size}/${path}`;
  return (
    <div className="item">
      <button className="btn-raised">
        <img src={src} alt="" srcSet="" />
      </button>
    </div>
  );
};

Item.defaultProps = {
  baseUrl: '',
  size: '',
  path: ''
};

Item.propTypes = {
  baseUrl: PropTypes.string,
  size: PropTypes.string,
  path: PropTypes.string
};

export default Item;
