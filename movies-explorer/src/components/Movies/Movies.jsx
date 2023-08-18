// import { useState, useEffect } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import Preloader from '../Preloader/Preloader';
import Search from '../Search/Search';
import { useEffect } from 'react';
import './Movies.css';

function Movies({
  handleSearch,
  handleCheckbox,
  isLoading,
  userMessage,
  moviesCards,
  isChecked,
  handleSaveMovie,
  handleDeleteMovie,
  savedMoviesCards,
}) {
  useEffect(() => {
    if (!(localStorage.getItem('searchQuery') || localStorage.getItem('isChecked'))) {
      return;
    } else {
      handleSearch(localStorage.getItem('searchQuery'), localStorage.getItem('isChecked'));
    }
  }, []);
  return (
    <main className='movies'>
      <Search findMovies={handleSearch} handleCheckbox={handleCheckbox} isChecked={isChecked} />
      {userMessage && <span className='movies__user-message'>{userMessage}</span>}
      {isLoading && <Preloader />}

      <MoviesList
        moviesCards={moviesCards}
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
        savedMoviesCards={savedMoviesCards}
      />
    </main>
  );
}

export default Movies;
