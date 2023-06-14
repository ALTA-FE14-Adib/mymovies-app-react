import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Layout from "../components/Layout";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
}

const NowPlayingMovies: React.FC = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<any>(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${
            import.meta.env.VITE_MOVIE_API
          }`
        );
        setMovies(response.data.results);
      } catch (error: any) {
        console.log("error:", error.message);
      }
    };

    fetchMovies();
  }, []);

  const handleNavigateToDetail = (movieId: number) => {
    navigate(`/detail-movie?movieId=${movieId}`);
  };

  if (movies.length === 0) {
    return <div className="text-2xl">Loading...</div>;
  }

  return (
    <Layout>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              id="movie"
              imageSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              showDescription={true}
              overview={movie.overview}
              showButton={true}
              movieTitle={movie.title}
              releaseYear={movie.release_date}
              onNavigate={() => handleNavigateToDetail(movie.id)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NowPlayingMovies;
