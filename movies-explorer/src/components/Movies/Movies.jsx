import MoviesList from '../MoviesList/MoviesList';
import Search from '../Search/Search';
import './Movies.css';
function Movies() {
  return (
    <main className='movies__container'>
      <Search />
      <MoviesList />
    </main>
  );
}

export default Movies;
