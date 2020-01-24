import React from "react";

const MovieList = ({ character, movie }) => {
  // const starMovies = movie.map((item) => {
  //   <li key={item.episode_id}>{item.title} </li>;
  // });
  console.log(character[0].films.title);
  // const starMovies = character.films.map(item => {
  // <li key={item.episode_id} >{item.title}</li>
  //})
  // const hero = character.map((item) => {
  //   console.log(item.films.title);
  // });

  console.log(movie);
  return (
    <div></div>
    // <div>
    //   <h3>Movies: </h3>
    //   <ul>{starMovies}</ul>
    // </div>
  );
};

export default MovieList;
