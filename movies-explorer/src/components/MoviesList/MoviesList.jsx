import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';
import MovieCard from '../MovieCard/MovieCard';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './MoviesList.css';

function MoviesList({ moviesCards, handleSaveMovie, handleDeleteMovie, savedMoviesCards }) {
  const location = useLocation();
  const windowWidth = useWindowWidth();
  const currentUser = useContext(CurrentUserContext);
  const [cardsQuantity, setCardsQuantity] = useState(0);
  const [moreQuantity, setMoreButtonQuantity] = useState(0);
  const [moviesCardsView, setMoviesCardsView] = useState([]);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  useEffect(() => {
    if (windowWidth >= 1280) {
      setCardsQuantity(12);
      setMoreButtonQuantity(3);
    } else if (windowWidth >= 768) {
      setCardsQuantity(8);
      setMoreButtonQuantity(2);
    } else if (windowWidth >= 480) {
      setCardsQuantity(5);
      setMoreButtonQuantity(2);
    }
  }, [moviesCards]);

  useEffect(() => {
    setMoviesCardsView(moviesCards.filter((item, index) => index < cardsQuantity));
    setIsButtonVisible(true);
  }, [moviesCards, cardsQuantity]);

  useEffect(() => {
    if (cardsQuantity >= moviesCards.length) {
      setIsButtonVisible(false);
    }
  }, [cardsQuantity, moviesCards]);

  useEffect(() => {
    if (moviesCards.length === 0) {
      setIsButtonVisible(false);
    }
  }, [moviesCards]);

  useEffect(() => {
    setTimeout(() => {
      if (windowWidth >= 1280) {
        setMoreButtonQuantity(3);
      } else if (windowWidth >= 768) {
        setMoreButtonQuantity(2);
      } else if (windowWidth >= 480) {
        setMoreButtonQuantity(2);
      }
    }, 1200);
  }, [windowWidth]);
  function handleMoreButtonClick() {
    setMoviesCardsView(moviesCards.filter((item, index) => index < cardsQuantity + moreQuantity));
    setCardsQuantity(moreQuantity + cardsQuantity);
  }

  function setIsSaved(savedMoviesCards, movie) {
    return savedMoviesCards.find((savedMovie) => savedMovie.movieId === movie.id && savedMovie.owner === currentUser.id);
  }

  return location.pathname === '/saved-movies' ? (
    <section className='saved-movies__section'>
      <ul className='saved-movies__list'>
        {moviesCardsView.map((movie) => {
          if (movie.owner === currentUser.id)
            return <MovieCard movie={movie} key={movie._id} handleDeleteMovie={handleDeleteMovie} savedMoviesCards={savedMoviesCards} />;
        })}
      </ul>
    </section>
  ) : (
    <section className='movies__section'>
      <ul className='movies__list'>
        {moviesCardsView.map((movie) => {
          return (
            <MovieCard
              movie={movie}
              key={movie.id}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              savedMoviesCards={savedMoviesCards}
              isSaved={setIsSaved(savedMoviesCards, movie)}
            />
          );
        })}
      </ul>
      {isButtonVisible && (
        <button onClick={handleMoreButtonClick} type='button' className='movies__more-button button'>
          Ещё
        </button>
      )}
    </section>
  );
}
export default MoviesList;
