import "./topbar.css";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

const Topbar = () => {
  const [login, setLogin] = useContext(LoginContext);
  useEffect(() => {
    localStorage.getItem("token") ? setLogin(true) : setLogin(false);
  }, []);
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fab fa-facebook topIcon"></i>
        <i className="fab fa-twitter topIcon"></i>
        <i className="fab fa-instagram topIcon"></i>
        <i className="fab fa-linkedin topIcon"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">{login && <Link to="/">HOME</Link>}</li>
          {login && (
            <>
              <li className="topListItem">
                <Link to="/new-recipe">New Recipe</Link>
              </li>
              <li className="topListItem">
                <Link to="/profile">Profile</Link>
              </li>
            </>
          )}
          {login ? (
            <li className="topListItem">
              <Link
                to="/login"
                onClick={() => {
                  setLogin(false);
                  localStorage.removeItem("token");
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link to="/login">Login</Link>
              </li>
              <li className="topListItem">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
        </ul>
      </div>
      <div className="topRight">
        <i className="fas fa-search topSearchIcon"></i>
      </div>
    </div>
  );
};

export default Topbar;
