import { useState, useEffect } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import MoviesList from '../MoviesList/MoviesList';
import Preloader from '../Preloader/Preloader';
import Search from '../Search/Search';
import './Movies.css';
function Movies({ moviesCards }) {
  const windowWidth = useWindowWidth();
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
  }, []);

  useEffect(() => {
    setMoviesCardsView(moviesCards.filter((item, index) => index < cardsQuantity));
    setIsButtonVisible(true);
  }, [moviesCards, cardsQuantity]);

  useEffect(() => {
    if (cardsQuantity >= moviesCards.length) {
      setIsButtonVisible(false);
    }
  }, [cardsQuantity]);

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
  return (
    <main className='movies'>
      <Search />
      {/* <Preloader /> */}
      <MoviesList moviesCards={moviesCardsView} />
      {isButtonVisible && (
        <button onClick={handleMoreButtonClick} type='button' className='movies__more-button button'>
          Ещё
        </button>
      )}
    </main>
  );
}

export default Movies;
