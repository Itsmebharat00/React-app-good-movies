import React from "react";
import "./styles.css";
import { useState } from "react";

const movieList = {
  Scifi: [
    { name: "Inception", rating: "4.5/5" },
    { name: "interstelar", rating: "5/5" }
  ],

  animation: [
    {
      name: "Up",
      rating: "5/5"
    },
    {
      name: "wreck it ralph",
      rating: "4.5/5"
    }
  ],
  Drama: [
    {
      name: "forest gump",
      rating: "4.5/5"
    },
    {
      name: "Shutter island",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedFilm, setFilm] = useState("Scifi");
  function filmClickHandler(film) {
    setFilm(film);
    // console.log(filmClickHandler);
  }

  return (
    <div className="App">
      <h1> Good movies </h1>
      <p> Check out one of my favourite movies </p>

      <div>
        {Object.keys(movieList).map((film) => (
          <button
            onClick={() => filmClickHandler(film)}
            style={{
              color: "white",
              background: "#3D56B2",
              padding: "0.5rem  2rem",
              border: "2px solid black",
              margin: "1rem"
            }}
          >
            {film}
          </button>
        ))}
      </div>

      <div>
        <ul
          style={{
            padding: "1rem",
            listStyle: "none",
            margin: "auto",
            display: "block"
          }}
        >
          {movieList[selectedFilm].map((movie) => (
            <li
              key={movie.name}
              style={{
                padding: "1rem",
                width: "80%",
                margin: "1rem"
              }}
            >
              <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                {movie.name}
              </div>
              <div style={{ fontSize: "large" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
