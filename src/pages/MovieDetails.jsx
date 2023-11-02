/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieDetail from "../components/MovieDetail";
import SideBar from "../components/SideBar";

export default function MovieDetails({
  scrollToList,
  detail,
  searchDetail,
  setAside,
  open,
  searchMovies,
  setMovieName,
  loading,
}) {
  return (
    <>
      <Header
        style={"second"}
        open={open}
        setAside={setAside}
        setMovieName={setMovieName}
        searchMovies={searchMovies}
      />
      <SideBar
        scrollToList={scrollToList}
        setMovieName={setMovieName}
        searchDetail={searchDetail}
        open={open}
        setAside={setAside}
        searchMovies={searchMovies}
      />
      <MovieDetail detail={detail} loading={loading} />
    </>
  );
}
