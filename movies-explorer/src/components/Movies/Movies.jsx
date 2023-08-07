import MoviesList from '../MoviesList/MoviesList';
import Search from '../Search/Search';
import './Movies.css';
function Movies({ moviesCards }) {
  return (
    <main className='movies'>
      <Search />
      <MoviesList moviesCards={moviesCards} />
    </main>
  );
}

export default Movies;
