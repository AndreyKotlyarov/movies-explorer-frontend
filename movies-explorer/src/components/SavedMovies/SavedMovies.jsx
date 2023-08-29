import MoviesList from '../MoviesList/MoviesList';
import Search from '../Search/Search';
import { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';
function SavedMovies({
  handleSearch,
  handleCheckbox,
  moviesCards,
  handleDeleteMovie,
  savedMoviesCards,
  isLoading,
  isDownloadError,
  setIsChecked,
  setSavedMoviesChecked,
}) {
  useEffect(() => {
    setIsChecked(false);
    setSavedMoviesChecked(false);
    handleSearch('');
  }, []);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    moviesCards.length === 0 ? setIsNotFound(true) : setIsNotFound(false);
  }, [moviesCards]);

  return (
    <main className='saved-movies'>
      <Search handleSearch={handleSearch} handleCheckbox={handleCheckbox} setIsChecked={setIsChecked} setSavedMoviesChecked={setSavedMoviesChecked} />
      <p className='saved-movies__user-message'>
        {isDownloadError
          ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          : isNotFound
          ? 'Ничего не найдено'
          : ''}
      </p>

      {isLoading && <Preloader />}

      <MoviesList moviesCards={moviesCards} handleDeleteMovie={handleDeleteMovie} savedMoviesCards={savedMoviesCards} />
    </main>
  );
}

export default SavedMovies;
