import React, { Component } from 'react';
import NavBar from './NavBar';
import ItemGrid from './ItemGrid';

const API_KEY = '31abd4c5ab9b3540be79a676a989bddd';
const MOVIE_DB_API_BASE = 'https://api.themoviedb.org/3';
const configUrl = `${MOVIE_DB_API_BASE}/configuration?api_key=${API_KEY}`;
const moviesUrl = `${MOVIE_DB_API_BASE}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      config: {}
    };
  }
  // https://api.themoviedb.org/3/configuration?api_key=31abd4c5ab9b3540be79a676a989bddd
  componentWillMount() {
    fetch(configUrl)
      .then(response => response.json())
      .then(({ images: config }) => this.setState({ config }))
      .then(() =>
        fetch(moviesUrl)
          .then(response => response.json())
          .then(({ results: items }) => this.setState({ items }))
      );
  }

  render() {
    const { items, config } = this.state;
    console.log(items, config);

    return (
      <div>
        <NavBar title="<Hi>" />
        <ItemGrid items={items} config={config} />
      </div>
    );
  }
}

export default App;
