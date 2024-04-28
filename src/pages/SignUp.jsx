import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [switchLogin, setSwitchLogin] = useState(true);

  // Show & Hide The Password
  const [show, setShow] = useState(false);

  // Login Function =================================================
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("LOGIN")) || []
  );

  // Sign Up Function ===============================================

  // Username
  const [userName, setUsername] = useState("");
  // Password
  const [passWord, setPassword] = useState("");

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("USERS")) || []
  );

  useEffect(() => {
    localStorage.setItem("USERS", JSON.stringify(users));
    localStorage.setItem("LOGIN", JSON.stringify(login));
  }, [users, login]);

  //   Clear and Navigate
  function clearNav() {
    setUsername("");
    setPassword("");
    setLoginUser("");
    setLoginPass("");
  }

  //   Handle Submit
  const getUser = JSON.parse(localStorage.getItem("USERS"));
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      getUser.some(
        (item) => item.username === userName && item.username !== undefined
      )
    ) {
      window.alert("Such username already exists!");
    } else {
      // Sign the User
      setUsers([
        ...users,
        { username: userName, password: passWord, favourites: [] },
      ]);

      // Login the User
      setLogin([{ username: userName, password: passWord, favourites: [] }]);

      setTimeout(() => {
        clearNav();
        navigate("/movie-app");
      }, 1);
    }
  };

  //   Login Function ====================================================
  //   login Username
  const [loginUser, setLoginUser] = useState("");
  //   Login Password
  const [loginPass, setLoginPass] = useState("");

  function isLoginValid() {
    for (let i = 0; users.length > i; i++) {
      if (users[i].username === loginUser && users[i].password === loginPass) {
        setTimeout(() => {
          clearNav();
          navigate("/movie-app");
        }, 1);
        return setLogin([users[i]]);
      }
    }
    return window.alert("Wrong username or password!");
  }

  const handleLogin = (e) => {
    e.preventDefault();
    isLoginValid();
  };

  //   Style
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  };

  return (
    <>
      <div className="sign-up" style={style}>
        <div
          onClick={() => navigate("/movie-app")}
          style={{
            margin: "20px 0 50px 0",
            fontSize: "2rem",
            fontWeight: "900",
            cursor: "pointer",
          }}
          className="sign-logo"
        >
          MovieMix
        </div>

        {switchLogin ? (
          // Login
          <form
            onSubmit={handleLogin}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              justifyContent: "center",
              fontSize: "1.3rem",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Login</h2>
            <label htmlFor="username">Username</label>
            <input
              required
              onChange={(e) => setLoginUser(e.target.value)}
              type="text"
              id="username"
              value={loginUser}
            />

            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                required
                onChange={(e) => setLoginPass(e.target.value)}
                type={show ? "text" : "password"}
                id="password"
                value={loginPass}
              />
              <i
                onClick={() => setShow(!show)}
                className={show ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
              ></i>
            </div>

            <button>Log In</button>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.6)",
                textAlign: "center",
                lineHeight: ".1rem",
                marginTop: "40px",
              }}
            >
              <a
                onClick={() => setSwitchLogin(false)}
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  textDecoration: "underline",
                  fontWeight: "400",
                }}
              >
                sign up,
              </a>
              if you don't have an account!
            </p>
          </form>
        ) : (
          // Sign Up
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              justifyContent: "center",
              fontSize: "1.3rem",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
              Sign Up
            </h2>
            <label htmlFor="username">Username</label>
            <input
              required
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              value={userName}
            />

            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                id="password"
                value={passWord}
              />
              <i
                onClick={() => setShow(!show)}
                className={show ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
              ></i>
            </div>

            <button>Sign Up</button>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.6)",
                textAlign: "center",
                lineHeight: ".1rem",
                marginTop: "40px",
              }}
            >
              <a
                onClick={() => setSwitchLogin(true)}
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  textDecoration: "underline",
                  fontWeight: "400",
                }}
              >
                login,
              </a>{" "}
              if you already have an account!
            </p>
          </form>
        )}

        {/* Sign Up */}
      </div>
    </>
  );
}
