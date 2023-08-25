import { useEffect, useState } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import Preloader from '../Preloader/Preloader';
import Search from '../Search/Search';
import './Movies.css';

function Movies({
  handleSearch,
  handleCheckbox,
  isLoading,
  moviesCards,
  isChecked,
  handleSaveMovie,
  handleDeleteMovie,
  savedMoviesCards,
  isDownloadError,
  isMoviesNotFound,
}) {
  const [foundMovies, setFoundMovies] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem('foundMovies')) {
      return;
    } else {
      setFoundMovies(JSON.parse(localStorage.getItem('foundMovies')));
    }
  }, [moviesCards]);

  function getFoundMovies() {
    if (!foundMovies) {
      return moviesCards;
    } else {
      return foundMovies;
    }
  }

  return (
    <main className='movies'>
      <Search handleSearch={handleSearch} handleCheckbox={handleCheckbox} isChecked={isChecked} />
      {/* {(isDownloadError || isMoviesNotFound) && ( */}
      <p className='movies__user-message'>
        {isDownloadError
          ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          : isMoviesNotFound
          ? 'Ничего не найдено'
          : moviesCards.length === 0 && !JSON.parse(localStorage.getItem('downloadedMovies'))
          ? 'Нужно ввести ключевое слово'
          : ''}
      </p>
      {/* )} */}
      {isLoading && <Preloader />}
      <MoviesList
        moviesCards={getFoundMovies()}
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
        savedMoviesCards={savedMoviesCards}
      />
      {/* )} */}
    </main>
  );
}

export default Movies;
