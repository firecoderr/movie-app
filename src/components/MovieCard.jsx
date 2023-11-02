import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function MovieCard({ movie, searchDetail }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => {
          navigate("/movie-details");
          window.scrollTo(0, 0);
          searchDetail(movie.Title);
        }}
        className="movie-card"
        key={movie.imdbID}
      >
        <img
          className="movie-card-image"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
        <div className="movie-card-info">
          <i className="fa-solid fa-circle-play"></i>
          <h4 className="movie-card-type">{movie.Type}</h4>
          <h2 className="movie-card-title">{movie.Title}</h2>
          <h5 className="movie-card-year">{movie.Year}</h5>
        </div>
      </div>
    </>
  );
}
