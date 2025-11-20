import { Routes, Route, Link } from "react-router-dom";

export default function Header({ onSearch }) {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  return (
    <>
      <header>
        <Link className="logo" to="/">
          <div className="mark">ME</div>
          <div>
            <h1>Movie Explorer</h1>
            <p>Discover & preview — no JS</p>
          </div>
        </Link>

        <div className="controls">
          <div
            className="search"
            role="search"
            aria-label="Search movies (UI only)"
          >
            <input placeholder="Search movies (UI only)" aria-label="Search" onKeyDown={handleSearch} />
            <div className="btn" id="searchMovie">Search</div>
          </div>

        </div>
      </header>
    </>
  );
}
