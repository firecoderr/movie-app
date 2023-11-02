/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Slider from "../components/Slider";
import Filter from "../components/Filter";
import SideBar from "../components/SideBar";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

// About Component **********************************
export default function About({
  scrollToList,
  loading,
  setMovieName,
  searchMovies,
  open,
  setAside,
  searchDetail,
  movieName,
  searchList,
  setSearchList,
  fetchData,
  movies,
}) {
  return (
    <>
      {/* Header */}
      <Header
        style={"first"}
        setMovieName={setMovieName}
        searchMovies={searchMovies}
        open={open}
        setAside={setAside}
      />

      {/* Slider */}
      <Slider searchDetail={searchDetail} />

      {/* Filter */}
      <Filter
        scrollToList={scrollToList}
        movieName={movieName}
        searchList={searchList}
        setSearchList={setSearchList}
        fetchData={fetchData}
        setMovieName={setMovieName}
        searchMovies={searchMovies}
      />

      {/* SideBar */}
      <SideBar
        setMovieName={setMovieName}
        open={open}
        setAside={setAside}
        searchMovies={searchMovies}
        scrollToList={scrollToList}
      />

      {/* Movie List */}
      <MovieList
        scrollToList={scrollToList}
        movies={movies}
        searchDetail={searchDetail}
        loading={loading}
      />

      <Footer />
    </>
  );
}
