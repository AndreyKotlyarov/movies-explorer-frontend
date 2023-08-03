import MoviesList from '../MoviesList/MoviesList';
import Search from '../Search/Search';
import './SavedMovies.css';
function SavedMovies() {
  return (
    <main className='saved-movies'>
      <Search />
      <MoviesList />
    </main>
  );
}

export default SavedMovies;
