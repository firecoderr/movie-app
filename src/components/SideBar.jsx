import { useNavigate } from "react-router-dom";
import "animate.css";

/* eslint-disable react/prop-types */
export default function SideBar({
  setMovieName,
  open,
  setAside,
  searchMovies,
  scrollToList,
}) {
  const navigate = useNavigate();

  return (
    <>
      <aside className={open ? "side-bar open" : "side-bar"}>
        <li onClick={() => setAside(!open)} className="fa-solid fa-xmark"></li>
        <ul>
          <li
            onClick={() => {
              setMovieName("Avengers");
              searchMovies("Avengers");
              navigate("/");
              setAside(!open);
              setTimeout(() => {
                scrollToList.current.scrollIntoView();
              }, 500);
            }}
          >
            Action
          </li>
          <li
            onClick={() => {
              setMovieName("Comedy");
              searchMovies("Comedy");
              navigate("/");
              setAside(!open);
              setTimeout(() => {
                scrollToList.current.scrollIntoView();
              }, 500);
            }}
          >
            Comedy
          </li>
          <li
            onClick={() => {
              setMovieName("Tremors");
              searchMovies("Tremors");
              navigate("/");
              setAside(!open);
              setTimeout(() => {
                scrollToList.current.scrollIntoView();
              }, 500);
            }}
          >
            Horror
          </li>
          <li
            onClick={() => {
              setMovieName("Vikings");
              searchMovies("Viking");
              navigate("/");
              setAside(!open);
              setTimeout(() => {
                scrollToList.current.scrollIntoView();
              }, 500);
            }}
          >
            Series
          </li>
          <li
            onClick={() => {
              setMovieName("Lego");
              searchMovies("Lego");
              navigate("/");
              setAside(!open);
              setTimeout(() => {
                scrollToList.current.scrollIntoView();
              }, 500);
              console.log(scrollToList);
            }}
          >
            Cartoons
          </li>
        </ul>
      </aside>
    </>
  );
}
