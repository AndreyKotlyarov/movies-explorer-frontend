import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';
function MoviesList() {
  return (
    <>
      <ul className='movies-list'>
        <MovieCard />
      </ul>
      <button className='movies__more-button'>Ещё</button>
    </>
  );
}
export default MoviesList;
