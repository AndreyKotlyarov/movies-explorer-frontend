import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  function convertTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }
  return (
    <>
      <li className='movie-card'>
        <div className='movie-card__info'>
          <h2 className='movie-card__title'>{movie.nameRU}</h2>
          <p className='movie-card__duration'>{convertTimeFromMins(movie.duration)}</p>
        </div>
        <Link className='movie-card__trailer-link link' to={movie.trailerLink} target='_blank'>
          <img className='movie-card__image' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} />
        </Link>
        <button type='button' className='movie-card__save-button movie-card__save-button_type_active button'></button>
      </li>
    </>
  );
}
export default MovieCard;
