/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyFavourites from "./components/MyFavourites";
import About from "./pages/About";
import MovieDetails from "./pages/MovieDetails";
import SignUp from "./pages/SignUp";

// API key: aab61b74
const API_URL = "http://www.omdbapi.com?apikey=aab61b74";

// const movies = [{ Title: "batman" }, { Title: "superman" }];

export default function App() {
  // Loading
  const [loading, setLoading] = useState(false);

  // Scroll To The Movie List
  const scrollToList = useRef();

  // Open Side Bar
  const [aside, setAside] = useState(false);

  // Movies
  const [movies, setMovies] = useState([]);

  // Movie Name
  const [movieName, setMovieName] = useState(
    localStorage.getItem("MovieName") !== null
      ? localStorage.getItem("MovieName")
      : "Avengers"
  );
  localStorage.setItem("MovieName", movieName);

  // Movie Detail
  const [detail, setDetail] = useState(
    JSON.parse(localStorage.getItem("filmDetail")) !== null
      ? JSON.parse(localStorage.getItem("filmDetail"))
      : {}
  );
  localStorage.setItem("filmDetail", JSON.stringify(detail));

  // Search for Detail
  const searchDetail = async (title) => {
    setLoading(true);

    const response = await fetch(
      `${API_URL}&t=${
        title.toLowerCase() === "the flash" ? title + "&type=movie" : title
      }`
    );
    const data = await response.json();
    Object.keys(data).length !== 0 && setDetail(data);

    setLoading(false);
  };

  // Get List Of Movies In Input Search
  const [searchList, setSearchList] = useState([]);
  const fetchData = async (title) => {
    fetch(`${API_URL}&s=${title}`)
      .then((response) => response.json())
      .then((json) => setSearchList(json.Search));
  };

  // Search Movie
  const searchMovies = async (title) => {
    setLoading(true);

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);

    setLoading(false);
  };

  useEffect(() => {
    searchMovies(movieName);
  }, []);

  // Root ********************************
  return (
    <>
      <Routes>
        {/* About */}
        <Route
          path="/my-favourites"
          element={
            <MyFavourites
              searchDetail={searchDetail}
              scrollToList={scrollToList}
              setMovieName={setMovieName}
              open={aside}
              setAside={setAside}
              searchMovies={searchMovies}
            />
          }
        />
        <Route
          path=""
          element={
            <About
              scrollToList={scrollToList}
              loading={loading}
              style={"first"}
              setMovieName={setMovieName}
              searchMovies={searchMovies}
              open={aside}
              setAside={setAside}
              searchDetail={searchDetail}
              movieName={movieName}
              searchList={searchList}
              setSearchList={setSearchList}
              fetchData={fetchData}
              movies={movies}
            />
          }
        />

        {/* Movie List */}
        <Route
          path="/movie-details"
          element={
            <MovieDetails
              scrollToList={scrollToList}
              loading={loading}
              searchDetail={searchDetail}
              detail={detail}
              open={aside}
              setAside={setAside}
              searchMovies={searchMovies}
              setMovieName={setMovieName}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
