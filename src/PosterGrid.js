import React from 'react';
import Poster from './Poster';
import './PosterGrid.css';

const API_KEY = '31abd4c5ab9b3540be79a676a989bddd';
const MOVIE_DB_API_BASE = 'https://api.themoviedb.org/3';
const moviesUrl = `${MOVIE_DB_API_BASE}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

class PosterGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentWillMount() {
    fetch(moviesUrl)
      .then(response => response.json())
      .then(({ results: items }) => this.setState({ items }));
  }

  render() {
    const { items } = this.state;
    return (
      <div className="grid">
        {items.map(item => <Poster key={item.title} path={item.poster_path} />)}
      </div>
    );
  }
}
// backdrop
// http://image.tmdb.org/t/p/w300/qLmdjn2fv0FV2Mh4NBzMArdA0Uu.jpg
// poster
// http://image.tmdb.org/t/p/w92/q0R4crx2SehcEEQEkYObktdeFy.jpg

export default PosterGrid;
