import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import axios from "axios";

interface Movie {
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
}

const DetailMovie:React.FC = () => {
  const location = useLocation();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const searchParams = new URLSearchParams(location.search);
      const movieId = searchParams.get("movieId");

      try {
        const response = await axios.get<any>(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
            import.meta.env.VITE_MOVIE_API
          }`
        );
        setMovie(response.data);
      } catch (error:any) {
        console.log("error :", error.message);
      }
    };

    fetchMovie();
  }, [location.search]);

  if (!movie) {
    return <div className="text-2xl">Loading...</div>;
  }

  return (
    <Layout>
      <div className="grid grid-cols-1">
        <div className="flex flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="my-4"
          />
          <div className="ml-8 my-4 mr-8">
            <h1 className="text-3xl font-semibold ">{movie.title}</h1>
            <p>Release Date: {movie.release_date}</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailMovie;
