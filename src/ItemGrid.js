import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemGrid extends Component {
  render() {
    const { items = [] } = this.props;

    return (
      <div>
        <ul>{items.map(item => <li key={item.title}>{item.title}</li>)}</ul>
      </div>
    );
  }
}

ItemGrid.propTypes = {
  items: PropTypes.array
};

export default ItemGrid;
