import React, { Component } from 'react';
import NavBar from './NavBar';
import ItemGrid from './ItemGrid';

const API_KEY = '31abd4c5ab9b3540be79a676a989bddd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  // https://api.themoviedb.org/3/movie/550?api_key=31abd4c5ab9b3540be79a676a989bddd
  // https://api.themoviedb.org/3/discover/movie?api_key=31abd4c5ab9b3540be79a676a989bddd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
  componentWillMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=31abd4c5ab9b3540be79a676a989bddd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    )
      .then(response => response.json())
      .then(({ results: items }) => this.setState({ items }));
  }

  render() {
    const { items } = this.state;
    console.log(items);

    return (
      <div>
        <NavBar title="<Hi>" />
        <ItemGrid items={items} />
      </div>
    );
  }
}

export default App;
