import React from 'react';
import PropTypes from 'prop-types';
import Poster from './Poster';
import './PosterGrid.css';

const PosterGrid = props => {
  const { items, config } = props;
  console.log(config);
  return (
    <div className="grid">
      {items.map(item => (
        <Poster
          key={item.title}
          baseUrl={config.base_url}
          size={config.poster_sizes[0]}
          path={item.poster_path}
        />
      ))}
    </div>
  );
};
// backdrop
// http://image.tmdb.org/t/p/w300/qLmdjn2fv0FV2Mh4NBzMArdA0Uu.jpg
// poster
// http://image.tmdb.org/t/p/w92/q0R4crx2SehcEEQEkYObktdeFy.jpg
PosterGrid.defaultProps = {
  items: [],
  config: {}
};

PosterGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string })),
  config: PropTypes.arrayOf(PropTypes.shape({ base_url: PropTypes.string }))
};

export default PosterGrid;
