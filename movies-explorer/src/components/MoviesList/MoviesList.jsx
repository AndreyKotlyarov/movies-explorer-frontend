import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';
function MoviesList() {
  return (
    <section className='movies__section'>
      <ul className='movies__list'>
        <MovieCard />
      </ul>
      <button type='button' className='movies__more-button button'>
        Ещё
      </button>
    </section>
  );
}
export default MoviesList;
