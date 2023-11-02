import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Profile({ setLog }) {
  const getLogin = JSON.parse(localStorage.getItem("LOGIN"));

  const navigate = useNavigate();

  return (
    <>
      <div className="profile">
        <i className="fa-solid fa-user"></i>

        <profile className="profile-box">
          <h3 className="profile-title">Hello, {getLogin[0].username}!</h3>
          <hr />
          <button
            onClick={() => {
              navigate("/my-favourites");
              window.scrollTo(0, 0);
            }}
            className="favourites-btn"
          >
            <i className="fa-solid fa-bookmark"></i> My Favourites
          </button>

          <button
            onClick={() => {
              localStorage.setItem("LOGIN", false);
              setLog(false);
              navigate("/");
              window.scrollTo(0, 0);
              window.location.reload(false);
            }}
            className="logout-btn"
          >
            Log out<i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </profile>
      </div>
    </>
  );
}
