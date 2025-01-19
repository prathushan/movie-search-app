import React from 'react';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.Poster} alt={movie.Title} className="poster" />
    <h3 className="title">{movie.Title}</h3>
    <p className="year">{movie.Year}</p>
  </div>
);

export default MovieCard;
