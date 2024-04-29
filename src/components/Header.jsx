/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";

export default function Header({
  style,
  setMovieName,
  searchMovies,
  open,
  setAside,
}) {
  const getLogin =
    JSON.parse(localStorage.getItem("LOGIN")) !== null
      ? JSON.parse(localStorage.getItem("LOGIN"))
      : false;
  const [log, setLog] = useState(getLogin);
  const navigate = useNavigate();
  const [header, setHeader] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  });

  return (
    <>
      {/* Top Header */}
      <header className={style === "second" ? style : header ? "appear" : ""}>
        <div className="header-container">
          <i onClick={() => setAside(!open)} className="fa-solid fa-bars"></i>

          <a
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
              setMovieName("Avengers");
              searchMovies("Avengers");

              // const user = JSON.parse(localStorage.getItem("USER")) || [];
              // user.push("hello");
              // localStorage.setItem("USER", JSON.stringify(user));
            }}
            className="logo"
          >
            MovieMix
          </a>

          <nav>
            {log.length > 0 ? (
              <Profile setLog={setLog} />
            ) : (
              <a
                onClick={() => {
                  navigate("/signup");
                }}
                className="login-btn"
              >
                <span>Login</span>
                <i className="fa-solid fa-right-to-bracket"></i>
              </a>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
