import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieDetail extends Component {
  componentWillMount() {}

  render() {
    const { match } = this.props;
    console.log(this.props);

    return <div>{`MovieDetail ${match.params.movieId}`}</div>;
  }
}

MovieDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ movieId: PropTypes.string })
  }).isRequired
};

export default MovieDetail;
