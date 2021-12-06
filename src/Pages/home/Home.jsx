import "./home.css";
import Recipes from "../../Components/recipes/Recipes";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch("/user");
  }, []);
  return (
    <div>
      <div className="home">
        <Recipes />
      </div>
    </div>
  );
};

export default Home;
