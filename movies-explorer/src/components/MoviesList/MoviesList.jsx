import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';
import { useLocation } from 'react-router-dom';
function MoviesList({ moviesCards }) {
  const location = useLocation();
  return location.pathname === '/saved-movies' ? (
    <section className='saved-movies__section'>
      <ul className='saved-movies__list'>{/* <MovieCard /> */}</ul>
    </section>
  ) : (
    <section className='movies__section'>
      <ul className='movies__list'>
        {moviesCards.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </ul>
      <button type='button' className='movies__more-button button'>
        Ещё
      </button>
    </section>
  );
}
export default MoviesList;
