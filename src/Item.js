import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

const Item = props => <div className="item">{props.item.title}</div>;
Item.propTypes = {
  item: PropTypes.shape({ title: PropTypes.string }).isRequired
};

export default Item;
