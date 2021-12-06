import "./App.css";
import Home from "./Pages/home/Home";
import Topbar from "./Components/topbar/Topbar";
import NewRecipe from "./Pages/newrecipe/NewRecipe";
import Single from "./Pages/single/Single";
import Footer from "./Components/footer/Footer";
import LoginPage from "./Pages/login/LoginPage";
import RegisterPage from "./Pages/register/RegisterPage";
import Profile from "./Pages/Profile/Profile";
import UpdateProfile from "./Pages/Profile/UpdateProfile";
import UpdateRecipe from "./Pages/newrecipe/UpdateRecipe";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "./Context/LoginContext";

function App() {
  const [login] = useContext(LoginContext);
  return (
    <Router>
      <Topbar />
      <div className="App">
        <div className="page">
          <Switch>
            <Route path="/new-recipe">
              {login ? <NewRecipe /> : <Redirect to="/login" />}
            </Route>
            <Route path="/profile">
              {login ? <Profile /> : <Redirect to="/login" />}
            </Route>
            <Route path="/update-profile">
              {login ? <UpdateProfile /> : <Redirect to="/login" />}
            </Route>
            <Route path="/update-recipe">
              {login ? <UpdateRecipe /> : <Redirect to="/login" />}
            </Route>
            <Route path="/recipe/:id">
              {login ? <Single /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
              {login ? <Redirect to="/" /> : <LoginPage />}
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/">
              {login ? <Home /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
