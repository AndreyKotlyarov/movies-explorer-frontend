import MoviesList from '../MoviesList/MoviesList';
import Search from '../Search/Search';
import { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';
function SavedMovies({ handleSearch, handleCheckbox, userMessage, moviesCards, handleDeleteMovie, savedMoviesCards, isLoading }) {
  const [moviesToRender, setMoviesToRender] = useState([]);
  // useEffect(() => {
  //   handleSearch('');
  // }, []);
  useEffect(() => {
    setMoviesToRender(moviesCards);
  }, [moviesCards]);
  return (
    <main className='saved-movies'>
      <Search handleSearch={handleSearch} handleCheckbox={handleCheckbox} />
      {/* {isLoading && <Preloader />} */}
      {userMessage && <span className='movies__user-message'>{userMessage}</span>}
      {isLoading && <Preloader />}

      <MoviesList moviesCards={moviesToRender} handleDeleteMovie={handleDeleteMovie} savedMoviesCards={savedMoviesCards} />
    </main>
  );
}

export default SavedMovies;
