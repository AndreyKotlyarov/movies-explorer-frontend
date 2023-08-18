import { Link, useLocation } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie, handleSaveMovie, handleDeleteMovie, savedMoviesCards, isSaved }) {
  const location = useLocation();
  function convertTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }

  function onSaveClick() {
    handleSaveMovie(movie);
  }
  function onDeleteClick() {
    handleDeleteMovie(savedMoviesCards.filter((m) => m.movieId === movie.id)[0]);
  }
  function onSavedMoviesDeleteClick(e) {
    handleDeleteMovie(movie);
    e.target.closest('.movie-card').remove();
  }
  return (
    <>
      <li className='movie-card'>
        <div className='movie-card__info'>
          <h2 className='movie-card__title'>{movie.nameRU}</h2>
          <p className='movie-card__duration'>{convertTimeFromMins(movie.duration)}</p>
        </div>
        <Link className='movie-card__trailer-link link' to={movie.trailerLink} target='_blank'>
          <img
            className='movie-card__image'
            src={location.pathname === '/saved-movies' ? `${movie.image}` : `https://api.nomoreparties.co/${movie.image.url}`}
            alt={movie.nameRU}
          />
        </Link>
        {location.pathname === '/saved-movies' ? (
          <button
            onClick={onSavedMoviesDeleteClick}
            type='button'
            className={`movie-card__save-button button movie-card__save-button_type_delete`}
          ></button>
        ) : (
          <button
            onClick={isSaved ? onDeleteClick : onSaveClick}
            type='button'
            className={`movie-card__save-button button ${isSaved ? 'movie-card__save-button_type_active' : 'movie-card__save-button_type_inactive'}`}
          ></button>
        )}
      </li>
    </>
  );
}
export default MovieCard;
