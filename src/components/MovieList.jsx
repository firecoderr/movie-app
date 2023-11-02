/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import ClipLoader from "react-spinners/MoonLoader";

export default function MovieList({
  movies,
  searchDetail,
  loading,
  scrollToList,
}) {
  const recommendtions = [
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmY1ODUzZGItNDllOS00MDBhLTg4NmUtYjU4YjUxMGNlYmMwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      Title: "Blue Beetle",
      Type: "movie",
      Year: "2023",
      imdbID: "tt9362930",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
      Title: "Oppenheimer",
      Type: "movie",
      Year: "2023",
      imdbID: "tt15398776",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTNiNDA4NmMtNTExNi00YmViLWJkMDAtMDAxNmRjY2I2NDVjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
      Title: "Transformers: Rise of the Beasts",
      Type: "movie",
      Year: "2023",
      imdbID: "tt5090568",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg",
      Title: "F9: The Fast Saga",
      Type: "movie",
      Year: "2021",
      imdbID: "tt5433138",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjg5MTM4N2QtN2RlMS00NzBlLTg3NDktM2ExZDNmMmExMGU3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      Title: "Extraction II",
      Type: "movie",
      Year: "2023",
      imdbID: "tt12263384",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWE2ZWE5MDQtMTJlZi00MTVjLTkxOTgtNmNiYjg2NDIxN2NhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
      Title: "The Flash",
      Type: "movie",
      Year: "2023",
      imdbID: "tt0439572",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
      Title: "The Matrix Resurrections",
      Type: "movie",
      Year: "2021",
      imdbID: "tt10838180",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      Title: "Barbie",
      Type: "movie",
      Year: "2023",
      imdbID: "tt1517268",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDEwNDE5ZDUtMjQ0ZC00OTA0LTkyOTQtZGE0OTU4Njc0MjM5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_SX300.jpg",
      Title: "Venom: Let There Be Carnage",
      Type: "movie",
      Year: "2021",
      imdbID: "tt7097896",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmZmNTdiYjMtZDdmNi00ZGU4LThkYmQtZTFhZWNlYmUxYWZkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
      Title: "Tetris",
      Type: "movie",
      Year: "2023",
      imdbID: "tt12758060",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
      Title: "Black Adam",
      Type: "movie",
      Year: "2022",
      imdbID: "tt6443346",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg",
      Title: "The Super Mario Bros. Movie",
      Type: "movie",
      Year: "2023",
      imdbID: "tt6718170",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzJlM2NmZTItOGQyYS00MmE2LTkwZGUtNDFkNmJmZjRjZjcxXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg",
      Title: "Shazam! Fury of the Gods",
      Type: "movie",
      Year: "2023",
      imdbID: "tt10151854",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="the-movie-list">
        <div className="the-movie-list-top">
          <div className="the-movie-list-title">The Top:</div>
          <div className="movie-recommendations">
            <ul>
              <div className="recom-slider">
                {[recommendtions, recommendtions].map((recom) => {
                  return recom.map((item) => {
                    return (
                      <li
                        key={item.imdbID}
                        className="movie-card"
                        onClick={() => {
                          navigate("/movie-details");
                          window.scrollTo(0, 0);
                          searchDetail(item.Title);
                        }}
                      >
                        <img
                          className="movie-card-image"
                          src={
                            item.Poster !== "N/A"
                              ? item.Poster
                              : "https://via.placeholder.com/400"
                          }
                          alt={item.Title}
                        />
                        <div className="movie-card-info">
                          <i className="fa-solid fa-circle-play"></i>
                          <h4 className="movie-card-type">{item.Type}</h4>
                          <h2 className="movie-card-title">{item.Title}</h2>
                          <h5 className="movie-card-year">{item.Year}</h5>
                        </div>
                      </li>
                    );
                  });
                })}
              </div>
            </ul>
          </div>
          <div
            ref={scrollToList}
            style={{ paddingTop: "50px" }}
            className="the-movie-list-title"
          >
            The Most Ranked:
          </div>
        </div>

        {loading ? (
          <ClipLoader
            color={"white"}
            loading={true}
            cssOverride={{ margin: "0 auto", marginTop: "100px" }}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <div className="movie-list">
            {movies !== undefined ? (
              movies.map((movie) => {
                return (
                  <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    searchDetail={searchDetail}
                  />
                );
              })
            ) : (
              <h1 className="empty">Nothing found!</h1>
            )}
          </div>
        )}
      </div>
    </>
  );
}
