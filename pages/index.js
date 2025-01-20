import { useState, useEffect } from "react";
import "../styles/global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMoviesByCategory = async () => {
      try {
        const apiKey = "61d07f02571e95cc9019834adca084c3";

        const [popularResponse, topRatedResponse, upcomingResponse] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`),
          fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`),
          fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US`),
        ]);

        const popularData = await popularResponse.json();
        const topRatedData = await topRatedResponse.json();
        const upcomingData = await upcomingResponse.json();

        setPopularMovies(popularData.results || []);
        setTopRatedMovies(topRatedData.results || []);
        setUpcomingMovies(upcomingData.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies by category", error);
        setLoading(false);
      }
    };

    fetchMoviesByCategory();
  }, []);

  const handleMovieClick = async (movieId) => {
    try {
      const apiKey = "61d07f02571e95cc9019834adca084c3";
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
      );
      const data = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error("Error fetching movie details", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <h1>Movie Looks</h1>

      {selectedMovie ? (
        <div className="movie-details">
          <button onClick={() => setSelectedMovie(null)}>Back to Movies</button>
          <h2>{selectedMovie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} />
          <p><strong>Release Date:</strong> {selectedMovie.release_date}</p>
          <p><strong>Overview:</strong> {selectedMovie.overview}</p>
          <p><strong>Rating:</strong> {selectedMovie.vote_average}</p>
          <p><strong>Genres:</strong> {selectedMovie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      ) : (
        <>
          <div className="category">
            <h2>Popular Movies</h2>
            <div className="movie-list">
              {popularMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="movie-item"
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  <h3>{movie.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="category">
            <h2>Top Rated Movies</h2>
            <div className="movie-list">
              {topRatedMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="movie-item"
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  <h3>{movie.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="category">
            <h2>Upcoming Movies</h2>
            <div className="movie-list">
              {upcomingMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="movie-item"
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  <h3>{movie.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
