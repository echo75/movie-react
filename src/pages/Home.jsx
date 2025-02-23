import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>All Movies.</p>

      <Link to="/movies"> Browse Movies</Link>
    </div>
  );
};

export default Home;
