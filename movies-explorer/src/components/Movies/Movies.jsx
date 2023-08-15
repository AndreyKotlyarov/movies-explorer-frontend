import { useState, useEffect } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import Preloader from '../Preloader/Preloader';
import Search from '../Search/Search';
import './Movies.css';
import moviesApi from '../../utils/MoviesApi';
function Movies() {
  const [filteredMoviesCards, setFilteredMoviesCards] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [moviesCards, setMoviesCards] = useState([]);

  function handleCheckbox() {
    setIsChecked(!isChecked);
    findMovies();
  }

  async function downloadMovies() {
    setIsLoading(true);
    try {
      const movies = await moviesApi.getMoviesCards();
      // setMoviesCards(movies);
      setIsLoading(false);
      setIsError(false);
      return movies;
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setIsError(true);
      return [];
    }
  }

  function findMovies(movies, searchQuery) {
    if (!searchQuery) {
      setUserMessage('Нужно ввести ключевое слово');
      return;
    }
    setUserMessage(false);
    const ruFilms = movies.filter((item) => item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()));
    const enFilms = movies.filter((item) => item.nameEN.toLowerCase().includes(searchQuery.toLowerCase()));
    const newSet = new Set(ruFilms.concat(enFilms));
    const filteredMovies = Array.from(newSet);
    isChecked ? sortShortMovies(filteredMovies) : setFilteredMoviesCards(filteredMovies);
  }

  async function handleSearch(searchQuery) {
    const movies = await downloadMovies();
    findMovies(movies, searchQuery);
  }

  useEffect(() => {
    if (filteredMoviesCards.length === 0) {
      isError
        ? setUserMessage(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          )
        : setUserMessage('Ничего не найдено');
    }
  }, [filteredMoviesCards]);

  useEffect(() => {
    setUserMessage('Нужно ввести ключевое слово');
  }, []);

  function sortShortMovies(movies) {
    setFilteredMoviesCards(movies.filter((item) => item.duration <= 40));
  }

  return (
    <main className='movies'>
      <Search findMovies={handleSearch} handleCheckbox={handleCheckbox} />
      {isLoading && <Preloader />}
      {userMessage && <span className='movies__user-message'>{userMessage}</span>}

      <MoviesList moviesCards={filteredMoviesCards} />
    </main>
  );
}

export default Movies;
