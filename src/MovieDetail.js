import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overdrive from 'react-overdrive';
import Consts from './consts';
import BackDrop from './BackDrop';
import Poster from './Poster';
import './MovieDetail.css';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true
    };
  }

  componentWillMount() {
    const { match } = this.props;
    fetch(
      `${Consts.movieDbApiBaseUrl}/movie/${match.params.movieId}?api_key=${
        Consts.apiKey
      }&language=en-US`
    )
      .then(response => response.json())
      .then(movie => this.setState({ movie, loading: false }))
      .catch(console.error);
  }

  render() {
    const { movie, loading } = this.state;
    const { match } = this.props;
    const date = new Date(movie.release_date).toLocaleDateString('en-US');
    if (loading) return null;

    return (
      <div className="container">
        <div className="back-drop">
          <BackDrop path={movie.backdrop_path} />
        </div>
        <Overdrive id={match.params.movieId.toString()} className="poster1">
          <Poster path={movie.poster_path} key="poster" />
        </Overdrive>
        <div className="my-text">
          <h3 className="title">{movie.title}</h3>
          <p>{`Release date: ${date}`}</p>
          <p>{movie.overview}</p>
        </div>
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
