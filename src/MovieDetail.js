import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Consts from './consts';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {} };
  }

  componentWillMount() {
    const { match } = this.props;
    fetch(
      `${Consts.movieDbApiBaseUrl}/movie/${match.params.movieId}?api_key=${
        Consts.apiKey
      }&language=en-US`
    )
      .then(response => response.json())
      .then(movie => this.setState({ movie }));
  }

  render() {
    const { match } = this.props;
    const { movie } = this.state;
    console.log(movie);

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
