import Header from "./Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const loadMovie = async (id) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=f30f84d6&i=${id}`);
    const data = await response.json();
    setMovie(data);
  }

  useEffect(() => {
    loadMovie(id);
  }, [id]);

  console.log(movie);
  
  return (
    <>
      <Header />
      <div className="modal-card">
        <div
          className="modal-left"
          style={{
            backgroundImage:
              `url(${movie.Poster})`,
          }}
        ></div>
        <div className="modal-right">
          <h3>
            {movie.Title}{" "}
            <small className="muted" style={{ fontWeight: 600 }}>
              {" "}
              — {movie.Year}{" "}
            </small>
          </h3>
          <p className="muted" style={{ marginTop: 10 }}>
            {movie.Plot}
          </p>
          <div style={{ marginTop: 14 }}>
            <strong>Director:</strong> {movie.Director}
            <br />
            <strong>Duration:</strong> {movie.Runtime}
            <br />
            <strong>Cast:</strong> T. Cruise, E. Blunt
          </div>
          <p style={{ marginTop: 14 }} className="muted">
            ★ {movie.imdbRating} out of 10 IMDb
          </p>
        </div>
      </div>
    </>
  );
}
