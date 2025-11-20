import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import Header from "./Header";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMovies = async () => {
    setLoading(true);
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=f30f84d6&s=action"
    );
    const data = await response.json();
    setMovies(data.Search || []);
    setLoading(false);
  };

  const searchMovies = async (query = "action") => {
    setLoading(true);
    const response = await fetch(`https://www.omdbapi.com/?apikey=f30f84d6&s=${query}`);
    const data = await response.json();
    setMovies(data.Search || []);
    setLoading(false);
  };

  useEffect(() => {
    // Fetch movie data from an API or database
    loadMovies();
  }, []);

  console.log(movies);
  if (loading) {
    return <p>Loading movies...</p>;
  }

  return (
    <>
      <Header onSearch={searchMovies} />

      <section className="grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)
        ) : (
          <p>No movies found.</p>
        )}
      </section>
    </>
  );
}
