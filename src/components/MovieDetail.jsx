import { useEffect } from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/MoonLoader";
import Footer from "./Footer";

/* eslint-disable react/prop-types */
export default function MovieDetail({ detail, loading }) {
  const [fav, setFav] = useState(false);

  const [favourites, setFavourites] = useState([""]);

  const [getUsers, setGetUsers] = useState(
    JSON.parse(localStorage.getItem("USERS")) || []
  );
  const currentLog = JSON.parse(localStorage.getItem("LOGIN"));

  // currentFavList
  const index = getUsers.findIndex(
    (item) => item?.username === (currentLog ? currentLog[0]?.username : false)
  );
  const currentFavList = currentLog?.length ? getUsers[index]?.favourites : [];

  //  UseEffect
  useEffect(() => {
    localStorage.setItem("USERS", JSON.stringify(getUsers));
    localStorage.setItem("LOGIN", JSON.stringify(currentLog));
    currentFavList?.some((item) => item.imdbID === detail.imdbID)
      ? setFav(true)
      : setFav(false);
  }, [getUsers, currentLog, favourites, fav]);

  // Add to Favourites Function
  const addToFavourites = () => {
    // add to favourites
    if (!currentFavList?.some((item) => item.imdbID === detail.imdbID)) {
      setFavourites(currentFavList?.push(detail));
    } else {
      // remove from the favourites
      if (currentFavList?.some((item) => item.imdbID === detail.imdbID)) {
        const thisMovie = currentFavList.findIndex(
          (item) => item.imdbID === detail.imdbID
        );
        setFavourites(currentFavList?.splice(thisMovie, 1));
      }
    }

    // console.log("currentFavList", currentFavList);
    // console.log("currentLog", currentLog);

    // console.log(currentFavList?.some((item) => item.Title === detail.Title));
    // console.log(currentFavList?.length);
  };

  return (
    <>
      {(
        detail.Title === undefined ? false : detail.Error !== "Movie not found!"
      ) ? (
        loading ? (
          <ClipLoader
            color={"white"}
            loading={true}
            cssOverride={{ margin: "0 auto", marginTop: "250px" }}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            <div className=" movie-detail">
              <div className="movie-detail-top">
                <div className="movie-detail-image-container">
                  <img
                    src={
                      detail.Poster !== "N/A"
                        ? detail.Poster
                        : "https://via.placeholder.com/400"
                    }
                    alt="image"
                  />

                  <i
                    style={fav ? { color: "orange" } : { color: "black" }}
                    onClick={
                      currentLog?.length
                        ? addToFavourites
                        : () => window.alert("For that you have to login!")
                    }
                    className={
                      fav ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"
                    }
                  ></i>
                </div>
                <div className="movie-detail-info">
                  <h1 className="movie-detail-title">{detail.Title}</h1>
                  <h4
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      textTransform: "uppercase",
                    }}
                    className="movie-detail-year"
                  >
                    {detail.Type}
                  </h4>
                  <h3 className="movie-detail-rating">
                    <i className="fa-solid fa-star"></i>{" "}
                    {detail.Ratings.length >= 1
                      ? detail.Ratings[0].Value
                      : "???"}
                  </h3>
                  <h3 className="movie-detail-year">
                    Country:
                    <p
                      style={{
                        fontWeight: "400",
                        color: "rgba(255, 255, 255, 0.6)",
                        paddingLeft: "7px",
                      }}
                    >
                      {detail.Country}
                    </p>
                  </h3>
                  <h3 className="movie-detail-year">
                    Release date:<pre> </pre>
                    <p
                      style={{
                        fontWeight: "400",
                        color: "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      {detail.Released}
                    </p>
                  </h3>
                  <h3 className="movie-detail-year">
                    Actors:<pre> </pre>
                    <p
                      style={{
                        fontWeight: "400",
                        color: "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      {detail.Actors}
                    </p>
                  </h3>
                  <p className="movie-detail-text">{detail.Plot}</p>
                </div>
              </div>

              <iframe
                width="100%"
                height="380"
                src="https://www.youtube.com/embed/bNJW113tbKk?si=ot6ykWcnJQAjvbsf"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <Footer />
          </>
        )
      ) : (
        <h1
          style={{
            color: "white",
            fontSize: "2rem",
            textAlign: "center",
            marginTop: "200px",
          }}
        >
          Sorry! Can't be found.
        </h1>
      )}
    </>
  );
}
