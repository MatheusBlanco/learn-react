import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Discover your Movie Mojo" />
        <p className="App-intro">Sharing a few of our favorite movies</p>
        <div className="movies">
          {
            Object
              .keys(this.state.movies)
              .map(key => <Movie key={key} meta={this.state.movies[key]} />)
          }
        </div>
      </div>
    );
  }

  constructor(){
    super();

    this.state = {
      movies: initialMovies
    };
  }
}

export default App;
