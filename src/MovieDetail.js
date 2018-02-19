import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import Consts from './consts';
import BackDrop from './BackDrop';
import Poster from './Poster';
import './MovieDetail.css';

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
    const date = new Date(movie.release_date).toLocaleDateString('en-US');

    return (
      <div className="container">
        <div className="back-drop">
          <BackDrop path={movie.backdrop_path} />
        </div>
        <ReactCSSTransitionGroup
          component="div"
          className="poster1"
          transitionName="anim"
          transitionAppear
          transitionAppearTimeout={5000}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Poster path={movie.poster_path} />
        </ReactCSSTransitionGroup>
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
