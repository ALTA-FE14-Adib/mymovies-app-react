import { Component } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import axios from "axios";

interface MovieStates {
  movies: Array<string | number>;
}

export default class NowPlayingMovies extends Component<MovieStates> {
  state = {
    movies: [],
  };

  fetchMovies() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_MOVIE_API
        }`
      )
      .then((response) => {
        this.setState({ movies: response.data.results });
      })
      .catch((error) => {
        console.log("error : ", error.message);
      });
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies } = this.state;

    console.log("hasil movie : ", movies);
    return (
      <Layout>
        <div className="overflow-x-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3">
            {movies.map((movie: any) => (
              <Card
                key={movie.id}
                id={movie.id}
                imageSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                showDescription={true}
                overview={movie.overview}
                showButton={true}
                movieTitle={movie.title}
                releaseYear={movie.release_date}
              />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}
