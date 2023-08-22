// import { useState, useEffect } from 'react';
import MoviesList from '../MoviesList/MoviesList';
import Preloader from '../Preloader/Preloader';
import Search from '../Search/Search';
import { useEffect, useState } from 'react';
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
  const [moviesToRender, setMoviesToRender] = useState([]);
  useEffect(() => {
    if (!(localStorage.getItem('searchQuery') || localStorage.getItem('isChecked'))) {
      return;
    } else {
      setMoviesToRender(JSON.parse(localStorage.getItem('foundMovies')));
    }
  }, [moviesCards]);

  // useEffect(() => {
  //   if (!localStorage.getItem('filteredMoviesCards')) {
  //     return;
  //   } else {
  //     moviesCards = JSON.parse(localStorage.getItem('filteredMoviesCards'));
  //     console.log(moviesCards);
  //   }
  // }, []);

  return (
    <main className='movies'>
      <Search handleSearch={handleSearch} handleCheckbox={handleCheckbox} isChecked={isChecked} />
      {userMessage && <span className='movies__user-message'>{userMessage}</span>}
      {isLoading && <Preloader />}

      <MoviesList
        moviesCards={moviesToRender}
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
        savedMoviesCards={savedMoviesCards}
      />
    </main>
  );
}

export default Movies;
