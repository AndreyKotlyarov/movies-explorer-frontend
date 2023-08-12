import { useState } from 'react';
import './Search.css';

function Search({ findMovies, handleCheckbox }) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSetSearchQuery(e) {
    setSearchQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    findMovies(searchQuery);
  }

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <div className='search__input-container'>
          <input value={searchQuery} onChange={handleSetSearchQuery} className='search__input input' required type='text' placeholder='Фильм' />
          <button className='search__button button' type='submit' />
        </div>
        <div className='search__thumbler-container'>
          <input onInput={handleSubmit} onChange={handleCheckbox} className='search__thumbler' type='checkbox' id='search__thumbler' />
          <label className='search__thumbler-label' htmlFor='search__thumbler'>
            Короткометражки
          </label>
        </div>
      </form>
    </section>
  );
}
export default Search;
