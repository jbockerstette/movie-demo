import React, { Component } from 'react';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentWillMount() {
    fetch('https://swapi.co/api/people/1')
      .then(response => response.json())
      .then(({ results: items }) => this.setState({ items }));
  }

  render() {
    return (
      <div>
        <NavBar title="<Hi>" />
      </div>
    );
  }
}

export default App;
