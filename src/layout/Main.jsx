import React, { Component } from "react";
import Movies from "../components/Movies";
import SearchBar from "../components/SearchBar";

class Main extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=8671cdf1&s=avengers`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (text,type= "all")=>{
    fetch(`http://www.omdbapi.com/?apikey=8671cdf1&s=${text}${type != 'all' ? `&type=${type}` : ""}`)
    .then((response) => response.json())
    .then((data) => this.setState({ movies: data.Search }));
  }


  render() {
    return (
      <div className="container">
        <SearchBar searchMovies={this.searchMovies} />
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default Main;
