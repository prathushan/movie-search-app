const fetchMovies = async (query) => {
    const API_KEY = 'your_omdb_api_key'; // Replace with your OMDb API key
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const data = await response.json();
    return data.Search || [];
  };
  
  export default fetchMovies;