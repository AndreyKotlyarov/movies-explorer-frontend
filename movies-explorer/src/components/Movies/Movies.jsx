import { useState, useEffect } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import Preloader from '../Preloader/Preloader';
import Search from '../Search/Search';
import './Movies.css';

function Movies({ moviesCards }) {
  const [filteredMoviesCards, setFilteredMoviesCards] = useState([]);

  const [isChecked, setIsChecked] = useState(false);
  function handleCheckbox() {
    setIsChecked(!isChecked);
    findMovies();
  }

  function findMovies(searchQuery) {
    if (!searchQuery) {
      return moviesCards;
    }
    const ruFilms = moviesCards.filter((item) => item.nameRU.toLowerCase().includes(searchQuery.toLowerCase()));
    const enFilms = moviesCards.filter((item) => item.nameEN.toLowerCase().includes(searchQuery.toLowerCase()));
    const newSet = new Set(ruFilms.concat(enFilms));
    const filteredMovies = Array.from(newSet);

    isChecked ? sortShortMovies(filteredMovies) : setFilteredMoviesCards(filteredMovies);
  }

  function sortShortMovies(movies) {
    setFilteredMoviesCards(movies.filter((item) => item.duration <= 40));
  }

  return (
    <main className='movies'>
      <Search findMovies={findMovies} handleCheckbox={handleCheckbox} />
      {/* <Preloader /> */}
      <MoviesList moviesCards={filteredMoviesCards} />
    </main>
  );
}

export default Movies;
