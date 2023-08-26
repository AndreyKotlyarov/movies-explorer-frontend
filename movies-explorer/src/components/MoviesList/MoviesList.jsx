import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';
import MovieCard from '../MovieCard/MovieCard';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './MoviesList.css';
import {
  DESKTOP_CARDS_QUANTITY,
  DESKTOP_MORE_QUANTITY,
  TABLET_CARDS_QUANTITY,
  TABLET_MORE_QUANTITY,
  MOBILE_CARDS_QUANTITY,
  MOBILE_MORE_QUANTITY,
} from '../../utils/consts';

function MoviesList({ moviesCards, handleSaveMovie, handleDeleteMovie, savedMoviesCards }) {
  const location = useLocation();
  const windowWidth = useWindowWidth();
  const currentUser = useContext(CurrentUserContext);
  const [cardsQuantity, setCardsQuantity] = useState(0);
  const [moreQuantity, setMoreButtonQuantity] = useState(0);
  const [moviesCardsView, setMoviesCardsView] = useState([]);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    if (windowWidth > 1024) {
      setCardsQuantity(DESKTOP_CARDS_QUANTITY);
      setMoreButtonQuantity(DESKTOP_MORE_QUANTITY);
    } else if (windowWidth <= 1007 && windowWidth > 635) {
      setCardsQuantity(TABLET_CARDS_QUANTITY);
      setMoreButtonQuantity(TABLET_MORE_QUANTITY);
    } else if (windowWidth <= 635) {
      setCardsQuantity(MOBILE_CARDS_QUANTITY);
      setMoreButtonQuantity(MOBILE_MORE_QUANTITY);
    }
  }, []);

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
      if (windowWidth > 1024) {
        // setCardsQuantity(DESKTOP_CARDS_QUANTITY);
        setMoreButtonQuantity(DESKTOP_MORE_QUANTITY);
      } else if (windowWidth <= 1007 && windowWidth > 635) {
        // setCardsQuantity(TABLET_CARDS_QUANTITY);
        setMoreButtonQuantity(TABLET_MORE_QUANTITY);
      } else if (windowWidth <= 635) {
        // setCardsQuantity(MOBILE_CARDS_QUANTITY);
        setMoreButtonQuantity(MOBILE_MORE_QUANTITY);
      }
    }, 1200);
  }, [windowWidth, moviesCards]);
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
