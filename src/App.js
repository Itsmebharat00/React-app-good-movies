import React from "react";
import "./styles.css";
import { useState } from "react";

const movieList = {
  Scifi: [
    {
      name: "Inception",
      rating: "4.5/5",
      description:
        "Inception is a science fiction action film. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets."
    },
    {
      name: "interstellar",
      rating: "5/5",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans. "
    },
    {
      name: "Pacific Rim",
      rating: "4/5",
      description:
        "Pacific Rim is set the future of 2025 and follows the story of humanity on the brink of destruction after a fissure in the Pacific Ocean creates a portal that allows giant sea-dwelling creatures to wreak havoc across the Pacific Rim. "
    }
  ],

  Animation: [
    {
      name: "Up",
      rating: "5/5",
      description:
        "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway. ... Determined to save his home and keep the promise he made to his wife, widower Carl Fredricksen embarks on a journey to the mysterious Paradise Falls in an airship of his own invention."
    },
    {
      name: "Wreck it ralph",
      rating: "4.5/5",
      description:
        "Ralph is a heavy-handed wrecking' riot with a heart. For 30 years—day in, day out—he's been doing his job as The Bad Guy in the arcade game Fix-it Felix Jr. But it's getting harder and harder to love his job when no one seems to like him for doing it."
    },
    {
      name: "Toy stories",
      rating: "5/5",
      description:
        "Toy Story is about the 'secret life of toys' when people are not around. When Buzz Lightyear, a space-ranger, takes Woody's place as Andy's favorite toy, Woody doesn't like the situation and gets into a fight with Buzz. ... A toy named Woody has it all."
    }
  ],
  Drama: [
    {
      name: "Forrest gump",
      rating: "5/5",
      description:
        "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny."
    },
    {
      name: "Shutter island",
      rating: "5/5",
      description:
        "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane. In 1954, up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance of a patient from Boston's Shutter Island Ashecliffe Hospital, But in the end it get more twisted"
    },
    {
      name: "Catch me if you Can",
      rating: "5/5",
      description:
        "The film is based on the autobiography of Frank Abagnale, who allegedly, before his 19th birthday, successfully performed cons worth millions of dollars by posing as a Pan American World Airways pilot, a Georgia doctor, and a Louisiana parish prosecutor. The truth of his story is questionable."
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
      <p> Check out one of my favourite movies. </p>
      <p>Click on the different category from below to get started. </p>

      <div>
        {Object.keys(movieList).map((film) => (
          <button
            onClick={() => filmClickHandler(film)}
            style={{
              color: "white",
              background: "#3D56B2",
              padding: "0.5rem  5rem",
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
            padding: "3rem 5rem",
            listStyle: "none",
            marginLeft: "100px",
            // display: "block",
            textAlign: "center"
            // border: "1px solid white"
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
                Movie: {movie.name}
              </div>
              <div style={{ fontSize: "large" }}> Ratings: {movie.rating} </div>
              <div
                style={{
                  fontSize: "large",
                  margin: "1rem",
                  wordWrap: "breakWord",
                  textAlign: "center"
                }}
              >
                {" "}
                {movie.description}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
