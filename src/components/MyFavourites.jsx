/* eslint-disable react/prop-types */
import Header from "./Header";
import MovieCard from "./MovieCard";
import SideBar from "./SideBar";
import { useState } from "react";
import Footer from "./Footer";

export default function MyFavourites({
  searchDetail,
  scrollToList,
  setMovieName,
  open,
  setAside,
  searchMovies,
}) {
  const [getUsers, setGetUsers] = useState(
    JSON.parse(localStorage.getItem("USERS")) || []
  );
  const currentLog = JSON.parse(localStorage.getItem("LOGIN"));

  // currentFavList
  const index = getUsers.findIndex(
    (item) => item.username === (currentLog ? currentLog[0].username : false)
  );
  const currentFavList = currentLog ? getUsers[index].favourites : [];

  console.log();

  return (
    <>
      <Header
        setMovieName={setMovieName}
        open={open}
        setAside={setAside}
        style="second"
      />
      <h1
        style={{
          paddingTop: "50px",
          textAlign: "center",
          fontSize: "1.6rem",
          fontWeight: "500",
          margin: "110px 20px 20px 20px",
          color: "white",
        }}
        className="my-favourites-title"
      >
        My Favourites
      </h1>
      <div className="favourite-list">
        <div className="movie-list">
          {currentFavList.length > 0 ? (
            currentFavList.map((movie) => {
              return (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  searchDetail={searchDetail}
                />
              );
            })
          ) : (
            <h1 className="empty">Your list is empty!</h1>
          )}
        </div>
      </div>

      <SideBar
        scrollToList={scrollToList}
        setMovieName={setMovieName}
        searchDetail={searchDetail}
        open={open}
        setAside={setAside}
        searchMovies={searchMovies}
      />

      <Footer />
    </>
  );
}
