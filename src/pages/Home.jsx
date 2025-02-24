import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <p>Welcome to the Movie App</p>
      <Link to="/movies"> Browse Movies</Link>
    </div>
  );
};

export default Home;
