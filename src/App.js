import React, { Component } from 'react';
import NavBar from './NavBar';
import PosterGrid from './PosterGrid';

const API_KEY = '31abd4c5ab9b3540be79a676a989bddd';
const MOVIE_DB_API_BASE = 'https://api.themoviedb.org/3';
const configUrl = `${MOVIE_DB_API_BASE}/configuration?api_key=${API_KEY}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {}
    };
  }
  // https://api.themoviedb.org/3/configuration?api_key=31abd4c5ab9b3540be79a676a989bddd
  componentWillMount() {
    fetch(configUrl)
      .then(response => response.json())
      .then(({ images: config }) => this.setState({ config }));
  }

  render() {
    const { config } = this.state;
    console.log(config);

    return (
      <div>
        <NavBar title="<Hi>" />
        <PosterGrid />
      </div>
    );
  }
}

export default App;
