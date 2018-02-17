import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Consts from './consts';
import BackDrop from './BackDrop';
import Poster from './Poster';

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
    const { movie } = this.state;
    console.log(movie);
    console.log(this.props);

    return (
      <div>
        <BackDrop path={movie.backdrop_path} />

        <span>
          <Poster path={movie.poster_path} />
        </span>
        <span>
          <h3>title</h3>
          <h4>date</h4>
          <h5>desc</h5>
        </span>
      </div>
    );
  }
}

MovieDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ movieId: PropTypes.string })
  }).isRequired
};

export default MovieDetail;
