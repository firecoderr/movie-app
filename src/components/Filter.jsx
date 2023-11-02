/* eslint-disable react/prop-types */
export default function Filter({
  scrollToList,
  movieName,
  searchList,
  fetchData,
  setSearchList,
  searchMovies,
  setMovieName,
}) {
  return (
    <>
      {/* Filter Form */}
      <form
        onSubmit={(e) => {
          const filmName = localStorage.getItem("MovieName");
          e.preventDefault();
          scrollToList.current.scrollIntoView();
          searchMovies(movieName);
          setSearchList([]);
          setMovieName = { filmName };
        }}
        className="search-container"
      >
        {/* Search Input */}
        <input
          value={
            movieName !== "Lego" &&
            movieName !== "Avengers" &&
            movieName !== "Comedy" &&
            movieName !== "Vikings" &&
            movieName !== "Tremors" &&
            movieName !== "Avengers" &&
            movieName !== "Avengers"
              ? movieName
              : ""
          }
          required
          placeholder="Search for any movie"
          type="text"
          className="search-input"
          onChange={(e) => {
            setMovieName(e.target.value);
            fetchData(e.target.value);
          }}
        />
        {/* Search Button */}
        <button style={{ backgroundColor: "transparent", border: "none" }}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        <ul className="sub-input-recomandation">
          {searchList !== undefined
            ? searchList.map((item) => {
                return (
                  <li
                    onClick={(e) => {
                      setMovieName(e.target.textContent);
                      setSearchList([]);
                      searchMovies(e.target.textContent);
                      scrollToList.current.scrollIntoView();
                    }}
                    key={item.imdbID}
                  >
                    {item.Title}
                  </li>
                );
              })
            : null}
        </ul>
      </form>
    </>
  );
}
