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
}) {
  function getFoundMovies() {
    if (!localStorage.getItem('foundMovies')) {
      return moviesCards;
    } else {
      return JSON.parse(localStorage.getItem('foundMovies'));
    }
  }

  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    moviesCards.length === 0 ? setIsNotFound(true) : setIsNotFound(false);
  }, [moviesCards]);

  return (
    <main className='movies'>
      <Search handleSearch={handleSearch} handleCheckbox={handleCheckbox} isChecked={isChecked} />

      <p className='movies__user-message'>
        {isDownloadError
          ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          : isNotFound
          ? 'Ничего не найдено'
          : // : moviesCards.length === 0 && !JSON.parse(localStorage.getItem('downloadedMovies'))
            // ? 'Нужно ввести ключевое слово'
            ''}
      </p>

      {isLoading && <Preloader />}
      <MoviesList
        moviesCards={getFoundMovies()}
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
        savedMoviesCards={savedMoviesCards}
      />
    </main>
  );
}

export default Movies;
