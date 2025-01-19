import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import fetchMovies from '../utils/fetchMovies';

const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const results = await fetchMovies(query);
    setMovies(results);
  };

  return (
    <div className="container">
      <h1>Movie Search App</h1>
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
