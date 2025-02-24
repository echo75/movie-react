import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // Import Routes & Route
import "./index.css";
import Home from "./pages/Home"; // Ensure this path is correct
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import ActorDetails from "./pages/ActorDetails";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/actor/:movieId/:actorId" element={<ActorDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
