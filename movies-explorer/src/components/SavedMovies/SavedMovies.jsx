import MoviesList from '../MoviesList/MoviesList';
import Search from '../Search/Search';
import { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';
function SavedMovies({ handleSearch, handleCheckbox, moviesCards, handleDeleteMovie, savedMoviesCards, isLoading, isDownloadError }) {
  useEffect(() => {
    handleSearch('');
  }, []);

  return (
    <main className='saved-movies'>
      <Search handleSearch={handleSearch} handleCheckbox={handleCheckbox} />
      <p className='saved-movies__user-message'>
        {isDownloadError
          ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          : moviesCards.length === 0
          ? 'Ничего не найдено'
          : ''}
      </p>

      {isLoading && <Preloader />}

      <MoviesList moviesCards={moviesCards} handleDeleteMovie={handleDeleteMovie} savedMoviesCards={savedMoviesCards} />
    </main>
  );
}

export default SavedMovies;
