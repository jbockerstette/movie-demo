import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import PosterGrid from './PosterGrid';
import MovieDetail from './MovieDetail';
import Consts from './consts';

const configUrl = `${Consts.movieDbApiBaseUrl}/configuration?api_key=${
  Consts.apiKey
}`;

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
      .then(({ images: config }) => this.setState({ config }))
      .catch(console.error);
  }

  render() {
    const { config } = this.state;
    console.log(config);

    return (
      <Router>
        <div>
          <Link to="/">
            <NavBar title="< Home >" />
          </Link>
          <Route exact path="/" component={PosterGrid} />
          <Route path="/movie/:movieId" component={MovieDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
