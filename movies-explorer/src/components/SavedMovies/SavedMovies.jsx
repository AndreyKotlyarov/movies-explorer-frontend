import MoviesList from '../MoviesList/MoviesList';
import Search from '../Search/Search';
import { useEffect } from 'react';
// import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';
function SavedMovies({ handleSearch, handleCheckbox, userMessage, moviesCards, handleDeleteMovie, savedMoviesCards }) {
  useEffect(() => {
    handleSearch('');
  }, []);
  return (
    <main className='saved-movies'>
      <Search findMovies={handleSearch} handleCheckbox={handleCheckbox} />
      {/* {isLoading && <Preloader />} */}
      {userMessage && <span className='movies__user-message'>{userMessage}</span>}

      <MoviesList moviesCards={moviesCards} handleDeleteMovie={handleDeleteMovie} savedMoviesCards={savedMoviesCards} />
    </main>
  );
}

export default SavedMovies;
