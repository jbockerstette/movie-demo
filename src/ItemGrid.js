import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './ItemGrid.css';

class ItemGrid extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="grid">
        {items.map(item => <Item key={item.title} item={item} />)}
      </div>
    );
  }
}

ItemGrid.defaultProps = {
  items: []
};

ItemGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string }))
};

export default ItemGrid;
