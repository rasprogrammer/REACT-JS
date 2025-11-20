import { Link } from "react-router-dom";

export default function MovieItem({ movie }) {
  return (
    <>
      <article className="card action scifi">
        <div
          className="poster"
          style={{
            backgroundImage:
              `url(${movie.Poster})`,
          }}
        ></div>
        <div className="card-body">
          <div className="meta">
            <h3 className="title">{movie.Title}</h3>
            <div className="sub">
              <span>2014</span> • <span>{movie.Runtime}</span>
            </div>
            <div className="genres" aria-hidden>
              <span className="badge">{movie.Genre}</span>
            </div>
          </div>
          <div className="rating">{movie.imdbRating} ★</div>
        </div>
        <div className="actions">
          <Link className="btn" to={`/movie/${movie.imdbID}`}>
            Details
          </Link>
          <span className="muted">Director: {movie.Director}</span>
        </div>
      </article>
    </>
  );
}
